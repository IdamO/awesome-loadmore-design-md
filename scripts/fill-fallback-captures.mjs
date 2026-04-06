import path from 'node:path';
import fs from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { DESIGN_DIR, ensureDir, readJson, writeJson } from './lib/utils.mjs';

const args = new Map(process.argv.slice(2).map((arg) => {
  const [key, value = 'true'] = arg.replace(/^--/, '').split('=');
  return [key, value];
}));
const onlySlug = args.get('slug');
const force = args.get('force') === 'true';

async function listMetaFiles(root) {
  const entries = await fs.readdir(root, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => path.join(root, entry.name, 'meta.json'));
}

async function download(url, outFile) {
  const response = await fetch(url, {
    headers: {
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36'
    }
  });
  if (!response.ok) {
    throw new Error(`Failed to download ${url}: ${response.status} ${response.statusText}`);
  }
  const buffer = Buffer.from(await response.arrayBuffer());
  await fs.writeFile(outFile, buffer);
}

function buildFallbackImages(source, desktopOut, mobileOut) {
  const code = `
import json
import sys
from PIL import Image, ImageOps, ImageFilter

source, desktop_out, mobile_out = sys.argv[1:4]
img = Image.open(source).convert('RGB')

def palette(image):
    pal = image.resize((160, 160)).quantize(colors=8, method=2)
    colors = pal.getcolors() or []
    raw = pal.getpalette()
    result = []
    for count, index in sorted(colors, reverse=True)[:8]:
        rgb = raw[index * 3:index * 3 + 3]
        result.append({'hex': '#%02x%02x%02x' % tuple(rgb), 'count': int(count)})
    return result

def compose(size, out_file):
    bg = ImageOps.fit(img, size, method=Image.Resampling.LANCZOS)
    bg = bg.filter(ImageFilter.GaussianBlur(24))
    fg = ImageOps.contain(img, size, method=Image.Resampling.LANCZOS)
    canvas = bg.copy()
    x = (size[0] - fg.size[0]) // 2
    y = (size[1] - fg.size[1]) // 2
    canvas.paste(fg, (x, y))
    canvas.save(out_file, format='JPEG', quality=84, optimize=True)

compose((1440, 980), desktop_out)
compose((390, 844), mobile_out)
print(json.dumps({'palette': palette(img)}))
`.trim();
  const output = execFileSync('python3', ['-c', code, source, desktopOut, mobileOut], { encoding: 'utf8' });
  return JSON.parse(output);
}

function ensureAnalysis(meta, variant) {
  meta.capture ||= {};
  meta.capture[variant] ||= { ok: false, errors: [] };
  meta.capture[variant].analysis ||= {};
  return meta.capture[variant];
}

function maybeInjectPalette(analysis, palette) {
  if (!Array.isArray(analysis.colors) || !analysis.colors.length) {
    analysis.colors = palette;
  }
  analysis.screenshotPalette = palette;
}

async function processMeta(metaPath) {
  const meta = await readJson(metaPath, null);
  if (!meta) return { changed: false, reason: 'missing-meta' };
  if (onlySlug && meta.slug !== onlySlug) return { changed: false, reason: 'filtered' };
  if (!meta.posterImage) return { changed: false, reason: 'no-poster' };

  const desktopHasShot = Boolean(meta.capture?.desktop?.screenshot);
  const mobileHasShot = Boolean(meta.capture?.mobile?.screenshot);
  if (!force && desktopHasShot && mobileHasShot) {
    return { changed: false, reason: 'already-complete', slug: meta.slug };
  }

  const dir = path.dirname(metaPath);
  const shotsDir = path.join(dir, 'screenshots');
  await ensureDir(shotsDir);
  const sourceFile = path.join(shotsDir, '_poster-source');
  const desktopOut = path.join(shotsDir, 'desktop.jpg');
  const mobileOut = path.join(shotsDir, 'mobile.jpg');

  await download(meta.posterImage, sourceFile);
  const { palette } = buildFallbackImages(sourceFile, desktopOut, mobileOut);
  await fs.unlink(sourceFile).catch(() => {});

  const desktop = ensureAnalysis(meta, 'desktop');
  const mobile = ensureAnalysis(meta, 'mobile');
  if (force || !desktopHasShot) {
    desktop.screenshot = 'screenshots/desktop.jpg';
    desktop.fallback = { type: 'posterImage', source: meta.posterImage };
    maybeInjectPalette(desktop.analysis, palette);
  }
  if (force || !mobileHasShot) {
    mobile.screenshot = 'screenshots/mobile.jpg';
    mobile.fallback = { type: 'posterImage', source: meta.posterImage };
    maybeInjectPalette(mobile.analysis, palette);
  }

  meta.captureChecklist ||= {};
  meta.captureChecklist.desktopScreenshotSaved = Boolean(meta.capture?.desktop?.screenshot);
  meta.captureChecklist.mobileScreenshotSaved = Boolean(meta.capture?.mobile?.screenshot);
  meta.captureChecklist.colorPaletteExtracted = Boolean(
    meta.capture?.desktop?.analysis?.colors?.length || meta.capture?.mobile?.analysis?.colors?.length
  );
  meta.capture ||= {};
  meta.capture.fallbackUsed = true;
  meta.capture.fallbackSource = 'posterImage';
  meta.capture.fallbackAt = new Date().toISOString();

  await writeJson(metaPath, meta);
  return { changed: true, slug: meta.slug, title: meta.title };
}

const metaFiles = await listMetaFiles(DESIGN_DIR);
const results = [];
for (const metaFile of metaFiles) {
  results.push(await processMeta(metaFile));
}

const changed = results.filter((item) => item.changed);
const summary = {
  total: results.length,
  changed: changed.length,
  sample: changed.slice(0, 20)
};
console.log(JSON.stringify(summary, null, 2));

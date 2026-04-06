import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { chromium, devices } from 'playwright';
import { normalizeColor } from './lib/colors.mjs';
import { DATA_DIR, DESIGN_DIR, ensureDir, readJson, slugify, writeJson } from './lib/utils.mjs';

const POSTS_FILE = path.join(DATA_DIR, 'loadmore-posts.json');
const MANUAL_FILE = path.join(DATA_DIR, 'manual-sites.json');
const SUMMARY_FILE = path.join(DATA_DIR, 'capture-summary.json');
const args = new Map(process.argv.slice(2).map((arg) => {
  const [key, value = 'true'] = arg.replace(/^--/, '').split('=');
  return [key, value];
}));
const limit = args.has('limit') ? Number(args.get('limit')) : Infinity;
const onlySlug = args.get('slug');
const concurrency = args.has('concurrency') ? Number(args.get('concurrency')) : 2;
const force = args.get('force') === 'true';
const headed = args.get('headed') === 'true';
const settleMs = args.has('settle') ? Number(args.get('settle')) : 5000;

function pickColors(candidates, max = 8) {
  const counts = new Map();
  for (const candidate of candidates) {
    const color = normalizeColor(candidate);
    if (!color) continue;
    counts.set(color, (counts.get(color) || 0) + 1);
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, max)
    .map(([hex, count]) => ({ hex, count }));
}

function mergeColors(...groups) {
  const seen = new Set();
  const out = [];
  for (const group of groups) {
    for (const color of group || []) {
      if (!color?.hex || seen.has(color.hex)) continue;
      seen.add(color.hex);
      out.push(color);
    }
  }
  return out.slice(0, 8);
}

function extractImagePalette(filePath) {
  try {
    const code = `
import json
import sys
from PIL import Image

img = Image.open(sys.argv[1]).convert("RGB").resize((160, 160))
pal = img.quantize(colors=8, method=2)
colors = pal.getcolors() or []
palette = pal.getpalette()
result = []
for count, index in sorted(colors, reverse=True)[:8]:
    rgb = palette[index * 3:index * 3 + 3]
    result.append({"hex": "#%02x%02x%02x" % tuple(rgb), "count": int(count)})
print(json.dumps(result))
`.trim();
    const output = execFileSync(
      'python3',
      ['-c', code, filePath],
      { encoding: 'utf8' }
    );
    return JSON.parse(output);
  } catch {
    return [];
  }
}

async function dismissOverlays(page) {
  const patterns = [/accept/i, /agree/i, /close/i, /^x$/i, /dismiss/i, /continue/i, /enter/i, /start/i, /allow/i];
  for (const pattern of patterns) {
    const locator = page.getByRole('button', { name: pattern }).first();
    try {
      if (await locator.isVisible({ timeout: 800 })) {
        await locator.click({ timeout: 1200 });
        await page.waitForTimeout(400);
      }
    } catch {}
  }
}

async function analyzePage(page, mode) {
  await dismissOverlays(page);
  await page.waitForTimeout(settleMs);
  const analysis = await page.evaluate((modeName) => {
    const sample = Array.from(document.querySelectorAll('body, main, section, article, nav, header, footer, h1, h2, h3, p, a, button, input, textarea, [role="button"], [class*="card"], [class*="button"]'))
      .filter((el) => {
        const rect = el.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0;
      })
      .slice(0, 180);

    const computed = sample.map((el) => {
      const style = getComputedStyle(el);
      return {
        tag: el.tagName.toLowerCase(),
        text: (el.textContent || '').trim().slice(0, 120),
        color: style.color,
        backgroundColor: style.backgroundColor,
        fontFamily: style.fontFamily,
        fontSize: style.fontSize,
        fontWeight: style.fontWeight,
        borderRadius: style.borderRadius,
        boxShadow: style.boxShadow,
        letterSpacing: style.letterSpacing,
        lineHeight: style.lineHeight,
        display: style.display,
        position: style.position
      };
    });

    const fonts = Array.from(document.fonts || []).map((font) => ({
      family: font.family,
      style: font.style,
      weight: font.weight,
      status: font.status
    }));

    const bodyStyle = getComputedStyle(document.body);
    const heading = computed.find((item) => /^h1$|^h2$/.test(item.tag));
    const bodyText = computed.find((item) => item.tag === 'p') || computed[0] || null;
    const button = computed.find((item) => item.tag === 'button' || /button/.test(item.text.toLowerCase()));
    const link = computed.find((item) => item.tag === 'a' && item.text);
    const sticky = computed.some((item) => item.position === 'sticky' || item.position === 'fixed');

    return {
      mode: modeName,
      title: document.title,
      url: location.href,
      body: {
        backgroundColor: bodyStyle.backgroundColor,
        color: bodyStyle.color,
        fontFamily: bodyStyle.fontFamily,
        fontSize: bodyStyle.fontSize,
        lineHeight: bodyStyle.lineHeight
      },
      heading,
      bodyText,
      button,
      link,
      sticky,
      fonts,
      sample: computed.slice(0, 80)
    };
  }, mode);

  const colors = pickColors([
    analysis.body?.backgroundColor,
    analysis.body?.color,
    analysis.heading?.color,
    analysis.button?.backgroundColor,
    analysis.button?.color,
    analysis.link?.color,
    ...analysis.sample.flatMap((item) => [item.color, item.backgroundColor])
  ]);

  return { ...analysis, colors };
}

async function captureVariant(browser, site, config) {
  const page = await browser.newPage(config.context);
  const errors = [];
  try {
    await page.goto(site.liveUrl, { waitUntil: 'commit', timeout: 60000 });
    await page.waitForTimeout(settleMs);
    const analysis = await analyzePage(page, config.name);
    const shotsDir = path.join(site.siteDir, 'screenshots');
    await ensureDir(shotsDir);
    const screenshotPath = path.join(shotsDir, `${config.name}.jpg`);
    await page.screenshot({ path: screenshotPath, type: 'jpeg', quality: 78, fullPage: false });
    const screenshotPalette = extractImagePalette(screenshotPath);
    return {
      ok: true,
      analysis: {
        ...analysis,
        screenshotPalette,
        colors: mergeColors(screenshotPalette, analysis.colors)
      },
      screenshot: path.relative(site.siteDir, screenshotPath)
    };
  } catch (error) {
    errors.push(String(error));
    return { ok: false, errors };
  } finally {
    await page.close();
  }
}

async function processSite(browser, post) {
  const slug = slugify(post.slug || post.title || post.domain || Math.random().toString(36).slice(2));
  const siteDir = path.join(DESIGN_DIR, slug);
  const metaPath = path.join(siteDir, 'meta.json');
  const existing = await readJson(metaPath, null);
  if (!force && existing?.capture?.status === 'ok' && existing?.capture?.desktop?.screenshot && existing?.capture?.mobile?.screenshot) {
    return existing;
  }

  const site = { ...post, slug, siteDir };
  await ensureDir(siteDir);
  const desktop = await captureVariant(browser, site, {
    name: 'desktop',
    context: {
      viewport: { width: 1440, height: 980 },
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36',
      deviceScaleFactor: 1,
      ignoreHTTPSErrors: true
    }
  });
  const mobile = await captureVariant(browser, site, {
    name: 'mobile',
    context: {
      ...devices['iPhone 13'],
      ignoreHTTPSErrors: true
    }
  });

  const status = desktop.ok || mobile.ok ? 'ok' : 'failed';
  const meta = {
    slug,
    title: post.title,
    liveUrl: post.liveUrl,
    domain: post.domain,
    loadmoreUrl: post.loadmoreUrl,
    sourceLabel: post.sourceLabel || 'loadmo.re',
    sourceUrl: post.sourceUrl || post.loadmoreUrl,
    description: post.description,
    credits: post.credits,
    added: post.added,
    tags: post.tags,
    posterImage: post.posterImage,
    previewVideo: post.previewVideo,
    captureChecklist: {
      loadmoreMetadataParsed: true,
      desktopVisited: desktop.ok,
      mobileVisited: mobile.ok,
      desktopScreenshotSaved: Boolean(desktop.screenshot),
      mobileScreenshotSaved: Boolean(mobile.screenshot),
      fontsExtracted: Boolean(desktop.analysis?.fonts?.length || mobile.analysis?.fonts?.length),
      colorPaletteExtracted: Boolean(desktop.analysis?.colors?.length || mobile.analysis?.colors?.length)
    },
    capture: {
      status,
      capturedAt: new Date().toISOString(),
      desktop,
      mobile
    }
  };
  await writeJson(metaPath, meta);
  return meta;
}

async function main() {
  const source = await readJson(POSTS_FILE, null);
  if (!source) {
    throw new Error(`Missing ${POSTS_FILE}. Run npm run crawl first.`);
  }
  const manual = await readJson(MANUAL_FILE, { sites: [] });
  let posts = [...source.posts, ...(manual.sites || [])].filter((post) => post.liveUrl);
  if (onlySlug) posts = posts.filter((post) => post.slug === onlySlug || slugify(post.slug) === onlySlug);
  posts = posts.slice(0, limit);

  const browser = await chromium.launch({ headless: !headed });
  const results = [];
  let index = 0;
  async function worker() {
    while (index < posts.length) {
      const current = posts[index++];
      console.log(`Capturing ${index}/${posts.length}: ${current.title}`);
      const result = await processSite(browser, current);
      results.push(result);
    }
  }
  await Promise.all(Array.from({ length: Math.max(1, concurrency) }, () => worker()));
  await browser.close();

  const summary = {
    generatedAt: new Date().toISOString(),
    total: results.length,
    success: results.filter((item) => item.capture?.status === 'ok').length,
    failed: results.filter((item) => item.capture?.status !== 'ok').length,
    items: results.map((item) => ({ slug: item.slug, title: item.title, status: item.capture?.status }))
  };
  await writeJson(SUMMARY_FILE, summary);
  console.log(`Capture summary: ${summary.success}/${summary.total} succeeded`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

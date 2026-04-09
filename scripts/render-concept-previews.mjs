import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';
import { DESIGN_DIR, ensureDir, readJson } from './lib/utils.mjs';

const args = new Map(process.argv.slice(2).map((arg) => {
  const [key, value = 'true'] = arg.replace(/^--/, '').split('=');
  return [key, value];
}));
const onlySlug = args.get('slug');
const force = args.get('force') === 'true';

async function listDirs(root) {
  const entries = await fs.readdir(root, { withFileTypes: true });
  return entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name);
}

const browser = await chromium.launch({ headless: true });
let changed = 0;
try {
  for (const slug of await listDirs(DESIGN_DIR)) {
    if (onlySlug && slug !== onlySlug) continue;
    const dir = path.join(DESIGN_DIR, slug);
    const meta = await readJson(path.join(dir, 'meta.json'), null);
    if (!meta || meta.sourceKind !== 'arte-poster') continue;

    const desktopOut = path.join(dir, 'screenshots', 'desktop.jpg');
    const mobileOut = path.join(dir, 'screenshots', 'mobile.jpg');
    if (!force) {
      try {
        await fs.access(desktopOut);
        await fs.access(mobileOut);
        continue;
      } catch {
        // fall through
      }
    }
    await ensureDir(path.join(dir, 'screenshots'));
    const previewPath = `file://${path.join(dir, 'preview.html')}`;

    const desktop = await browser.newContext({ viewport: { width: 1440, height: 980 }, deviceScaleFactor: 1.5 });
    const desktopPage = await desktop.newPage();
    await desktopPage.goto(previewPath, { waitUntil: 'networkidle' });
    await desktopPage.mouse.move(980, 360);
    await desktopPage.waitForTimeout(300);
    await desktopPage.screenshot({ path: desktopOut, type: 'jpeg', quality: 88 });
    await desktop.close();

    const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
    const mobilePage = await mobile.newPage();
    await mobilePage.goto(previewPath, { waitUntil: 'networkidle' });
    await mobilePage.tap('.poster-world', { position: { x: 180, y: 240 } }).catch(() => {});
    await mobilePage.waitForTimeout(250);
    await mobilePage.screenshot({ path: mobileOut, type: 'jpeg', quality: 88 });
    await mobile.close();

    changed += 1;
    console.log(`Rendered concept previews for ${slug}`);
  }
} finally {
  await browser.close();
}

console.log(JSON.stringify({ changed }, null, 2));

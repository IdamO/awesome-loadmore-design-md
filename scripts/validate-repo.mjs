import path from 'node:path';
import fs from 'node:fs/promises';
import { DATA_DIR, DESIGN_DIR, ROOT, readJson } from './lib/utils.mjs';

const loadmore = await readJson(path.join(DATA_DIR, 'loadmore-posts.json'), null);
const manual = await readJson(path.join(DATA_DIR, 'manual-sites.json'), { sites: [] });
if (!loadmore) {
  throw new Error('Missing crawl data. Run npm run crawl first.');
}

const expected = [...loadmore.posts, ...(manual.sites || [])].filter((item) => item.liveUrl);
const failures = [];
let withDesktop = 0;
let withMobile = 0;
let liveOnly = 0;
let fallbackUsed = 0;

for (const item of expected) {
  const dir = path.join(DESIGN_DIR, item.slug);
  const meta = await readJson(path.join(dir, 'meta.json'), null);
  if (!meta) {
    failures.push(`${item.slug}: missing meta.json`);
    continue;
  }
  if (meta.capture?.fallbackUsed) fallbackUsed += 1;
  else if (meta.capture?.status === 'ok') liveOnly += 1;
  for (const file of ['DESIGN.md', 'README.md', 'preview.html', 'preview-dark.html']) {
    try {
      await fs.access(path.join(dir, file));
    } catch {
      failures.push(`${item.slug}: missing ${file}`);
    }
  }
  if (meta.capture?.desktop?.screenshot) {
    withDesktop += 1;
    try {
      await fs.access(path.join(dir, meta.capture.desktop.screenshot));
    } catch {
      failures.push(`${item.slug}: missing desktop screenshot file`);
    }
  }
  if (meta.capture?.mobile?.screenshot) {
    withMobile += 1;
    try {
      await fs.access(path.join(dir, meta.capture.mobile.screenshot));
    } catch {
      failures.push(`${item.slug}: missing mobile screenshot file`);
    }
  }
}

const summary = {
  totalExpected: expected.length,
  liveOnly,
  fallbackUsed,
  withDesktop,
  withMobile,
  failureCount: failures.length,
  readmeExists: false
};

try {
  await fs.access(path.join(ROOT, 'README.md'));
  summary.readmeExists = true;
} catch {
  failures.push('root README.md missing');
}

for (const file of ['README.md', 'AGENTS.md', 'data/agent-index.json', 'data/design-os.json', 'collections/gen-z-pop.md', 'collections/music-tech.md', 'collections/fashion-culture.md', 'collections/culture-tech.md', 'collections/anti-b2b.md', 'collections/combo-recipes.md', 'playbooks/README.md', 'playbooks/scene-kit.md', 'playbooks/world-systems.md', 'playbooks/motion-grammar.md', 'playbooks/type-systems.md', 'playbooks/asset-forge.md', 'playbooks/component-philosophy.md', 'evals/README.md']) {
  try {
    await fs.access(path.join(ROOT, file));
  } catch {
    failures.push(`missing ${file}`);
  }
}

console.log(JSON.stringify({ summary, failures: failures.slice(0, 200) }, null, 2));
if (failures.length) process.exitCode = 1;

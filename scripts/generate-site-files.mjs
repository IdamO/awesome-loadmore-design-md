import path from 'node:path';
import { enrichMeta } from './lib/design-os.mjs';
import { buildDesignMarkdown, buildPreviewHtml, buildRootReadme, buildSiteReadme } from './lib/templates.mjs';
import { DATA_DIR, DESIGN_DIR, ROOT, readJson, writeJson, writeText } from './lib/utils.mjs';

const posts = await readJson(path.join(DATA_DIR, 'loadmore-posts.json'), null);
if (!posts) {
  throw new Error('Missing loadmore-posts.json. Run npm run crawl first.');
}
const manual = await readJson(path.join(DATA_DIR, 'manual-sites.json'), { sites: [] });

const entries = [];
for (const post of [...posts.posts, ...(manual.sites || [])]) {
  const slug = post.slug;
  const dir = path.join(DESIGN_DIR, slug);
  const metaPath = path.join(dir, 'meta.json');
  const meta = await readJson(metaPath, null);
  if (!meta) continue;
  const enriched = enrichMeta(meta);
  await writeJson(metaPath, enriched);
  await writeText(path.join(dir, 'DESIGN.md'), buildDesignMarkdown(enriched));
  await writeText(path.join(dir, 'README.md'), buildSiteReadme(enriched));
  await writeText(path.join(dir, 'preview.html'), buildPreviewHtml(enriched, false));
  await writeText(path.join(dir, 'preview-dark.html'), buildPreviewHtml(enriched, true));
  entries.push(enriched);
}

entries.sort((a, b) => a.title.localeCompare(b.title));
const tags = [...new Set(entries.map((entry) => entry.tags[0] || 'untagged'))].sort((a, b) => a.localeCompare(b));
const rootReadme = buildRootReadme({ total: entries.length, tags, entries });
await writeText(path.join(ROOT, 'README.md'), rootReadme);
console.log(`Generated files for ${entries.length} sites.`);

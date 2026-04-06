import path from 'node:path';
import { buildDesignMarkdown, buildPreviewHtml, buildRootReadme, buildSiteReadme } from './lib/templates.mjs';
import { DATA_DIR, DESIGN_DIR, ROOT, readJson, writeText } from './lib/utils.mjs';

const posts = await readJson(path.join(DATA_DIR, 'loadmore-posts.json'), null);
if (!posts) {
  throw new Error('Missing loadmore-posts.json. Run npm run crawl first.');
}
const manual = await readJson(path.join(DATA_DIR, 'manual-sites.json'), { sites: [] });

const entries = [];
for (const post of [...posts.posts, ...(manual.sites || [])]) {
  const slug = post.slug;
  const metaPath = path.join(DESIGN_DIR, slug, 'meta.json');
  const meta = await readJson(metaPath, null);
  if (!meta) continue;
  await writeText(path.join(DESIGN_DIR, slug, 'DESIGN.md'), buildDesignMarkdown(meta));
  await writeText(path.join(DESIGN_DIR, slug, 'README.md'), buildSiteReadme(meta));
  await writeText(path.join(DESIGN_DIR, slug, 'preview.html'), buildPreviewHtml(meta, false));
  await writeText(path.join(DESIGN_DIR, slug, 'preview-dark.html'), buildPreviewHtml(meta, true));
  entries.push(meta);
}

entries.sort((a, b) => a.title.localeCompare(b.title));
const tags = [...new Set(entries.map((entry) => entry.tags[0] || 'untagged'))].sort((a, b) => a.localeCompare(b));
const rootReadme = buildRootReadme({ total: entries.length, tags, entries });
await writeText(path.join(ROOT, 'README.md'), rootReadme);
console.log(`Generated files for ${entries.length} sites.`);

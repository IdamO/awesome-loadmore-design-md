import path from 'node:path';
import { enrichMeta } from './lib/design-os.mjs';
import { loadArchiveSources } from './lib/source-data.mjs';
import { buildDesignMarkdown, buildPreviewHtml, buildRootReadme, buildSiteReadme } from './lib/templates.mjs';
import { DESIGN_DIR, ROOT, readJson, writeJson, writeText } from './lib/utils.mjs';

const { entries: sources } = await loadArchiveSources();

const entries = [];
for (const post of sources) {
  const slug = post.slug;
  const dir = path.join(DESIGN_DIR, slug);
  const metaPath = path.join(dir, 'meta.json');
  const meta = await readJson(metaPath, null);
  if (!meta) continue;
  const enriched = meta.designGuidance ? meta : enrichMeta(meta);
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

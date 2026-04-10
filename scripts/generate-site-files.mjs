import path from 'node:path';
import { enrichMeta } from './lib/design-os.mjs';
import { loadArchiveSources } from './lib/source-data.mjs';
import { buildDesignMarkdown, buildPreviewHtml, buildRootReadme, buildSiteReadme } from './lib/templates.mjs';
import { DESIGN_DIR, ROOT, readJson, writeJson, writeText } from './lib/utils.mjs';

const OVERRIDES_FILE = path.join(ROOT, 'data', 'site-overrides.json');

function mergeMechanics(base = {}, override = {}) {
  return {
    ...base,
    ...override,
    archetype: override.archetype || base.archetype,
    inputModes: override.inputModes || base.inputModes,
    engineHints: override.engineHints || base.engineHints,
    motionRecipe: override.motionRecipe || base.motionRecipe,
    implementationNotes: override.implementationNotes || base.implementationNotes,
    antiPatterns: override.antiPatterns || base.antiPatterns,
    validationChecklist: override.validationChecklist || base.validationChecklist,
    evidence: override.evidence || base.evidence,
    schema: {
      ...(base.schema || {}),
      ...(override.schema || {}),
      navigation: { ...(base.schema?.navigation || {}), ...(override.schema?.navigation || {}) },
      motion: { ...(base.schema?.motion || {}), ...(override.schema?.motion || {}) },
      spatial: { ...(base.schema?.spatial || {}), ...(override.schema?.spatial || {}) },
      participation: { ...(base.schema?.participation || {}), ...(override.schema?.participation || {}) },
      sound: { ...(base.schema?.sound || {}), ...(override.schema?.sound || {}) },
      effects: { ...(base.schema?.effects || {}), ...(override.schema?.effects || {}) },
      implementation: { ...(base.schema?.implementation || {}), ...(override.schema?.implementation || {}) }
    }
  };
}

function applyOverride(meta, override = {}) {
  if (!override || !Object.keys(override).length) return meta;
  return {
    ...meta,
    ...override,
    tags: override.tags || meta.tags,
    captureChecklist: { ...(meta.captureChecklist || {}), ...(override.captureChecklist || {}) },
    capture: {
      ...(meta.capture || {}),
      ...(override.capture || {}),
      desktop: { ...(meta.capture?.desktop || {}), ...(override.capture?.desktop || {}) },
      mobile: { ...(meta.capture?.mobile || {}), ...(override.capture?.mobile || {}) }
    },
    designGuidance: override.designGuidance
      ? {
          ...(meta.designGuidance || {}),
          ...(override.designGuidance || {}),
          worldSystems: override.designGuidance.worldSystems || meta.designGuidance?.worldSystems,
          mechanics: mergeMechanics(meta.designGuidance?.mechanics || {}, override.designGuidance.mechanics || {})
        }
      : meta.designGuidance
  };
}

const { entries: sources } = await loadArchiveSources();
const overrides = await readJson(OVERRIDES_FILE, {});

const entries = [];
for (const post of sources) {
  const slug = post.slug;
  const dir = path.join(DESIGN_DIR, slug);
  const metaPath = path.join(dir, 'meta.json');
  const meta = await readJson(metaPath, null);
  if (!meta) continue;
  const overridden = applyOverride(meta, overrides?.[slug] || {});
  const enriched = overridden.designGuidance ? overridden : enrichMeta(overridden);
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

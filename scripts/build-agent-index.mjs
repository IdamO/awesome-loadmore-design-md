import fs from 'node:fs/promises';
import path from 'node:path';
import { buildDesignOsData, classifyCaptureMode, enrichMeta, palette, primaryFonts } from './lib/design-os.mjs';
import { DESIGN_DIR, ROOT, ensureDir, readJson, titleCase, writeJson, writeText } from './lib/utils.mjs';

const COLLECTION_DIR = path.join(ROOT, 'collections');
const INDEX_FILE = path.join(ROOT, 'data', 'agent-index.json');
const DESIGN_OS_FILE = path.join(ROOT, 'data', 'design-os.json');
const AGENTS_FILE = path.join(ROOT, 'AGENTS.md');

async function listSiteDirs() {
  const entries = await fs.readdir(DESIGN_DIR, { withFileTypes: true });
  return entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name);
}

function uniq(items) {
  return [...new Set(items.filter(Boolean))];
}

function score(tags, weights) {
  return Object.entries(weights).reduce((sum, [tag, value]) => sum + ((tags.includes(tag) ? value : 0)), 0);
}

function weirdScore(tags) {
  return score(tags, {
    playful: 3,
    'net.art': 3,
    glitches: 3,
    retro: 2,
    '3d-space': 2,
    colorful: 2,
    'default-aesthetics': 2,
    participative: 2,
    game: 2,
    music: 1,
    'sound-design': 1,
    fashion: 1,
    minimal: -1,
    'clean-ui': -2,
    'e-commerce': -2
  });
}

function musicTechScore(tags) {
  return score(tags, {
    music: 4,
    'sound-design': 3,
    playful: 2,
    colorful: 2,
    '3d-space': 1,
    animation: 1,
    'net.art': 1,
    typography: 1,
    tactile: 1,
    'e-commerce': -1,
    'clean-ui': -1
  });
}

function fashionCultureScore(tags) {
  return score(tags, {
    fashion: 4,
    'arts&culture': 3,
    photography: 2,
    typography: 2,
    tactile: 2,
    minimal: 1,
    colorful: 1,
    'digital-exhibition': 1,
    'online-magazine': 1,
    game: -1
  });
}

function cultureTechScore(tags) {
  return score(tags, {
    'arts&culture': 4,
    'digital-exhibition': 3,
    'online-magazine': 2,
    educational: 2,
    'graphic-design': 2,
    participative: 2,
    typography: 1,
    'net.art': 1,
    playful: 1,
    'e-commerce': -2
  });
}

function genZPopScore(tags) {
  return score(tags, {
    colorful: 3,
    playful: 3,
    music: 2,
    fashion: 2,
    typography: 2,
    tactile: 2,
    '3d-space': 1,
    retro: 1,
    'net.art': 1,
    animation: 1,
    minimal: -1,
    'clean-ui': -2
  });
}

function editorialScore(tags) {
  return score(tags, {
    typography: 3,
    photography: 2,
    minimal: 2,
    fashion: 2,
    'online-magazine': 2,
    'arts&culture': 1,
    colorful: 1,
    playful: -1
  });
}

function assetCommerceScore(tags) {
  return score(tags, {
    'graphic-design': 4,
    animation: 3,
    typography: 3,
    editorial: 2,
    tactile: 2,
    'e-commerce': 2,
    fashion: 1,
    'arts&culture': 1,
    'clean-ui': -2,
    minimal: -1
  });
}

function primaryMood(tags) {
  const ordered = [
    ['music', 'music-led'],
    ['fashion', 'fashion-editorial'],
    ['arts&culture', 'culture artifact'],
    ['net.art', 'internet art'],
    ['playful', 'playful interactive'],
    ['typography', 'type-led'],
    ['3d-space', 'spatial'],
    ['retro', 'retro-future'],
    ['minimal', 'restrained'],
    ['colorful', 'high-chroma']
  ];
  for (const [tag, label] of ordered) {
    if (tags.includes(tag)) return label;
  }
  return 'experimental';
}

function useCases(item) {
  const out = [];
  if (item.scores.musicTech >= 5) out.push('music-tech launch pages');
  if (item.scores.fashionCulture >= 5) out.push('fashion or artist drops');
  if (item.scores.cultureTech >= 5) out.push('culture-tech products and editorial worlds');
  if (item.scores.assetCommerce >= 6) out.push('design-asset drops and creative commerce');
  if (item.scores.genZPop >= 6) out.push('gen-z pop campaigns');
  if (item.scores.editorial >= 5) out.push('editorial storytelling and typography systems');
  if (item.scores.weird >= 6) out.push('anti-template landing pages');
  return uniq(out).slice(0, 5);
}

function avoidIf(item) {
  const out = [];
  if (item.scores.weird >= 7) out.push('you need conservative enterprise trust cues');
  if (item.tags.includes('playful') || item.tags.includes('game')) out.push('you need dense productivity UI');
  if (item.captureMode === 'archival-fallback') out.push('you need verified live interaction patterns');
  if (item.captureMode === 'concept-derived') out.push('you need proof of a real live site instead of a poster-derived concept');
  if (item.tags.includes('net.art')) out.push('you need strict conversion-first structure');
  return uniq(out).slice(0, 4);
}

function quickPrompt(item) {
  return item.musicTransposition?.prompt || item.implementationPrompt;
}

function makeItem(meta) {
  const enriched = meta.designGuidance ? meta : enrichMeta(meta);
  const tags = enriched.tags || [];
  const fonts = primaryFonts(enriched);
  const colors = palette(enriched).map((color) => color.hex);
  const captureMode = classifyCaptureMode(enriched);
  const scores = {
    weird: weirdScore(tags),
    musicTech: musicTechScore(tags),
    fashionCulture: fashionCultureScore(tags),
    cultureTech: cultureTechScore(tags),
    assetCommerce: assetCommerceScore(tags),
    genZPop: genZPopScore(tags),
    editorial: editorialScore(tags)
  };
  const item = {
    slug: enriched.slug,
    title: enriched.title || titleCase(enriched.slug),
    path: `design-md/${enriched.slug}`,
    designPath: `design-md/${enriched.slug}/DESIGN.md`,
    readmePath: `design-md/${enriched.slug}/README.md`,
    previewLight: `design-md/${enriched.slug}/preview.html`,
    previewDark: `design-md/${enriched.slug}/preview-dark.html`,
    liveUrl: enriched.liveUrl,
    sourceLabel: enriched.sourceLabel || 'loadmo.re',
    sourceUrl: enriched.sourceUrl || enriched.loadmoreUrl || enriched.liveUrl,
    sourceKind: enriched.sourceKind || 'website',
    sourceCollections: enriched.collectionHandles || [],
    description: enriched.description || '',
    tags,
    fonts,
    palette: colors,
    captureMode,
    primaryMood: primaryMood(tags),
    scores,
    worldSystems: enriched.designGuidance?.worldSystems || [],
    mechanics: {
      archetype: enriched.designGuidance?.mechanics?.archetype || null,
      inputModes: enriched.designGuidance?.mechanics?.inputModes || [],
      interactionModel: enriched.designGuidance?.mechanics?.interactionModel || '',
      mobileFallback: enriched.designGuidance?.mechanics?.mobileFallback || '',
      validationPriority: enriched.designGuidance?.mechanics?.validationPriority || 'medium',
      schema: enriched.designGuidance?.mechanics?.schema || {}
    },
    agentAngles: enriched.designGuidance?.agentAngles || [],
    musicTransposition: enriched.musicTransposition || null,
    implementationPrompt: enriched.designGuidance?.implementationPrompt || ''
  };
  item.recommendedFor = useCases(item);
  item.avoidIf = avoidIf(item);
  item.quickPrompt = quickPrompt(item);
  item.searchTerms = uniq([
    item.title,
    ...tags,
    item.primaryMood,
    ...item.recommendedFor,
    ...(item.worldSystems || []).map((world) => world.name),
    item.musicTransposition?.name,
    item.musicTransposition?.summary,
    ...(item.musicTransposition?.labels || []),
    ...(item.agentAngles || []),
    item.mechanics.archetype?.name,
    item.mechanics.schema?.interactionModelId,
    ...(enriched.domain ? [enriched.domain] : [])
  ]);
  return item;
}

function top(items, key, count = 24, filterFn = () => true) {
  return items
    .filter(filterFn)
    .sort((a, b) => b.scores[key] - a.scores[key] || b.scores.weird - a.scores.weird || a.title.localeCompare(b.title))
    .slice(0, count);
}

function row(item) {
  const world = item.worldSystems[0]?.name || 'Unknown world';
  const archetype = item.mechanics.archetype?.name || 'Unknown archetype';
  return `| [${item.title}](../${item.path}/) | ${world} / ${archetype} | ${item.captureMode} | ${item.quickPrompt} |`;
}

function buildCollectionDoc({ title, description, items }) {
  return `# ${title}\n\n${description}\n\n| Site | World / Mechanics | Capture | Why it matters |\n|---|---|---|---|\n${items.map(row).join('\n')}\n`;
}

function buildComboRecipes(recipes) {
  return `# Combo Recipes\n\nUse these when you want novelty without randomness. Each recipe combines one base world, one interaction reference, and one typography/editorial voice.\n\n${recipes.map((recipe) => `## ${recipe.name}\n\n- Base world: [${recipe.base.title}](../${recipe.base.path}/)\n- Interaction spice: [${recipe.interaction.title}](../${recipe.interaction.path}/)\n- Typography/editorial voice: [${recipe.editorial.title}](../${recipe.editorial.path}/)\n- Use when: ${recipe.useWhen}\n- Prompt seed: ${recipe.prompt}\n`).join('\n')}\n`;
}

function buildAgentsMd(summary) {
  return `# Agent Navigation Guide

This repo is not a flat moodboard. It is an agent-usable design retrieval system for internet-native work.

## First pass

1. Open \`playbooks/scene-kit.md\` first when the task is net-new design, not imitation.
2. Open \`playbooks/interaction-archetypes.md\` to choose the actual mechanic before styling.
3. Open \`playbooks/validation-rubric.md\` before shipping anything interaction-heavy.
4. Open \`data/design-os.json\` for machine-readable world, motion, type, and archetype guidance.
5. Open \`data/agent-index.json\` for machine-readable filtering and ranking of source references.
6. Open \`playbooks/poster-to-website.md\` when the source is static art and the job is to synthesize a browser-native interaction model.
7. Filter for \`captureMode: "live"\` when you need interaction truth. Use \`archival-fallback\` when you need visual attitude more than verified UX. Use \`concept-derived\` when you need static-art-to-website translation patterns.
8. Filter by \`mechanics.archetype.id\`, \`mechanics.schema.spatial.mode\`, \`mechanics.schema.sound.mode\`, and \`mechanics.validationPriority\` before picking references.
9. If an entry exposes \`musicTransposition\` or another variant block, treat that generated object kit and prompt as canonical for that domain-specific remix.
10. Pick 1 dominant world system, 1 dominant interaction archetype, and 1 typography/material reference. Do not copy a single site verbatim. Recombine.

## Recommended selection logic

- For a bold product launch: sort by \`scores.genZPop\` and \`scores.weird\`, then pick a \`playable_poster\` or \`collage_field\` mechanic.
- For music tooling or artist-facing products: sort by \`scores.musicTech\`, then filter to \`club_instrument\` or \`scroll_scrub_instrument\`.
- For fashion, editorial, or culture worlds: sort by \`scores.fashionCulture\` and \`scores.editorial\`, then decide between \`editorial_archive_index\`, \`portfolio_artifact\`, or \`commerce_shrine_stage\`.
- For design-asset drops, poster commerce, or template marketplaces: sort by \`scores.assetCommerce\`, then filter to \`commerce_shrine_stage\` or \`editorial_archive_index\`.
- For spatial work: filter to \`mechanics.schema.spatial.mode != "flat"\` and prioritize \`captureMode: "live"\`.
- For anti-corporate energy: sort by \`scores.weird\`, then exclude entries with \`clean-ui\` or \`e-commerce\`.

## Design OS docs

- \`playbooks/scene-kit.md\`
- \`playbooks/interaction-archetypes.md\`
- \`playbooks/validation-rubric.md\`
- \`playbooks/world-systems.md\`
- \`playbooks/motion-grammar.md\`
- \`playbooks/type-systems.md\`
- \`playbooks/asset-forge.md\`
- \`playbooks/poster-to-website.md\`
- \`playbooks/component-philosophy.md\`
- \`data/design-os.json\`

## Domain starter packs

- \`collections/gen-z-pop.md\`
- \`collections/music-tech.md\`
- \`collections/fashion-culture.md\`
- \`collections/culture-tech.md\`
- \`collections/design-asset-commerce.md\`
- \`collections/anti-b2b.md\`
- \`collections/combo-recipes.md\`
- \`collections/arte-aesthetic.md\`
- \`collections/arte-technology.md\`
- \`collections/arte-minimalism.md\`

## Current repo state

- Total indexed sites: ${summary.total}
- Live captures: ${summary.live}
- Archival fallbacks: ${summary.fallback}
- Poster concepts: ${summary.conceptDerived}
- Minimum usable target met: ${summary.total >= 100 ? 'yes' : 'no'}
`;
}

const slugs = await listSiteDirs();
const items = [];
for (const slug of slugs) {
  const meta = await readJson(path.join(DESIGN_DIR, slug, 'meta.json'), null);
  if (!meta) continue;
  items.push(makeItem(meta));
}
items.sort((a, b) => a.title.localeCompare(b.title));

const summary = {
  generatedAt: new Date().toISOString(),
  total: items.length,
  live: items.filter((item) => item.captureMode === 'live').length,
  fallback: items.filter((item) => item.captureMode === 'archival-fallback').length,
  conceptDerived: items.filter((item) => item.captureMode === 'concept-derived').length,
  mixed: items.filter((item) => item.captureMode === 'mixed').length,
  incomplete: items.filter((item) => item.captureMode === 'incomplete').length
};

const collections = {
  'gen-z-pop': top(items, 'genZPop', 32, (item) => item.captureMode !== 'incomplete'),
  'music-tech': top(items, 'musicTech', 28, (item) => item.captureMode !== 'incomplete'),
  'fashion-culture': top(items, 'fashionCulture', 28, (item) => item.captureMode !== 'incomplete'),
  'culture-tech': top(items, 'cultureTech', 28, (item) => item.captureMode !== 'incomplete'),
  'design-asset-commerce': top(items, 'assetCommerce', 28, (item) => item.captureMode !== 'incomplete'),
  'arte-aesthetic': items.filter((item) => item.sourceCollections.includes('aesthetic')).sort((a, b) => a.title.localeCompare(b.title)),
  'arte-technology': items.filter((item) => item.sourceCollections.includes('technology')).sort((a, b) => a.title.localeCompare(b.title)),
  'arte-minimalism': items.filter((item) => item.sourceCollections.includes('minimalism')).sort((a, b) => a.title.localeCompare(b.title)),
  'anti-b2b': items
    .filter((item) => item.captureMode !== 'incomplete')
    .filter((item) => !item.tags.includes('clean-ui'))
    .sort((a, b) => b.scores.weird - a.scores.weird || b.scores.genZPop - a.scores.genZPop || a.title.localeCompare(b.title))
    .slice(0, 36)
};

const recipes = [
  {
    name: 'Poster Commerce For Creators',
    base: collections['design-asset-commerce'][0],
    interaction: collections['design-asset-commerce'][1] || collections['design-asset-commerce'][0],
    editorial: collections['culture-tech'][0],
    useWhen: 'You need a creative asset drop, motion template launch, or merch-like commerce page that still feels authored.',
    prompt: 'Build the page as a poster-commerce system: let the base define the wall of artifacts, borrow the second reference for commerce state behavior, and use the editorial reference to keep information hierarchy sharp.'
  },
  {
    name: 'Music Tool, Not Dashboard',
    base: collections['music-tech'][0],
    interaction: collections['anti-b2b'][0],
    editorial: collections['fashion-culture'][0],
    useWhen: 'You need artist-facing product energy with real personality instead of productivity-software cues.',
    prompt: 'Build a music-tech launch page by taking structural cues from the base world, interaction boldness from the spice reference, and typography discipline from the editorial reference.'
  },
  {
    name: 'Fashion Drop With Sound Energy',
    base: collections['fashion-culture'][0],
    interaction: collections['music-tech'][0],
    editorial: collections['gen-z-pop'][0],
    useWhen: 'You need a drop page, campaign, or merch moment that feels scene-aware and alive.',
    prompt: 'Start from the fashion base, inject rhythmic motion and interaction from the music reference, then push color and attitude with the gen-z pop reference.'
  },
  {
    name: 'Culture Archive With Hooks',
    base: collections['culture-tech'][0],
    interaction: collections['gen-z-pop'][1] || collections['gen-z-pop'][0],
    editorial: collections['fashion-culture'][1] || collections['fashion-culture'][0],
    useWhen: 'You need archival, publishing, or curatorial credibility without becoming dry.',
    prompt: 'Keep the archive structure from the base world, but use the pop interaction reference to add memorability and the editorial reference to keep the typography sharp.'
  },
  {
    name: 'Anti-SaaS Launch System',
    base: collections['anti-b2b'][0],
    interaction: collections['anti-b2b'][1] || collections['anti-b2b'][0],
    editorial: collections['culture-tech'][0],
    useWhen: 'You want something unmistakably not enterprise, but still coherent enough to ship as a product surface.',
    prompt: 'Use the anti-B2B references for tone and interaction, then borrow enough editorial structure from the culture-tech reference to keep the result navigable.'
  },
  {
    name: 'Pop Editorial Commerce Without Looking Like Commerce',
    base: collections['gen-z-pop'][0],
    interaction: collections['fashion-culture'][0],
    editorial: collections['fashion-culture'][2] || collections['fashion-culture'][0],
    useWhen: 'You need sell-through energy for drops or memberships without default storefront tropes.',
    prompt: 'Start with the loudest pop reference, borrow gesture and pacing from the fashion interaction reference, and keep the typography editorial and taste-led.'
  },
  {
    name: 'Net-Art Product Narrative',
    base: collections['anti-b2b'][2] || collections['anti-b2b'][0],
    interaction: collections['music-tech'][2] || collections['music-tech'][0],
    editorial: collections['culture-tech'][1] || collections['culture-tech'][0],
    useWhen: 'You need a product story that feels culturally current, strange in the right way, and still usable.',
    prompt: 'Treat the base as the visual worldview, use the interaction reference for tempo, and let the culture-tech reference keep the information architecture readable.'
  }
].filter((recipe) => recipe.base && recipe.interaction && recipe.editorial);

await writeJson(DESIGN_OS_FILE, buildDesignOsData());
await writeJson(INDEX_FILE, {
  summary,
  collections: Object.fromEntries(Object.entries(collections).map(([key, value]) => [key, value.map((item) => item.slug)])),
  recipes: recipes.map((recipe) => ({
    name: recipe.name,
    base: recipe.base.slug,
    interaction: recipe.interaction.slug,
    editorial: recipe.editorial.slug,
    useWhen: recipe.useWhen,
    prompt: recipe.prompt
  })),
  items
});

await ensureDir(COLLECTION_DIR);
await writeText(path.join(COLLECTION_DIR, 'gen-z-pop.md'), buildCollectionDoc({
  title: 'Gen-Z Pop Starter Pack',
  description: 'Use this when you need high-chroma, internet-native, anti-corporate energy for launches, artist products, and culturally loud landing pages.',
  items: collections['gen-z-pop']
}));
await writeText(path.join(COLLECTION_DIR, 'music-tech.md'), buildCollectionDoc({
  title: 'Music-Tech Starter Pack',
  description: 'Use this for products that need to feel rhythmic, scene-aware, and closer to artist tooling than enterprise software.',
  items: collections['music-tech']
}));
await writeText(path.join(COLLECTION_DIR, 'fashion-culture.md'), buildCollectionDoc({
  title: 'Fashion + Culture Starter Pack',
  description: 'Use this for fashion drops, editorial worlds, event launches, and products that need taste rather than dashboard energy.',
  items: collections['fashion-culture']
}));
await writeText(path.join(COLLECTION_DIR, 'culture-tech.md'), buildCollectionDoc({
  title: 'Culture-Tech Starter Pack',
  description: 'Use this for archives, publishing, curatorial tools, community surfaces, and digitally native culture products.',
  items: collections['culture-tech']
}));
await writeText(path.join(COLLECTION_DIR, 'design-asset-commerce.md'), buildCollectionDoc({
  title: 'Design-Asset Commerce Starter Pack',
  description: 'Use this for creative-asset drops, poster commerce, motion-template marketplaces, and storefronts that should feel like authored campaign walls instead of neutral e-commerce.',
  items: collections['design-asset-commerce']
}));
await writeText(path.join(COLLECTION_DIR, 'anti-b2b.md'), buildCollectionDoc({
  title: 'Anti-B2B Starter Pack',
  description: 'Use this when default SaaS instincts would kill the idea. These references bias toward weirdness, scene energy, and strong visual signatures.',
  items: collections['anti-b2b']
}));
await writeText(path.join(COLLECTION_DIR, 'arte-aesthetic.md'), buildCollectionDoc({
  title: 'Arte Collective Aesthetic -> Website Concepts',
  description: 'Poster-derived website systems from Arte Collective aesthetic posters. Use these when you need dreamy, object-like, or atmospheric browser worlds derived from static art rather than live-site captures.',
  items: collections['arte-aesthetic']
}));
await writeText(path.join(COLLECTION_DIR, 'arte-technology.md'), buildCollectionDoc({
  title: 'Arte Collective Technology -> Website Concepts',
  description: 'Poster-derived website systems from Arte Collective technology posters. Use these for signal-rich, reactive, and machine-like interfaces that still feel authored.',
  items: collections['arte-technology']
}));
await writeText(path.join(COLLECTION_DIR, 'arte-minimalism.md'), buildCollectionDoc({
  title: 'Arte Collective Minimalism -> Website Concepts',
  description: 'Poster-derived website systems from Arte Collective minimal posters. Use these when you need restraint, spatial calm, and strong negative space without falling into sterile SaaS minimalism.',
  items: collections['arte-minimalism']
}));
await writeText(path.join(COLLECTION_DIR, 'combo-recipes.md'), buildComboRecipes(recipes));
await writeText(AGENTS_FILE, buildAgentsMd(summary));

console.log(JSON.stringify(summary, null, 2));

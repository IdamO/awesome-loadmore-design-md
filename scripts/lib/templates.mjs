import { buildArtePosterPreviewHtml, buildArteTranslationBlock } from './arte-preview.mjs';
import { classifyCaptureMode, enrichMeta, palette, primaryFonts } from './design-os.mjs';
import { isDark, titleCase } from './utils.mjs';

function hexOr(color, fallback) {
  return color?.hex || fallback;
}

function listOr(items, fallback) {
  return items?.length ? items.join(', ') : fallback;
}

function tagMood(tags = []) {
  const set = new Set(tags.map((tag) => tag.toLowerCase()));
  const moods = [];
  if (set.has('minimal') || set.has('clean-ui')) moods.push('restrained minimalism');
  if (set.has('playful') || set.has('game')) moods.push('playful interaction');
  if (set.has('fashion')) moods.push('editorial fashion energy');
  if (set.has('music') || set.has('sound-design')) moods.push('sonic pacing');
  if (set.has('retro')) moods.push('retro-computing cues');
  if (set.has('typography')) moods.push('type-led composition');
  if (set.has('3d-space')) moods.push('spatial depth');
  if (set.has('digital-exhibition') || set.has('arts&culture')) moods.push('exhibition-like framing');
  if (!moods.length) moods.push('experimental mobile-first composition');
  return moods.slice(0, 3).join(', ');
}

function isArtePoster(meta) {
  return meta?.sourceKind === 'arte-poster';
}

export function buildDesignMarkdown(meta) {
  const source = meta.designGuidance ? meta : enrichMeta(meta);
  const colors = palette(source);
  const fonts = primaryFonts(source);
  const lead = colors[0]?.hex || '#111111';
  const second = colors[1]?.hex || '#ffffff';
  const accent = colors[2]?.hex || '#7c3aed';
  const darkMode = isDark(lead);
  const title = source.title || titleCase(source.slug);
  const sourceLabel = source.sourceLabel || 'loadmo.re';
  const sourceUrl = source.sourceUrl || source.loadmoreUrl;
  const description = source.description || `${title} is featured in the design archive.`;
  const desktop = source.capture?.desktop?.analysis;
  const mobile = source.capture?.mobile?.analysis;
  const heading = desktop?.heading || mobile?.heading;
  const bodyText = desktop?.bodyText || mobile?.bodyText;
  const button = desktop?.button || mobile?.button;
  const worldSystems = source.designGuidance?.worldSystems || [];
  const mechanics = source.designGuidance?.mechanics || {};
  const schema = mechanics.schema || {};
  const artePoster = isArtePoster(source);
  const translationBlock = isArtePoster(source) ? buildArteTranslationBlock(source) : '';
  const captureMode = source.designGuidance?.captureMode || classifyCaptureMode(source);
  const colorLines = colors.length
    ? colors.map((item, index) => `- Color ${index + 1}: ${item.hex} - ${index === 0 ? 'canvas / dominant background' : index === 1 ? 'primary text or opposing surface' : index === 2 ? 'accent / interactive signal' : 'supporting surface or hover state'}`).join('\n')
    : '- No stable palette extracted from the live page. Use the archival poster and screenshots as the visual source of truth.';
  const fontLines = fonts.length
    ? fonts.map((font, index) => `- ${index === 0 ? 'Primary' : index === 1 ? 'Secondary' : 'Support'}: ${font}`).join('\n')
    : '- Primary: system UI';

  return `# Design System Inspiration of ${title}

## 1. Visual Theme & Atmosphere

${title} reads as ${tagMood(source.tags)}. The ${artePoster ? 'concept capture' : 'live capture'} resolves to a ${darkMode ? 'dark' : 'light'}-leaning system built around ${lead}, ${second}, and accent notes from ${accent}. ${description}

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes ${desktop?.sticky ? 'anchored chrome and fixed-position framing' : 'a looser scroll narrative'}, while mobile compresses the same language into tighter interaction zones. The site's type system centers ${fonts[0] || 'a bespoke stack'}, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: ${darkMode ? 'cinematic dark surfaces with bright contrast' : 'bright surfaces with editorial contrast'}
- Core palette: ${colors.map((item) => item.hex).slice(0, 4).join(', ') || 'not extracted'}
- Typography stack: ${fonts.slice(0, 3).join(', ') || 'system fallback'}
- Desktop posture: ${desktop?.sticky ? 'fixed/sticky framing' : 'flowing document rhythm'}
- Mobile posture: ${mobile?.sticky ? 'sticky, app-like chrome' : 'single-column immersive scroll'}

## 2. World Systems & Archetype

### World Systems
${worldSystems.map((world, index) => `- ${index === 0 ? 'Primary' : 'Secondary'}: ${world.name} - ${world.reason || 'best fit based on tags and mechanics'}`).join('\n') || '- Primary: Playable Poster - fallback world for experimental staging'}

### Interaction Archetype
- Archetype: ${mechanics.archetype?.name || 'Portfolio Artifact'} (${mechanics.archetype?.confidence ? `${Math.round(mechanics.archetype.confidence * 100)}% confidence` : 'heuristic'})
- Why: ${mechanics.archetype?.reason || 'No mechanics inference available.'}
- Core verbs: ${listOr(schema.coreVerbs, listOr(mechanics.inputModes, 'scroll, tap'))}
- Inputs: ${listOr(schema.inputs, listOr(mechanics.inputModes, 'scroll, tap'))}

${translationBlock ? `${translationBlock}\n` : ''}

## 3. Color Palette & Roles

${colorLines}

## 4. Typography Rules

### Font Families
${fontLines}

### Hierarchy Snapshot
- Heading sample: ${heading?.fontSize || 'n/a'} / weight ${heading?.fontWeight || 'n/a'} / letter-spacing ${heading?.letterSpacing || 'normal'}
- Body sample: ${bodyText?.fontSize || 'n/a'} / weight ${bodyText?.fontWeight || 'n/a'} / line-height ${bodyText?.lineHeight || 'normal'}
- Button sample: ${button?.fontSize || 'n/a'} / weight ${button?.fontWeight || 'n/a'}

## 5. Layout Principles

- Use a ${desktop?.sticky ? 'framed viewport with anchored navigation' : 'free-flowing vertical canvas'} on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (${lead}) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (${source.tags.join(', ') || 'none'}) imply the system is intentionally non-generic.
- Buttons tend toward ${button?.backgroundColor || 'transparent'} backgrounds with ${button?.color || 'inherit'} text, and links inherit ${desktop?.link?.color || mobile?.link?.color || accent} as the interaction signal.

## 6. Interaction Mechanics

- Primary model: ${schema.interactionModelId || mechanics.archetype?.id || 'portfolio_artifact'}
- Navigation structure: ${schema.navigation?.structure || 'linear'} / wayfinding ${schema.navigation?.wayfinding || 'explicit'} / friction ${schema.navigation?.friction || 'low'}
- Navigation model: ${mechanics.navigationModel || 'Users move through one authored document flow.'}
- State model: ${mechanics.stateModel || 'Idle -> interaction -> detail -> return'}
- Must-keep mechanic: ${mechanics.interactionModel || 'No explicit mechanic inferred.'}

## 7. Motion System

- Density: ${schema.motion?.density || 'medium'}
- Cadence: ${schema.motion?.cadence || 'event-driven'}
- Triggers: ${listOr(schema.motion?.triggers, 'pointer')}
- Transition types: ${listOr(schema.motion?.transitions, 'fade')}
- Physics level: ${schema.motion?.physics || 'none'}
- Motion recipe:
${(mechanics.motionRecipe || []).map((step) => `  - ${step}`).join('\n') || '  - Keep motion structural, not decorative.'}

## 8. Spatial Model

- Space type: ${schema.spatial?.mode || 'flat'}
- Camera behavior: ${schema.spatial?.camera || 'fixed'}
- Depth cues: ${listOr(schema.spatial?.depthCues, 'scale')}
- HUD layering: ${schema.spatial?.hud || 'overlay'}
- Render tier: ${schema.implementation?.renderTier || 'dom'}
- Primary depth cue in capture: ${desktop?.button?.boxShadow || desktop?.sample?.find((item) => item.boxShadow && item.boxShadow !== 'none')?.boxShadow || 'flat surfaces / contrast-only separation'}

## 9. Participation & State

- Participation mode: ${schema.participation?.mode || 'none'}
- Persistence: ${schema.participation?.persistence || 'none'}
- Inputs to preserve: ${listOr(mechanics.inputModes, 'scroll, tap')}
- Reset/save posture: ${schema.participation?.persistence === 'saved' ? 'Persist enough state that revisits feel intentional.' : 'Default to resettable, lightweight state changes.'}

## 10. Sound & Sensor Behavior

- Audio role: ${schema.sound?.mode || 'none'}
- Audio triggers: ${listOr(schema.sound?.triggers, 'none')}
- Controls: ${listOr(schema.sound?.controls, 'none')}
- Sync: ${schema.sound?.sync || 'none'}
- Required APIs or platform hooks: ${listOr(schema.implementation?.requiredApis, 'none')}

## 11. Implementation Checklist

- Complexity: ${schema.implementation?.complexity || mechanics.validationPriority || 'medium'}
- Required APIs: ${listOr(schema.implementation?.requiredApis, 'none')}
- Must-have mechanics:
${(mechanics.implementationNotes || []).map((item) => `  - ${item}`).join('\n') || '  - Preserve the primary interaction model.'}
- Nice-to-have embellishments:
${(mechanics.evidence || []).map((item) => `  - ${item}`).join('\n') || '  - Use the screenshots for composition detail.'}
- Mobile fallback: ${mechanics.mobileFallback || 'Keep the same idea with fewer simultaneous interactions.'}
- Fallback path: ${listOr(schema.implementation?.fallbacks, captureMode === 'archival-fallback' ? 'static-poster, reduced-motion' : 'reduced-motion')}
- Manual validation:
${(mechanics.validationChecklist || []).map((item) => `  - ${item}`).join('\n') || '  - Validate the main interaction before shipping.'}

## 12. Do's and Don'ts

### Do
- Use ${fonts[0] || 'the primary extracted font'} consistently for headlines and interface labels.
- Keep the palette anchored to ${lead}, ${second}, and ${accent}.
- Preserve the experimental posture signaled by the archive tags: ${source.tags.join(', ') || 'unclassified'}.
- Build separate desktop and mobile compositions instead of pretending one layout can fake both.
- Use the inferred mechanics schema as the implementation baseline before adding ornament.

### Don't
- Don't genericize the interface into a default SaaS landing page.
- Don't introduce rounded, pastel, or glassmorphism defaults unless the captured site already does.
- Don't replace the extracted font stack with Inter/Roboto/system as the main voice unless no custom stack loaded.
- Don't ignore the mobile fallback just because the desktop interaction is more fun.
- Don't ${artePoster ? 'rebuild the framed product mockup or storefront chrome literally.' : 'copy screenshots literally when the repo only has archival capture evidence.'}

## 13. Responsive Behavior

- Desktop capture uses ${source.capture?.desktop?.screenshot ? 'screenshots/desktop.jpg' : 'no successful live desktop screenshot'} as the visual baseline.
- Mobile capture uses ${source.capture?.mobile?.screenshot ? 'screenshots/mobile.jpg' : 'no successful live mobile screenshot'} as the mobile baseline.
- Keep touch targets oversized on mobile and allow the background system to dominate the viewport.
- Implement mobile as: ${mechanics.mobileFallback || 'compress the same world into a tighter single-column stage'}.
- ${artePoster ? 'Use the isolated poster crop as the visual source of truth, not the Shopify frame mockup.' : 'If the live site failed to capture, fall back to the archival poster on the loadmo.re post page before inventing missing behavior.'}

## 14. Agent Prompt Guide

Use this when asking an AI coding agent to recreate the feel:

> ${source.designGuidance?.implementationPrompt || `Build a responsive landing page inspired by ${title}. Keep the palette centered on ${lead}, ${second}, and ${accent}. Use ${fonts[0] || 'the extracted primary font'} for headlines, preserve the ${tagMood(source.tags)} mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.`}

## 15. Source Capture & Validation

- Source: ${sourceLabel}${sourceUrl ? ` (${sourceUrl})` : ''}
- Live site: ${source.liveUrl}
- Credits: ${source.credits || 'not listed'}
- Capture mode: ${captureMode}
- Desktop capture: ${source.capture?.desktop?.ok ? 'completed' : 'failed'}
- Mobile capture: ${source.capture?.mobile?.ok ? 'completed' : 'failed'}
- Archival fallback: ${source.capture?.fallbackUsed ? 'poster image used for missing screenshots' : 'not used'}
`;
}

export function buildSiteReadme(meta) {
  const source = meta.designGuidance ? meta : enrichMeta(meta);
  const title = source.title || titleCase(source.slug);
  const sourceLabel = source.sourceLabel || 'loadmo.re';
  const sourceUrl = source.sourceUrl || source.loadmoreUrl || source.liveUrl;
  const sourcePhrase = sourceUrl ? `[${sourceLabel}](${sourceUrl})` : sourceLabel;
  const intro = isArtePoster(source)
    ? `[DESIGN.md](./DESIGN.md) derived from the Arte Collective poster [${title}](${source.liveUrl}). This entry intentionally ignores the storefront chrome and instead translates the poster artwork into an imagined interactive website system with web/mobile guidance, spatial mechanics, and motion rules.`
    : `[DESIGN.md](./DESIGN.md) extracted from the public [${title}](${source.liveUrl}) website, cross-referenced with ${sourcePhrase}. This is not the official design system. The goal is to give an AI agent enough grounded design language to recreate the feel without flattening it into generic SaaS UI.`;
  const desktopLabel = isArtePoster(source) ? 'Concept desktop render' : 'Live or archival desktop viewport capture';
  const mobileLabel = isArtePoster(source) ? 'Concept mobile render' : 'Live or archival mobile viewport capture';
  return `# ${title} Inspired Design System

${intro}

## Files

| File | Description |
|------|-------------|
| DESIGN.md | Full design-system reference with web/mobile guidance plus mechanics and implementation notes |
| preview.html | Light preview page generated from the extracted tokens |
| preview-dark.html | Dark preview page generated from the extracted tokens |
| meta.json | Source metadata, capture checklist, extracted tokens, inferred mechanics, and implementation prompt |
| screenshots/desktop.jpg | ${desktopLabel} |
| screenshots/mobile.jpg | ${mobileLabel} |

## Mechanics Snapshot

- World systems: ${(source.designGuidance?.worldSystems || []).map((item) => item.name).join(', ') || 'Playable Poster'}
- Archetype: ${source.designGuidance?.mechanics?.archetype?.name || 'Portfolio Artifact'}
- Inputs: ${listOr(source.designGuidance?.mechanics?.inputModes, 'scroll, tap')}
- Mobile fallback: ${source.designGuidance?.mechanics?.mobileFallback || 'single-column authored fallback'}

## Source Notes

- Tags: ${source.tags.join(', ') || 'none'}
- Credits: ${source.credits || 'not listed'}
- Added to loadmo.re: ${source.added || 'unknown'}
- Capture status: ${source.capture?.status || 'unknown'}
- Capture mode: ${source.designGuidance?.captureMode || classifyCaptureMode(source)}
- Archival fallback: ${source.capture?.fallbackUsed ? 'yes' : 'no'}
${isArtePoster(source) ? `- Poster collections: ${(source.collectionTitles || []).join(', ') || 'unknown'}\n- Poster crop asset: ${source.posterCrop || 'assets/poster-crop.jpg'}` : ''}

## Preview

### Web
${source.capture?.desktop?.screenshot ? `![${title} desktop capture](./${source.capture.desktop.screenshot})` : 'Desktop capture unavailable.'}

### Mobile
${source.capture?.mobile?.screenshot ? `![${title} mobile capture](./${source.capture.mobile.screenshot})` : 'Mobile capture unavailable.'}
`;
}

export function buildPreviewHtml(meta, dark = false) {
  if (isArtePoster(meta)) {
    return buildArtePosterPreviewHtml(meta, dark);
  }
  const title = meta.title || titleCase(meta.slug);
  const colors = palette(meta);
  const fonts = primaryFonts(meta);
  const bg = dark ? '#0f0f10' : hexOr(colors[0], '#ffffff');
  const fg = dark ? '#f7f7f7' : hexOr(colors[1], '#111111');
  const accent = hexOr(colors[2], '#7c3aed');
  const card = dark ? '#18181b' : '#ffffff';
  const border = dark ? 'rgba(255,255,255,0.12)' : 'rgba(17,17,17,0.12)';
  const type = fonts[0] || 'system-ui';
  const mono = fonts[1] || 'ui-monospace';
  const screenshotDesk = meta.capture?.desktop?.screenshot ? `./${meta.capture.desktop.screenshot}` : '';
  const screenshotMobile = meta.capture?.mobile?.screenshot ? `./${meta.capture.mobile.screenshot}` : '';
  const sourceLabel = meta.sourceLabel || 'loadmo.re';
  const sourceUrl = meta.sourceUrl || meta.loadmoreUrl || meta.liveUrl;
  const sourceButton = sourceUrl && sourceUrl !== meta.liveUrl
    ? `<a class="btn" href="${sourceUrl}">Open ${sourceLabel} entry</a>`
    : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title} Design Preview (${dark ? 'Dark' : 'Light'})</title>
<style>
  :root {
    --bg: ${bg};
    --fg: ${fg};
    --accent: ${accent};
    --card: ${card};
    --border: ${border};
    --font-sans: ${type};
    --font-mono: ${mono};
  }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    background: var(--bg);
    color: var(--fg);
    font-family: var(--font-sans);
    line-height: 1.5;
  }
  .wrap { max-width: 1180px; margin: 0 auto; padding: 40px 20px 80px; }
  .hero { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 20px; align-items: start; }
  .panel {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 24px;
    padding: 24px;
  }
  .eyebrow { font-size: 12px; letter-spacing: .14em; text-transform: uppercase; opacity: .72; }
  h1 { font-size: clamp(40px, 7vw, 84px); line-height: .96; margin: 10px 0 16px; }
  p { max-width: 62ch; }
  .buttons { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 24px; }
  .btn {
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 12px 18px;
    text-decoration: none;
    color: inherit;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }
  .btn--accent { background: var(--accent); color: ${dark ? '#0a0a0a' : '#ffffff'}; border-color: transparent; }
  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 24px; }
  .swatch { border-radius: 18px; overflow: hidden; border: 1px solid var(--border); }
  .swatch .chip { height: 82px; }
  .swatch .meta { padding: 12px 14px; font-family: var(--font-mono); font-size: 12px; }
  .shots { display: grid; grid-template-columns: 1fr 320px; gap: 20px; margin-top: 28px; }
  img { width: 100%; display: block; border-radius: 18px; border: 1px solid var(--border); }
  .small { font-size: 13px; opacity: .72; }
  @media (max-width: 900px) {
    .hero, .shots, .grid { grid-template-columns: 1fr; }
  }
</style>
</head>
<body>
  <div class="wrap">
    <section class="hero">
      <div class="panel">
        <div class="eyebrow">loadmo.re design archive</div>
        <h1>${title}</h1>
        <p>${meta.description || `${title} is part of the loadmo.re archive.`}</p>
        <div class="buttons">
          <a class="btn btn--accent" href="${meta.liveUrl}">Visit live site</a>
          ${sourceButton}
        </div>
      </div>
      <div class="panel">
        <div class="eyebrow">Fonts</div>
        <p>${fonts.join('<br>') || 'System UI'}</p>
        <div class="eyebrow">Tags</div>
        <p class="small">${meta.tags.join(' · ') || 'none'}</p>
      </div>
    </section>

    <section class="grid">
      ${colors.map((color) => `<div class="swatch"><div class="chip" style="background:${color.hex}"></div><div class="meta">${color.hex}</div></div>`).join('')}
    </section>

    <section class="shots">
      <div class="panel">
        <div class="eyebrow">Web capture</div>
        ${screenshotDesk ? `<img alt="${title} desktop" src="${screenshotDesk}">` : '<p>Desktop capture unavailable.</p>'}
      </div>
      <div class="panel">
        <div class="eyebrow">Mobile capture</div>
        ${screenshotMobile ? `<img alt="${title} mobile" src="${screenshotMobile}">` : '<p>Mobile capture unavailable.</p>'}
      </div>
    </section>
  </div>
</body>
</html>
`;
}

export function buildRootReadme({ total, tags, entries }) {
  const liveCount = entries.filter((entry) => entry.capture?.status === 'ok').length;
  const fallbackCount = entries.filter((entry) => entry.capture?.fallbackUsed).length;
  const conceptCount = entries.filter((entry) => entry.sourceKind === 'arte-poster').length;
  return `<div align="center">
  <strong>Curated collection of DESIGN.md files extracted from loadmo.re plus hand-picked internet-native outliers.</strong>
  <br />
  <br />

![DESIGN.md Count](https://img.shields.io/badge/DESIGN.md%20count-${total}-10b981?style=classic)
![Live Captures](https://img.shields.io/badge/live%20captures-${liveCount}-0ea5e9?style=classic)
![Archival Fallbacks](https://img.shields.io/badge/archival%20fallbacks-${fallbackCount}-f59e0b?style=classic)
![Poster Concepts](https://img.shields.io/badge/poster%20concepts-${conceptCount}-f97316?style=classic)
![Tags](https://img.shields.io/badge/primary%20tags-${tags.length}-6366f1?style=classic)
</div>

# Awesome loadmo.re DESIGN.md

Copy a DESIGN.md into your project, tell your AI agent to build in that visual language, and keep the weirdness intact instead of flattening everything into generic startup UI.

## What is this?

This repo mirrors the structure of [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md), but the source material comes primarily from [loadmo.re](https://loadmo.re/) and is expanded with manually curated outliers plus poster-derived web concepts that feel more internet-native than polished B2B SaaS defaults. Each entry includes:

- DESIGN.md with web, mobile, and implementation-mechanics guidance
- preview.html and preview-dark.html
- meta.json with extracted fonts, colors, capture checklist, world-system inference, and mechanics schema
- Live or archival desktop + mobile screenshots

## Capture Checklist

Every entry tries to complete the same checklist:

1. Parse the loadmo.re post metadata
2. Open the live site in a desktop browser context
3. Open the live site in a mobile browser context
4. Save desktop and mobile screenshots
5. Extract the active font families and dominant colors
6. If the live site is gone, synthesize archival screenshots from the loadmo.re poster image
7. Generate a DESIGN.md and preview pages from that capture

## Start Here for Agents

If you are an AI coding agent, do not browse this repo manually folder by folder first. Start here:

- \`AGENTS.md\` for the retrieval strategy
- \`playbooks/scene-kit.md\` for the design philosophy layer
- \`playbooks/interaction-archetypes.md\` for reusable implementation-grade mechanics
- \`playbooks/validation-rubric.md\` for the manual QA sequence
- \`playbooks/world-systems.md\` to choose a world like Club Instrument, Luxury Archive, Collage Core, Cozy Desktop, Playable Poster, or Fan Shrine
- \`playbooks/motion-grammar.md\` so motion acts like brand, not garnish
- \`playbooks/type-systems.md\` for type-role decisions and foundry direction
- \`playbooks/asset-forge.md\` to turn generated material into designed surfaces
- \`playbooks/poster-to-website.md\` when the source is static art that needs a browser-native interaction model
- \`playbooks/component-philosophy.md\` to separate behavior primitives from visual authorship
- \`data/design-os.json\` for machine-readable world, motion, type, and asset guidance
- \`data/agent-index.json\` for machine-readable filtering and ranking of source references
- \`collections/gen-z-pop.md\` for loud internet-native references
- \`collections/music-tech.md\` for rhythm, tools, and artist-facing surfaces
- \`collections/fashion-culture.md\` for editorial and taste-led worlds
- \`collections/culture-tech.md\` for publishing, archives, and curatorial products
- \`collections/anti-b2b.md\` when enterprise defaults would flatten the idea
- \`collections/combo-recipes.md\` for pre-mixed reference stacks that agents can recombine

## Design OS

This repo now includes a design operating system on top of the site archive:

- stable behavior underneath, authored worlds on top
- a world-system layer for metaphor and composition
- an interaction-archetype layer for implementation semantics
- a motion grammar layer for temporal identity
- a type-system layer for voice and contrast
- an asset-forge layer for scribbles, scans, stickers, chromes, and generated material

If you are building net-new work, choose one dominant world from \`playbooks/world-systems.md\`, one dominant interaction archetype from \`playbooks/interaction-archetypes.md\`, one typography authority cue, and one material pack.

## Collection

${tags.map((tag) => {
    const group = entries.filter((entry) => (entry.tags[0] || 'untagged') === tag);
    return `### ${titleCase(tag)}\n\n${group.map((entry) => `- [**${entry.title}**](./design-md/${entry.slug}/) - ${entry.description || 'No description available.'}`).join('\n')}`;
  }).join('\n\n')}
`;
}

import { isDark, titleCase } from './utils.mjs';

function hexOr(color, fallback) {
  return color?.hex || fallback;
}

function primaryFonts(meta) {
  const fonts = [...(meta.capture?.desktop?.analysis?.fonts || []), ...(meta.capture?.mobile?.analysis?.fonts || [])]
    .map((font) => font.family?.replace(/^"|"$/g, ''))
    .filter(Boolean);
  return [...new Set(fonts)].slice(0, 6);
}

function palette(meta) {
  const colors = [
    ...(meta.capture?.desktop?.analysis?.colors || []),
    ...(meta.capture?.mobile?.analysis?.colors || [])
  ];
  const seen = new Set();
  const out = [];
  for (const color of colors) {
    if (seen.has(color.hex)) continue;
    seen.add(color.hex);
    out.push(color);
  }
  return out.slice(0, 8);
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

export function buildDesignMarkdown(meta) {
  const colors = palette(meta);
  const fonts = primaryFonts(meta);
  const lead = colors[0]?.hex || '#111111';
  const second = colors[1]?.hex || '#ffffff';
  const accent = colors[2]?.hex || '#7c3aed';
  const darkMode = isDark(lead);
  const title = meta.title || titleCase(meta.slug);
  const sourceLabel = meta.sourceLabel || 'loadmo.re';
  const sourceUrl = meta.sourceUrl || meta.loadmoreUrl;
  const description = meta.description || `${title} is featured in the design archive.`;
  const desktop = meta.capture?.desktop?.analysis;
  const mobile = meta.capture?.mobile?.analysis;
  const heading = desktop?.heading || mobile?.heading;
  const bodyText = desktop?.bodyText || mobile?.bodyText;
  const button = desktop?.button || mobile?.button;
  const colorLines = colors.length
    ? colors.map((item, index) => `- Color ${index + 1}: ${item.hex} - ${index === 0 ? 'canvas / dominant background' : index === 1 ? 'primary text or opposing surface' : index === 2 ? 'accent / interactive signal' : 'supporting surface or hover state'}`).join('\n')
    : '- No stable palette extracted from the live page. Use the archival poster and screenshots as the visual source of truth.';
  const fontLines = fonts.length
    ? fonts.map((font, index) => `- ${index === 0 ? 'Primary' : index === 1 ? 'Secondary' : 'Support'}: ${font}`).join('\n')
    : '- Primary: system UI';

  return `# Design System Inspiration of ${title}

## 1. Visual Theme & Atmosphere

${title} reads as ${tagMood(meta.tags)}. The live capture resolves to a ${darkMode ? 'dark' : 'light'}-leaning system built around ${lead}, ${second}, and accent notes from ${accent}. ${description}

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes ${desktop?.sticky ? 'anchored chrome and fixed-position framing' : 'a looser scroll narrative'}, while mobile compresses the same language into tighter interaction zones. The site's type system centers ${fonts[0] || 'a bespoke stack'}, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: ${darkMode ? 'cinematic dark surfaces with bright contrast' : 'bright surfaces with editorial contrast'}
- Core palette: ${colors.map((item) => item.hex).slice(0, 4).join(', ') || 'not extracted'}
- Typography stack: ${fonts.slice(0, 3).join(', ') || 'system fallback'}
- Desktop posture: ${desktop?.sticky ? 'fixed/sticky framing' : 'flowing document rhythm'}
- Mobile posture: ${mobile?.sticky ? 'sticky, app-like chrome' : 'single-column immersive scroll'}

## 2. Color Palette & Roles

${colorLines}

## 3. Typography Rules

### Font Families
${fontLines}

### Hierarchy Snapshot
- Heading sample: ${heading?.fontSize || 'n/a'} / weight ${heading?.fontWeight || 'n/a'} / letter-spacing ${heading?.letterSpacing || 'normal'}
- Body sample: ${bodyText?.fontSize || 'n/a'} / weight ${bodyText?.fontWeight || 'n/a'} / line-height ${bodyText?.lineHeight || 'normal'}
- Button sample: ${button?.fontSize || 'n/a'} / weight ${button?.fontWeight || 'n/a'}

## 4. Component Stylings

### Web
- Buttons tend toward ${button?.backgroundColor || 'transparent'} backgrounds with ${button?.color || 'inherit'} text.
- Links inherit ${desktop?.link?.color || mobile?.link?.color || accent} as the interaction signal.
- Border radius trends: ${desktop?.button?.borderRadius || mobile?.button?.borderRadius || '0px'}.
- Shadow language: ${desktop?.button?.boxShadow || mobile?.button?.boxShadow || 'minimal / none detected'}.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps ${fonts[0] || 'the primary stack'} in control.

## 5. Layout Principles

- Use a ${desktop?.sticky ? 'framed viewport with anchored navigation' : 'free-flowing vertical canvas'} on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (${lead}) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (${meta.tags.join(', ') || 'none'}) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: ${desktop?.button?.boxShadow || desktop?.sample?.find((item) => item.boxShadow && item.boxShadow !== 'none')?.boxShadow || 'flat surfaces / contrast-only separation'}.
- Radius cue: ${desktop?.sample?.find((item) => item.borderRadius && item.borderRadius !== '0px')?.borderRadius || 'square corners dominate'}.
- Contrast cue: ${darkMode ? 'light text on dark surfaces' : 'dark text on light surfaces'} with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use ${fonts[0] || 'the primary extracted font'} consistently for headlines and interface labels.
- Keep the palette anchored to ${lead}, ${second}, and ${accent}.
- Preserve the experimental posture signaled by the loadmo.re tags: ${meta.tags.join(', ') || 'unclassified'}.
- Build separate desktop and mobile compositions instead of pretending one layout can fake both.

### Don't
- Don't genericize the interface into a default SaaS landing page.
- Don't introduce rounded, pastel, or glassmorphism defaults unless the captured site already does.
- Don't replace the extracted font stack with Inter/Roboto/system as the main voice unless no custom stack loaded.

## 8. Responsive Behavior

- Desktop capture uses ${meta.capture?.desktop?.screenshot ? 'screenshots/desktop.jpg' : 'no successful live desktop screenshot'} as the visual baseline.
- Mobile capture uses ${meta.capture?.mobile?.screenshot ? 'screenshots/mobile.jpg' : 'no successful live mobile screenshot'} as the mobile baseline.
- Keep touch targets oversized on mobile and allow the background system to dominate the viewport.
- If the live site failed to capture, fall back to the archival poster on the loadmo.re post page before inventing missing behavior.

## 9. Agent Prompt Guide

Use this when asking an AI coding agent to recreate the feel:

> Build a responsive landing page inspired by ${title}. Keep the palette centered on ${lead}, ${second}, and ${accent}. Use ${fonts[0] || 'the extracted primary font'} for headlines, preserve the ${tagMood(meta.tags)} mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: ${sourceLabel}${sourceUrl ? ` (${sourceUrl})` : ''}
- Live site: ${meta.liveUrl}
- Credits: ${meta.credits || 'not listed'}
- Desktop capture: ${meta.capture?.desktop?.ok ? 'completed' : 'failed'}
- Mobile capture: ${meta.capture?.mobile?.ok ? 'completed' : 'failed'}
- Archival fallback: ${meta.capture?.fallbackUsed ? 'poster image used for missing screenshots' : 'not used'}
`;
}

export function buildSiteReadme(meta) {
  const title = meta.title || titleCase(meta.slug);
  const sourceLabel = meta.sourceLabel || 'loadmo.re';
  const sourceUrl = meta.sourceUrl || meta.loadmoreUrl || meta.liveUrl;
  const sourcePhrase = sourceUrl ? `[${sourceLabel}](${sourceUrl})` : sourceLabel;
  return `# ${title} Inspired Design System

[DESIGN.md](./DESIGN.md) extracted from the public [${title}](${meta.liveUrl}) website, cross-referenced with ${sourcePhrase}. This is not the official design system. The goal is to give an AI agent enough grounded design language to recreate the feel without flattening it into generic SaaS UI.

## Files

| File | Description |
|------|-------------|
| DESIGN.md | Full design-system reference with separate web/mobile guidance |
| preview.html | Light preview page generated from the extracted tokens |
| preview-dark.html | Dark preview page generated from the extracted tokens |
| meta.json | Source metadata, capture checklist, extracted tokens |
| screenshots/desktop.jpg | Live or archival desktop viewport capture |
| screenshots/mobile.jpg | Live or archival mobile viewport capture |

## Source Notes

- Tags: ${meta.tags.join(', ') || 'none'}
- Credits: ${meta.credits || 'not listed'}
- Added to loadmo.re: ${meta.added || 'unknown'}
- Capture status: ${meta.capture?.status || 'unknown'}
- Archival fallback: ${meta.capture?.fallbackUsed ? 'yes' : 'no'}

## Preview

### Web
${meta.capture?.desktop?.screenshot ? `![${title} desktop capture](./${meta.capture.desktop.screenshot})` : 'Desktop capture unavailable.'}

### Mobile
${meta.capture?.mobile?.screenshot ? `![${title} mobile capture](./${meta.capture.mobile.screenshot})` : 'Mobile capture unavailable.'}
`;
}

export function buildPreviewHtml(meta, dark = false) {
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
  return `<div align="center">
  <strong>Curated collection of DESIGN.md files extracted from loadmo.re plus hand-picked internet-native outliers.</strong>
  <br />
  <br />

![DESIGN.md Count](https://img.shields.io/badge/DESIGN.md%20count-${total}-10b981?style=classic)
![Live Captures](https://img.shields.io/badge/live%20captures-${liveCount}-0ea5e9?style=classic)
![Archival Fallbacks](https://img.shields.io/badge/archival%20fallbacks-${fallbackCount}-f59e0b?style=classic)
![Tags](https://img.shields.io/badge/primary%20tags-${tags.length}-6366f1?style=classic)
</div>

# Awesome loadmo.re DESIGN.md

Copy a DESIGN.md into your project, tell your AI agent to build in that visual language, and keep the weirdness intact instead of flattening everything into generic startup UI.

## What is this?

This repo mirrors the structure of [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md), but the source material comes primarily from [loadmo.re](https://loadmo.re/) and is expanded with manually curated outliers that feel more internet-native than polished B2B SaaS defaults. Each entry includes:

- DESIGN.md with web and mobile guidance
- preview.html and preview-dark.html
- meta.json with extracted fonts, colors, and capture checklist
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
- \`data/agent-index.json\` for machine-readable filtering and ranking
- \`collections/gen-z-pop.md\` for loud internet-native references
- \`collections/music-tech.md\` for rhythm, tools, and artist-facing surfaces
- \`collections/fashion-culture.md\` for editorial and taste-led worlds
- \`collections/culture-tech.md\` for publishing, archives, and curatorial products
- \`collections/anti-b2b.md\` when enterprise defaults would flatten the idea
- \`collections/combo-recipes.md\` for pre-mixed reference stacks that agents can recombine

## Collection

${tags.map((tag) => {
    const group = entries.filter((entry) => (entry.tags[0] || 'untagged') === tag);
    return `### ${titleCase(tag)}\n\n${group.map((entry) => `- [**${entry.title}**](./design-md/${entry.slug}/) - ${entry.description || 'No description available.'}`).join('\n')}`;
  }).join('\n\n')}
`;
}

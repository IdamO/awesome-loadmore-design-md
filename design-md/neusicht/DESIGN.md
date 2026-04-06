# Design System Inspiration of Neusicht

## 1. Visual Theme & Atmosphere

Neusicht reads as playful interaction. The live capture resolves to a light-leaning system built around #fdfdfd, #fbfb04, and accent notes from #606060. Crystal clear informational website with an interesting layout and hidden game feature.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers LifeEF, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fdfdfd, #fbfb04, #606060, #a0a0a0
- Typography stack: LifeEF, GTPressura
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #fdfdfd - canvas / dominant background
- Color 2: #fbfb04 - primary text or opposing surface
- Color 3: #606060 - accent / interactive signal
- Color 4: #a0a0a0 - supporting surface or hover state
- Color 5: #1e1e15 - supporting surface or hover state
- Color 6: #9d9d0d - supporting surface or hover state
- Color 7: #5f5f0b - supporting surface or hover state
- Color 8: #7f8015 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: LifeEF
- Secondary: GTPressura

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 153px / weight 400 / line-height 114.75px
- Button sample: 37.1875px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(0, 0, 0) text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps LifeEF in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fdfdfd) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (game, portfolio) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use LifeEF consistently for headlines and interface labels.
- Keep the palette anchored to #fdfdfd, #fbfb04, and #606060.
- Preserve the experimental posture signaled by the loadmo.re tags: game, portfolio.
- Build separate desktop and mobile compositions instead of pretending one layout can fake both.

### Don't
- Don't genericize the interface into a default SaaS landing page.
- Don't introduce rounded, pastel, or glassmorphism defaults unless the captured site already does.
- Don't replace the extracted font stack with Inter/Roboto/system as the main voice unless no custom stack loaded.

## 8. Responsive Behavior

- Desktop capture uses screenshots/desktop.jpg as the visual baseline.
- Mobile capture uses screenshots/mobile.jpg as the mobile baseline.
- Keep touch targets oversized on mobile and allow the background system to dominate the viewport.
- If the live site failed to capture, fall back to the archival poster on the loadmo.re post page before inventing missing behavior.

## 9. Agent Prompt Guide

Use this when asking an AI coding agent to recreate the feel:

> Build a responsive landing page inspired by Neusicht. Keep the palette centered on #fdfdfd, #fbfb04, and #606060. Use LifeEF for headlines, preserve the playful interaction mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/neusicht)
- Live site: https://www.neusicht.ch/
- Credits: Studio Szh
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

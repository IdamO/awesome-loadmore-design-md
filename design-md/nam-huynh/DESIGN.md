# Design System Inspiration of Nam Huynh

## 1. Visual Theme & Atmosphere

Nam Huynh reads as playful interaction. The live capture resolves to a light-leaning system built around #f7f7f7, #5e4e2e, and accent notes from #9c05fc. Nam welcomes you on his portfolio with a memory game that has 3 levels. Effortless and playful at the same time!

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Lausanne, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f7f7f7, #5e4e2e, #9c05fc, #141007
- Typography stack: Lausanne
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #f7f7f7 - canvas / dominant background
- Color 2: #5e4e2e - primary text or opposing surface
- Color 3: #9c05fc - accent / interactive signal
- Color 4: #141007 - supporting surface or hover state
- Color 5: #adaaa3 - supporting surface or hover state
- Color 6: #695f4a - supporting surface or hover state
- Color 7: #48391d - supporting surface or hover state
- Color 8: #978a6d - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Lausanne

### Hierarchy Snapshot
- Heading sample: 20px / weight 100 / letter-spacing normal
- Body sample: 20px / weight 100 / line-height 22px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Lausanne in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f7f7f7) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (playful, portfolio, game) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Lausanne consistently for headlines and interface labels.
- Keep the palette anchored to #f7f7f7, #5e4e2e, and #9c05fc.
- Preserve the experimental posture signaled by the loadmo.re tags: playful, portfolio, game.
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

> Build a responsive landing page inspired by Nam Huynh. Keep the palette centered on #f7f7f7, #5e4e2e, and #9c05fc. Use Lausanne for headlines, preserve the playful interaction mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/nam-huynh)
- Live site: https://www.namhuynh.de/level/easy/
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

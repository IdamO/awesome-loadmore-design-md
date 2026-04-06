# Design System Inspiration of Klimaschau

## 1. Visual Theme & Atmosphere

Klimaschau reads as exhibition-like framing. The live capture resolves to a light-leaning system built around #e2dbde, #0d0d0d, and accent notes from #a39ea2. Digital exhibition with an interesting browsing as if scrolling through a map.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #e2dbde, #0d0d0d, #a39ea2, #5f5c5e
- Typography stack: system fallback
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #e2dbde - canvas / dominant background
- Color 2: #0d0d0d - primary text or opposing surface
- Color 3: #a39ea2 - accent / interactive signal
- Color 4: #5f5c5e - supporting surface or hover state
- Color 5: #c2bdca - supporting surface or hover state
- Color 6: #bbb8c4 - supporting surface or hover state
- Color 7: #cdb8b0 - supporting surface or hover state
- Color 8: #ebc9b7 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: system UI

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: n/a / weight n/a / line-height normal
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit #a39ea2 as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps the primary stack in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#e2dbde) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (educational, digital-exhibition) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #e2dbde, #0d0d0d, and #a39ea2.
- Preserve the experimental posture signaled by the loadmo.re tags: educational, digital-exhibition.
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

> Build a responsive landing page inspired by Klimaschau. Keep the palette centered on #e2dbde, #0d0d0d, and #a39ea2. Use the extracted primary font for headlines, preserve the exhibition-like framing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/klimaschau)
- Live site: https://klimaschau.fh-potsdam.de/de
- Credits: Jonas Pelzer, Rimini Berlin,
- Desktop capture: failed
- Mobile capture: failed
- Archival fallback: poster image used for missing screenshots

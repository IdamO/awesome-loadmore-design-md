# Design System Inspiration of Glob

## 1. Visual Theme & Atmosphere

Glob reads as editorial fashion energy. The live capture resolves to a light-leaning system built around #fcfcfc, #9c9a9b, and accent notes from #223466. Fun e-shop including an interactive slideshow that lets you distort the lookbook.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Source Sans Pro, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fcfcfc, #9c9a9b, #223466, #8f7373
- Typography stack: Source Sans Pro, Instrument Sans, NeueHaasUnicaW1G
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #fcfcfc - canvas / dominant background
- Color 2: #9c9a9b - primary text or opposing surface
- Color 3: #223466 - accent / interactive signal
- Color 4: #8f7373 - supporting surface or hover state
- Color 5: #737373 - supporting surface or hover state
- Color 6: #8b7e80 - supporting surface or hover state
- Color 7: #7d8284 - supporting surface or hover state
- Color 8: #37466d - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Source Sans Pro
- Secondary: Instrument Sans
- Support: NeueHaasUnicaW1G
- Support: Neue Haas Unica Pro Bold
- Support: Neue Haas Unica Pro Light
- Support: Neue Haas Unica Pro Medium

### Hierarchy Snapshot
- Heading sample: 32px / weight 400 / letter-spacing normal
- Body sample: 14px / weight 400 / line-height 19.6px
- Button sample: 16px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgb(87, 76, 213) backgrounds with rgb(71, 71, 71) text.
- Links inherit rgb(33, 33, 33) as the interaction signal.
- Border radius trends: 100%.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Source Sans Pro in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fcfcfc) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (e-commerce, tactile, fashion) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 100%.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Source Sans Pro consistently for headlines and interface labels.
- Keep the palette anchored to #fcfcfc, #9c9a9b, and #223466.
- Preserve the experimental posture signaled by the loadmo.re tags: e-commerce, tactile, fashion.
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

> Build a responsive landing page inspired by Glob. Keep the palette centered on #fcfcfc, #9c9a9b, and #223466. Use Source Sans Pro for headlines, preserve the editorial fashion energy mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/glob-land)
- Live site: https://glob.land/
- Credits: Mouthwash, Oscar Gómez
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

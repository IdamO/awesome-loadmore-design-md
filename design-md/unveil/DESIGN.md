# Design System Inspiration of UNVEIL

## 1. Visual Theme & Atmosphere

UNVEIL reads as restrained minimalism. The live capture resolves to a light-leaning system built around #f6f5f4, #181819, and accent notes from #a4a39d. Elegant portfolio where scrolling through projects feels like flipping through a stack of records.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers nb_international_proregular, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f6f5f4, #181819, #a4a39d, #5d5f5f
- Typography stack: nb_international_proregular
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #f6f5f4 - canvas / dominant background
- Color 2: #181819 - primary text or opposing surface
- Color 3: #a4a39d - accent / interactive signal
- Color 4: #5d5f5f - supporting surface or hover state
- Color 5: #c9c9b5 - supporting surface or hover state
- Color 6: #d09e9c - supporting surface or hover state
- Color 7: #a6625f - supporting surface or hover state
- Color 8: #8f9077 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: nb_international_proregular

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height 24px
- Button sample: 10.5px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(0, 0, 0) text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 6px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps nb_international_proregular in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f6f5f4) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (tactile, minimal, portfolio) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 6px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use nb_international_proregular consistently for headlines and interface labels.
- Keep the palette anchored to #f6f5f4, #181819, and #a4a39d.
- Preserve the experimental posture signaled by the loadmo.re tags: tactile, minimal, portfolio.
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

> Build a responsive landing page inspired by UNVEIL. Keep the palette centered on #f6f5f4, #181819, and #a4a39d. Use nb_international_proregular for headlines, preserve the restrained minimalism mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/unveil)
- Live site: https://unveil.fr/
- Credits: UNVEIL team Arvin Leeuwis
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

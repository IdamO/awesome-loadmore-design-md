# Design System Inspiration of Infringe

## 1. Visual Theme & Atmosphere

Infringe reads as editorial fashion energy, type-led composition. The live capture resolves to a light-leaning system built around #d0d1d3, #0b0e0f, and accent notes from #615c58. Digital version of Infringe, a magazine celebrating the art of hair. Bold font system.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers archivoitalic, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #d0d1d3, #0b0e0f, #615c58, #a4a3a3
- Typography stack: archivoitalic, archivoregular, cormorantlight
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #d0d1d3 - canvas / dominant background
- Color 2: #0b0e0f - primary text or opposing surface
- Color 3: #615c58 - accent / interactive signal
- Color 4: #a4a3a3 - supporting surface or hover state
- Color 5: #9a755e - supporting surface or hover state
- Color 6: #a68570 - supporting surface or hover state
- Color 7: #53342a - supporting surface or hover state
- Color 8: #594438 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: archivoitalic
- Secondary: archivoregular
- Support: cormorantlight
- Support: cormorantlight_italic
- Support: cormorantregular
- Support: archivo_blackregular

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height 16px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps archivoitalic in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#d0d1d3) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (online-magazine, fashion, typography) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: 2px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use archivoitalic consistently for headlines and interface labels.
- Keep the palette anchored to #d0d1d3, #0b0e0f, and #615c58.
- Preserve the experimental posture signaled by the loadmo.re tags: online-magazine, fashion, typography.
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

> Build a responsive landing page inspired by Infringe. Keep the palette centered on #d0d1d3, #0b0e0f, and #615c58. Use archivoitalic for headlines, preserve the editorial fashion energy, type-led composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/infringe)
- Live site: http://www.infringe.com
- Credits: New Studio, Dimitri Papazoglou, Axel Peemöller
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

# Design System Inspiration of Paula De Álvaro

## 1. Visual Theme & Atmosphere

Paula De Álvaro reads as experimental mobile-first composition. The live capture resolves to a light-leaning system built around #fefefe, #e8e8e8, and accent notes from #c7c8c7. De Álvaro questions the fragility of online protoflios with an absurd and ironic web-folio showcasing her printed instagram archive.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers TeX Gyre Heros Condensed, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fefefe, #e8e8e8, #c7c8c7, #a8a8a7
- Typography stack: TeX Gyre Heros Condensed, Diatype Variable, Diatype Semi-Mono Variable
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #fefefe - canvas / dominant background
- Color 2: #e8e8e8 - primary text or opposing surface
- Color 3: #c7c8c7 - accent / interactive signal
- Color 4: #a8a8a7 - supporting surface or hover state
- Color 5: #d7d7d7 - supporting surface or hover state
- Color 6: #b8b8b7 - supporting surface or hover state
- Color 7: #9a9a99 - supporting surface or hover state
- Color 8: #c0c0be - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: TeX Gyre Heros Condensed
- Secondary: Diatype Variable
- Support: Diatype Semi-Mono Variable
- Support: Diatype Mono Variable

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 14.5px / weight 400 / line-height 23.925px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit #c7c8c7 as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps TeX Gyre Heros Condensed in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fefefe) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio, graphic-design) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use TeX Gyre Heros Condensed consistently for headlines and interface labels.
- Keep the palette anchored to #fefefe, #e8e8e8, and #c7c8c7.
- Preserve the experimental posture signaled by the loadmo.re tags: portfolio, graphic-design.
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

> Build a responsive landing page inspired by Paula De Álvaro. Keep the palette centered on #fefefe, #e8e8e8, and #c7c8c7. Use TeX Gyre Heros Condensed for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/paula-de-alvaro)
- Live site: https://pauladealvaro.com/
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

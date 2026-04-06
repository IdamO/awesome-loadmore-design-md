# Design System Inspiration of Plastic Air

## 1. Visual Theme & Atmosphere

Plastic Air reads as spatial depth. The live capture resolves to a dark-leaning system built around #66b2e5, #86bcdf, and accent notes from #e8ea9f. It's beautiful although meant to show us something not that cute.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Baskervville, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #66b2e5, #86bcdf, #e8ea9f, #9ec5d8
- Typography stack: Baskervville, Epilogue
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #66b2e5 - canvas / dominant background
- Color 2: #86bcdf - primary text or opposing surface
- Color 3: #e8ea9f - accent / interactive signal
- Color 4: #9ec5d8 - supporting surface or hover state
- Color 5: #c4d0d5 - supporting surface or hover state
- Color 6: #b6d5b9 - supporting surface or hover state
- Color 7: #7fc1d2 - supporting surface or hover state
- Color 8: #3fa6ef - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Baskervville
- Secondary: Epilogue

### Hierarchy Snapshot
- Heading sample: 20px / weight 400 / letter-spacing normal
- Body sample: 16px / weight 400 / line-height normal
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit #e8ea9f as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Baskervville in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#66b2e5) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (3d-space, tactile, educational) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Baskervville consistently for headlines and interface labels.
- Keep the palette anchored to #66b2e5, #86bcdf, and #e8ea9f.
- Preserve the experimental posture signaled by the loadmo.re tags: 3d-space, tactile, educational.
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

> Build a responsive landing page inspired by Plastic Air. Keep the palette centered on #66b2e5, #86bcdf, and #e8ea9f. Use Baskervville for headlines, preserve the spatial depth mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/plastic-air)
- Live site: https://artsexperiments.withgoogle.com/plasticair/
- Credits: Giorga Lupi, Talia Cotton, Phil Cox (Pentagram)
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

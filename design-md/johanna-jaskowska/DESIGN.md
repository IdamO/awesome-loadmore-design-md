# Design System Inspiration of Johanna Jaskowska

## 1. Visual Theme & Atmosphere

Johanna Jaskowska reads as experimental mobile-first composition. The live capture resolves to a dark-leaning system built around #b8a6a2, #c8bab8, and accent notes from #938b89. Johwska is a 3D artist who mainly creates AR filters. This website introduces her approach.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #b8a6a2, #c8bab8, #938b89, #cec0be
- Typography stack: system fallback
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #b8a6a2 - canvas / dominant background
- Color 2: #c8bab8 - primary text or opposing surface
- Color 3: #938b89 - accent / interactive signal
- Color 4: #cec0be - supporting surface or hover state
- Color 5: #857e7b - supporting surface or hover state
- Color 6: #88817e - supporting surface or hover state
- Color 7: #cfc2c0 - supporting surface or hover state
- Color 8: #7b7572 - supporting surface or hover state

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
- Links inherit #938b89 as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps the primary stack in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#b8a6a2) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (3d) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #b8a6a2, #c8bab8, and #938b89.
- Preserve the experimental posture signaled by the loadmo.re tags: 3d.
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

> Build a responsive landing page inspired by Johanna Jaskowska. Keep the palette centered on #b8a6a2, #c8bab8, and #938b89. Use the extracted primary font for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/johanna-jaskowska)
- Live site: https://johwska.com/
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

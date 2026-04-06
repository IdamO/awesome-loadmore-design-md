# Design System Inspiration of Colour Mapper

## 1. Visual Theme & Atmosphere

Colour Mapper reads as experimental mobile-first composition. The live capture resolves to a dark-leaning system built around #000000, #6e6e6e, and accent notes from #171717. Click anywhere to begin a real-time polar colour map

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers SuisseNeue, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #000000, #6e6e6e, #171717, #575757
- Typography stack: SuisseNeue
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #000000 - canvas / dominant background
- Color 2: #6e6e6e - primary text or opposing surface
- Color 3: #171717 - accent / interactive signal
- Color 4: #575757 - supporting surface or hover state
- Color 5: #484848 - supporting surface or hover state
- Color 6: #272727 - supporting surface or hover state
- Color 7: #373737 - supporting surface or hover state
- Color 8: #8a8a8a - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: SuisseNeue

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height normal
- Button sample: 18px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(255, 255, 255) text.
- Links inherit #171717 as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps SuisseNeue in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#000000) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (colorful, photography) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use SuisseNeue consistently for headlines and interface labels.
- Keep the palette anchored to #000000, #6e6e6e, and #171717.
- Preserve the experimental posture signaled by the loadmo.re tags: colorful, photography.
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

> Build a responsive landing page inspired by Colour Mapper. Keep the palette centered on #000000, #6e6e6e, and #171717. Use SuisseNeue for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/colour-mapper)
- Live site: https://colour-mapper.michaelnorman.au/
- Credits: Michael Norman
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

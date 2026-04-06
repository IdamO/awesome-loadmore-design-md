# Design System Inspiration of CCI Graduate Showcase

## 1. Visual Theme & Atmosphere

CCI Graduate Showcase reads as experimental mobile-first composition. The live capture resolves to a dark-leaning system built around #0056fe, #f1f6fc, and accent notes from #1d65f4. A fun juxtaposition of digital aesthetics and natural behaviours which lets you create ripples in pixels.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #0056fe, #f1f6fc, #1d65f4, #6296f3
- Typography stack: system fallback
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #0056fe - canvas / dominant background
- Color 2: #f1f6fc - primary text or opposing surface
- Color 3: #1d65f4 - accent / interactive signal
- Color 4: #6296f3 - supporting surface or hover state
- Color 5: #aecaf7 - supporting surface or hover state
- Color 6: #8fb5f5 - supporting surface or hover state
- Color 7: #427def - supporting surface or hover state
- Color 8: #3e80f6 - supporting surface or hover state

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
- Links inherit #1d65f4 as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps the primary stack in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#0056fe) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (glitches) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #0056fe, #f1f6fc, and #1d65f4.
- Preserve the experimental posture signaled by the loadmo.re tags: glitches.
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

> Build a responsive landing page inspired by CCI Graduate Showcase. Keep the palette centered on #0056fe, #f1f6fc, and #1d65f4. Use the extracted primary font for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/cci-graduate-showcase)
- Live site: https://creativecomputing.cci.arts.ac.uk/
- Credits: not listed
- Desktop capture: failed
- Mobile capture: failed
- Archival fallback: poster image used for missing screenshots

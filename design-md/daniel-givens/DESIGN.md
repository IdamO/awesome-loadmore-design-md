# Design System Inspiration of Daniel Givens

## 1. Visual Theme & Atmosphere

Daniel Givens reads as experimental mobile-first composition. The live capture resolves to a light-leaning system built around #f7f4ee, #dfe1e5, and accent notes from #a6b9e3. Paint and distort glowing stripes that ripple with vibrant, psychedelic colors. So satisfying!

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Geist Mono, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f7f4ee, #dfe1e5, #a6b9e3, #9db3e0
- Typography stack: Geist Mono
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #f7f4ee - canvas / dominant background
- Color 2: #dfe1e5 - primary text or opposing surface
- Color 3: #a6b9e3 - accent / interactive signal
- Color 4: #9db3e0 - supporting surface or hover state
- Color 5: #f8f5f0 - supporting surface or hover state
- Color 6: #e3e1db - supporting surface or hover state
- Color 7: #b6c5e2 - supporting surface or hover state
- Color 8: #afc0e1 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Geist Mono

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 14px / weight 400 / line-height normal
- Button sample: 14px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgb(14, 77, 237) backgrounds with rgb(247, 245, 238) text.
- Links inherit #a6b9e3 as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Geist Mono in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f7f4ee) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (tactile, colorful, portfolio) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Geist Mono consistently for headlines and interface labels.
- Keep the palette anchored to #f7f4ee, #dfe1e5, and #a6b9e3.
- Preserve the experimental posture signaled by the loadmo.re tags: tactile, colorful, portfolio.
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

> Build a responsive landing page inspired by Daniel Givens. Keep the palette centered on #f7f4ee, #dfe1e5, and #a6b9e3. Use Geist Mono for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/daniel-givens)
- Live site: https://danielgivens.com/
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

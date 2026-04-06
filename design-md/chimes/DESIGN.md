# Design System Inspiration of Hudson Mohawke - CHIMES RMX

## 1. Visual Theme & Atmosphere

Hudson Mohawke - CHIMES RMX reads as sonic pacing. The live capture resolves to a light-leaning system built around #f5f5f5, #ababab, and accent notes from #b3ccdc. Drag'ndropping Hudson Mohawke's face through the galaxy, while listening to his new soundtrack. Sound like a plan.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f5f5f5, #ababab, #b3ccdc, #cedfad
- Typography stack: system fallback
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #f5f5f5 - canvas / dominant background
- Color 2: #ababab - primary text or opposing surface
- Color 3: #b3ccdc - accent / interactive signal
- Color 4: #cedfad - supporting surface or hover state
- Color 5: #a5cd52 - supporting surface or hover state
- Color 6: #99c939 - supporting surface or hover state
- Color 7: #d7adae - supporting surface or hover state
- Color 8: #bb2324 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: system UI

### Hierarchy Snapshot
- Heading sample: 60px / weight 300 / letter-spacing normal
- Body sample: 16px / weight 400 / line-height 26px
- Button sample: 13px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(0, 81, 195) text.
- Links inherit rgb(47, 123, 191) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps the primary stack in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f5f5f5) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (music, tactile) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #f5f5f5, #ababab, and #b3ccdc.
- Preserve the experimental posture signaled by the loadmo.re tags: music, tactile.
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

> Build a responsive landing page inspired by Hudson Mohawke - CHIMES RMX. Keep the palette centered on #f5f5f5, #ababab, and #b3ccdc. Use the extracted primary font for headlines, preserve the sonic pacing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/chimes)
- Live site: https://chimes.intmagic.com/
- Credits: International Magic, Warp Records, Hudson Mohawke
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

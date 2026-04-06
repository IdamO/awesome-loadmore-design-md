# Design System Inspiration of Canoa Lab

## 1. Visual Theme & Atmosphere

Canoa Lab reads as experimental mobile-first composition. The live capture resolves to a dark-leaning system built around #2d3336, #585450, and accent notes from #c7d3d9. Canoa Lab’s ceramics come alive as images glide in a fluid, figure-eight motion.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers ABC Oracle Triple, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #2d3336, #585450, #c7d3d9, #9caaa8
- Typography stack: ABC Oracle Triple, swiper-icons
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #2d3336 - canvas / dominant background
- Color 2: #585450 - primary text or opposing surface
- Color 3: #c7d3d9 - accent / interactive signal
- Color 4: #9caaa8 - supporting surface or hover state
- Color 5: #b8c6c8 - supporting surface or hover state
- Color 6: #44413d - supporting surface or hover state
- Color 7: #363c41 - supporting surface or hover state
- Color 8: #423d3b - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: ABC Oracle Triple
- Secondary: swiper-icons

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height 20px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(17, 17, 17) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps ABC Oracle Triple in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#2d3336) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio, animation, photography) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use ABC Oracle Triple consistently for headlines and interface labels.
- Keep the palette anchored to #2d3336, #585450, and #c7d3d9.
- Preserve the experimental posture signaled by the loadmo.re tags: portfolio, animation, photography.
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

> Build a responsive landing page inspired by Canoa Lab. Keep the palette centered on #2d3336, #585450, and #c7d3d9. Use ABC Oracle Triple for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/canoa-lab)
- Live site: https://www.canoalab.com
- Credits: Jota Team Aurora Saseta
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

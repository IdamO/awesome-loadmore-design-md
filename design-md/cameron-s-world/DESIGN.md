# Design System Inspiration of Cameron's World

## 1. Visual Theme & Atmosphere

Cameron's World reads as experimental mobile-first composition. The live capture resolves to a dark-leaning system built around #060507, #5f5c5c, and accent notes from #55291e. A web-collage of text and images excavated from the buried neighbourhoods of GeoCities.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Comic Neue, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #060507, #5f5c5c, #55291e, #212754
- Typography stack: Comic Neue, Calculator, GT-Cinetype-Regular
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #060507 - canvas / dominant background
- Color 2: #5f5c5c - primary text or opposing surface
- Color 3: #55291e - accent / interactive signal
- Color 4: #212754 - supporting surface or hover state
- Color 5: #5e4e2c - supporting surface or hover state
- Color 6: #a09b9c - supporting surface or hover state
- Color 7: #2c5560 - supporting surface or hover state
- Color 8: #976a59 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Comic Neue
- Secondary: Calculator
- Support: GT-Cinetype-Regular
- Support: GT-Cinetype-Light

### Hierarchy Snapshot
- Heading sample: 108px / weight 400 / letter-spacing normal
- Body sample: 14.544px / weight 400 / line-height 20.9143px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(255, 255, 255) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Comic Neue in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#060507) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (net.art) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Comic Neue consistently for headlines and interface labels.
- Keep the palette anchored to #060507, #5f5c5c, and #55291e.
- Preserve the experimental posture signaled by the loadmo.re tags: net.art.
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

> Build a responsive landing page inspired by Cameron's World. Keep the palette centered on #060507, #5f5c5c, and #55291e. Use Comic Neue for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/cameron-s-world)
- Live site: https://www.cameronsworld.net/
- Credits: Cameron Askin
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

# Design System Inspiration of LCF SMC Show 21

## 1. Visual Theme & Atmosphere

LCF SMC Show 21 reads as spatial depth, exhibition-like framing. The live capture resolves to a dark-leaning system built around #0f0d10, #d6d5d7, and accent notes from #a3a4a5. Discover London College of Fashion 2021's graduates projects through browsing this 3D virtual exhibition.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #0f0d10, #d6d5d7, #a3a4a5, #59575b
- Typography stack: system fallback
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #0f0d10 - canvas / dominant background
- Color 2: #d6d5d7 - primary text or opposing surface
- Color 3: #a3a4a5 - accent / interactive signal
- Color 4: #59575b - supporting surface or hover state
- Color 5: #4f2021 - supporting surface or hover state
- Color 6: #767886 - supporting surface or hover state
- Color 7: #c0bec1 - supporting surface or hover state
- Color 8: #403e42 - supporting surface or hover state

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
- Links inherit #a3a4a5 as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps the primary stack in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#0f0d10) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (3d-space, tactile, digital-exhibition) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #0f0d10, #d6d5d7, and #a3a4a5.
- Preserve the experimental posture signaled by the loadmo.re tags: 3d-space, tactile, digital-exhibition.
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

> Build a responsive landing page inspired by LCF SMC Show 21. Keep the palette centered on #0f0d10, #d6d5d7, and #a3a4a5. Use the extracted primary font for headlines, preserve the spatial depth, exhibition-like framing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/lcf-smc-show-21)
- Live site: https://lcf-smc-show-21.co.uk/undergraduate/design-for-performance
- Credits: Two Much Studio
- Desktop capture: failed
- Mobile capture: failed
- Archival fallback: poster image used for missing screenshots

# Design System Inspiration of Neal Fun

## 1. Visual Theme & Atmosphere

Neal Fun reads as playful interaction. The live capture resolves to a light-leaning system built around #f8f6f3, #0b0b0a, and accent notes from #a8a6a1. A playful experiment hub that shows how educational interfaces can feel toy-like, crisp, and culturally current instead of institutional.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Roboto, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f8f6f3, #0b0b0a, #a8a6a1, #fb0130
- Typography stack: Roboto, RobotoLight
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #f8f6f3 - canvas / dominant background
- Color 2: #0b0b0a - primary text or opposing surface
- Color 3: #a8a6a1 - accent / interactive signal
- Color 4: #fb0130 - supporting surface or hover state
- Color 5: #61625f - supporting surface or hover state
- Color 6: #a2d6eb - supporting surface or hover state
- Color 7: #dfcdb2 - supporting surface or hover state
- Color 8: #059548 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Roboto
- Secondary: RobotoLight

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height normal
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Roboto in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f8f6f3) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (educational, playful, game) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: 15px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Roboto consistently for headlines and interface labels.
- Keep the palette anchored to #f8f6f3, #0b0b0a, and #a8a6a1.
- Preserve the experimental posture signaled by the loadmo.re tags: educational, playful, game.
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

> Build a responsive landing page inspired by Neal Fun. Keep the palette centered on #f8f6f3, #0b0b0a, and #a8a6a1. Use Roboto for headlines, preserve the playful interaction mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: manual curation (https://neal.fun/)
- Live site: https://neal.fun/
- Credits: Neal Agarwal
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

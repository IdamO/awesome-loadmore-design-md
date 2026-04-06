# Design System Inspiration of Fast Cash Money

## 1. Visual Theme & Atmosphere

Fast Cash Money reads as retro-computing cues. The live capture resolves to a dark-leaning system built around #010331, #4ab2e2, and accent notes from #319ccd. A fake cryptocurrency website that fits into a larger fictionalized network of websites (2018).

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #010331, #4ab2e2, #319ccd, #1f88b7
- Typography stack: system fallback
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #010331 - canvas / dominant background
- Color 2: #4ab2e2 - primary text or opposing surface
- Color 3: #319ccd - accent / interactive signal
- Color 4: #1f88b7 - supporting surface or hover state
- Color 5: #ef0e8d - supporting surface or hover state
- Color 6: #5bc5f6 - supporting surface or hover state
- Color 7: #216023 - supporting surface or hover state
- Color 8: #17e973 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: system UI

### Hierarchy Snapshot
- Heading sample: 32px / weight 700 / letter-spacing normal
- Body sample: 22px / weight 400 / line-height normal
- Button sample: 24px / weight 700

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(68, 255, 0) text.
- Links inherit rgb(0, 176, 255) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps the primary stack in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#010331) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (glitches, colorful, retro) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 60px.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #010331, #4ab2e2, and #319ccd.
- Preserve the experimental posture signaled by the loadmo.re tags: glitches, colorful, retro.
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

> Build a responsive landing page inspired by Fast Cash Money. Keep the palette centered on #010331, #4ab2e2, and #319ccd. Use the extracted primary font for headlines, preserve the retro-computing cues mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/fast-cash-money)
- Live site: https://fastcashmoneyplus.biz/
- Credits: Steve Pikelny
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

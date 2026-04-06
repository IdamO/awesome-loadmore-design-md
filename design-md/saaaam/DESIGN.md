# Design System Inspiration of Saaaam

## 1. Visual Theme & Atmosphere

Saaaam reads as playful interaction. The live capture resolves to a light-leaning system built around #fcfcfc, #e4adb9, and accent notes from #ef8319. Fun interaction where you can customise the colours and styling of shapes with a slider.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Inter, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fcfcfc, #e4adb9, #ef8319, #3abeef
- Typography stack: Inter, slick
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #fcfcfc - canvas / dominant background
- Color 2: #e4adb9 - primary text or opposing surface
- Color 3: #ef8319 - accent / interactive signal
- Color 4: #3abeef - supporting surface or hover state
- Color 5: #e73d11 - supporting surface or hover state
- Color 6: #fdec03 - supporting surface or hover state
- Color 7: #201f1f - supporting surface or hover state
- Color 8: #5c595b - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Inter
- Secondary: slick

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 12px / weight 400 / line-height 20px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(34, 34, 34) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Inter in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fcfcfc) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (playful, portfolio) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: 113px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Inter consistently for headlines and interface labels.
- Keep the palette anchored to #fcfcfc, #e4adb9, and #ef8319.
- Preserve the experimental posture signaled by the loadmo.re tags: playful, portfolio.
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

> Build a responsive landing page inspired by Saaaam. Keep the palette centered on #fcfcfc, #e4adb9, and #ef8319. Use Inter for headlines, preserve the playful interaction mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/saaaam)
- Live site: https://www.saaa.am/
- Credits: Sam Fairbairn
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

# Design System Inspiration of SR_A SR_A

## 1. Visual Theme & Atmosphere

SR_A SR_A reads as playful interaction. The live capture resolves to a light-leaning system built around #f2f2f2, #e6e6e6, and accent notes from #d9d9d9. This studio's landing page has a playful diagram that lets you interact with floating thumbnails of their projects.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers courier-std, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f2f2f2, #e6e6e6, #d9d9d9, #c8c8c8
- Typography stack: courier-std
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #f2f2f2 - canvas / dominant background
- Color 2: #e6e6e6 - primary text or opposing surface
- Color 3: #d9d9d9 - accent / interactive signal
- Color 4: #c8c8c8 - supporting surface or hover state
- Color 5: #b6b6b6 - supporting surface or hover state
- Color 6: #0d0d0d - supporting surface or hover state
- Color 7: #6e6e6e - supporting surface or hover state
- Color 8: #999999 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: courier-std

### Hierarchy Snapshot
- Heading sample: 12px / weight 400 / letter-spacing normal
- Body sample: 12px / weight 400 / line-height 15px
- Button sample: 12px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgb(0, 0, 0) backgrounds with rgb(255, 255, 255) text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps courier-std in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f2f2f2) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (playful, portfolio) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use courier-std consistently for headlines and interface labels.
- Keep the palette anchored to #f2f2f2, #e6e6e6, and #d9d9d9.
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

> Build a responsive landing page inspired by SR_A SR_A. Keep the palette centered on #f2f2f2, #e6e6e6, and #d9d9d9. Use courier-std for headlines, preserve the playful interaction mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/sr-a-sr-a)
- Live site: https://sr-a.com/
- Credits: Samuel Ross
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

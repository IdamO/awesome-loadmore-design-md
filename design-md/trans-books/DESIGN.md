# Design System Inspiration of Trans Books

## 1. Visual Theme & Atmosphere

Trans Books reads as experimental mobile-first composition. The live capture resolves to a dark-leaning system built around #000000, #e4e4e5, and accent notes from #a4a4a5. Grid-based single page website with a fun inverted scrolling animation for the 2018 edition of this Japanese book fair.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers slick, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #000000, #e4e4e5, #a4a4a5, #5e5e5f
- Typography stack: slick, YakuHanJP, HelveticaNeueLTStd-Roman
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #000000 - canvas / dominant background
- Color 2: #e4e4e5 - primary text or opposing surface
- Color 3: #a4a4a5 - accent / interactive signal
- Color 4: #5e5e5f - supporting surface or hover state
- Color 5: #dddc1b - supporting surface or hover state
- Color 6: #16d919 - supporting surface or hover state
- Color 7: #e6e29e - supporting surface or hover state
- Color 8: #e3e15a - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: slick
- Secondary: YakuHanJP
- Support: HelveticaNeueLTStd-Roman

### Hierarchy Snapshot
- Heading sample: 24px / weight 400 / letter-spacing 0.16px
- Body sample: 20px / weight 500 / line-height 26.6px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps slick in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#000000) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (event) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use slick consistently for headlines and interface labels.
- Keep the palette anchored to #000000, #e4e4e5, and #a4a4a5.
- Preserve the experimental posture signaled by the loadmo.re tags: event.
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

> Build a responsive landing page inspired by Trans Books. Keep the palette centered on #000000, #e4e4e5, and #a4a4a5. Use slick for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/trans-books)
- Live site: https://transbooks.center/2018/
- Credits: Hagiwara Shunya
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

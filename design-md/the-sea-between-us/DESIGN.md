# Design System Inspiration of The Sea Between Us

## 1. Visual Theme & Atmosphere

The Sea Between Us reads as retro-computing cues. The live capture resolves to a light-leaning system built around #e9ca95, #675362, and accent notes from #8d6d61. Wander a pixel-art shoreline and find bottles carrying messages from others.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Grape Nuts, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #e9ca95, #675362, #8d6d61, #f6eedd
- Typography stack: Grape Nuts, Micro 5, Material Symbols Outlined
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #e9ca95 - canvas / dominant background
- Color 2: #675362 - primary text or opposing surface
- Color 3: #8d6d61 - accent / interactive signal
- Color 4: #f6eedd - supporting surface or hover state
- Color 5: #d5b68c - supporting surface or hover state
- Color 6: #a2866c - supporting surface or hover state
- Color 7: #fe3800 - supporting surface or hover state
- Color 8: #1c1b4d - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Grape Nuts
- Secondary: Micro 5
- Support: Material Symbols Outlined
- Support: Pixelify Sans
- Support: Helvetica Pixel
- Support: SmallPixel

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 10px / weight 400 / line-height 15px
- Button sample: 48px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(253, 245, 230) text.
- Links inherit rgb(253, 245, 230) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Grape Nuts in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#e9ca95) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (net.art, retro) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Grape Nuts consistently for headlines and interface labels.
- Keep the palette anchored to #e9ca95, #675362, and #8d6d61.
- Preserve the experimental posture signaled by the loadmo.re tags: net.art, retro.
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

> Build a responsive landing page inspired by The Sea Between Us. Keep the palette centered on #e9ca95, #675362, and #8d6d61. Use Grape Nuts for headlines, preserve the retro-computing cues mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/the-sea-between-us)
- Live site: https://www.theseabetween.us/
- Credits: Joseph Pleass
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

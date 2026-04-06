# Design System Inspiration of 100 Gecs

## 1. Visual Theme & Atmosphere

100 Gecs reads as sonic pacing. The live capture resolves to a dark-leaning system built around #050404, #5b5a58, and accent notes from #a99fa0. So... what's that? I honestly don't know. But I just love when music bands get themselves crazy websites.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers brandon-grotesque, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #050404, #5b5a58, #a99fa0, #e5dcd8
- Typography stack: brandon-grotesque, Font Awesome 6 Brands, Font Awesome 6 Free
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #050404 - canvas / dominant background
- Color 2: #5b5a58 - primary text or opposing surface
- Color 3: #a99fa0 - accent / interactive signal
- Color 4: #e5dcd8 - supporting surface or hover state
- Color 5: #4a3225 - supporting surface or hover state
- Color 6: #cbb1a9 - supporting surface or hover state
- Color 7: #584a34 - supporting surface or hover state
- Color 8: #0754a8 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: brandon-grotesque
- Secondary: Font Awesome 6 Brands
- Support: Font Awesome 6 Free
- Support: Font Awesome 5 Brands
- Support: Font Awesome 5 Free
- Support: FontAwesome

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 14px / weight 400 / line-height 14px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(255, 255, 255) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps brandon-grotesque in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#050404) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (music) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use brandon-grotesque consistently for headlines and interface labels.
- Keep the palette anchored to #050404, #5b5a58, and #a99fa0.
- Preserve the experimental posture signaled by the loadmo.re tags: music.
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

> Build a responsive landing page inspired by 100 Gecs. Keep the palette centered on #050404, #5b5a58, and #a99fa0. Use brandon-grotesque for headlines, preserve the sonic pacing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/100gecs)
- Live site: https://100gecs.com/
- Credits: Ezra Miller, A Lot of Moving Parts
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

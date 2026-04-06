# Design System Inspiration of Christopher Melgram

## 1. Visual Theme & Atmosphere

Christopher Melgram reads as spatial depth. The live capture resolves to a light-leaning system built around #f1f1f1, #f1c8af, and accent notes from #f0e3da. Feels like scrolling within a 3D box.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers HelveticaNeueLTStd-HvEx, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f1f1f1, #f1c8af, #f0e3da, #f1ebe8
- Typography stack: HelveticaNeueLTStd-HvEx, Cinderblock-75
- Desktop posture: flowing document rhythm
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #f1f1f1 - canvas / dominant background
- Color 2: #f1c8af - primary text or opposing surface
- Color 3: #f0e3da - accent / interactive signal
- Color 4: #f1ebe8 - supporting surface or hover state
- Color 5: #f1d6c6 - supporting surface or hover state
- Color 6: #f0b896 - supporting surface or hover state
- Color 7: #f0a374 - supporting surface or hover state
- Color 8: #f3823e - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: HelveticaNeueLTStd-HvEx
- Secondary: Cinderblock-75

### Hierarchy Snapshot
- Heading sample: 132.8px / weight 400 / letter-spacing normal
- Body sample: 19.6px / weight 400 / line-height normal
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(255, 96, 6) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps HelveticaNeueLTStd-HvEx in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f1f1f1) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio, 3d-space) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: rgba(0, 0, 0, 0.25) 0px 0px 10px 0px.
- Radius cue: 3px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use HelveticaNeueLTStd-HvEx consistently for headlines and interface labels.
- Keep the palette anchored to #f1f1f1, #f1c8af, and #f0e3da.
- Preserve the experimental posture signaled by the loadmo.re tags: portfolio, 3d-space.
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

> Build a responsive landing page inspired by Christopher Melgram. Keep the palette centered on #f1f1f1, #f1c8af, and #f0e3da. Use HelveticaNeueLTStd-HvEx for headlines, preserve the spatial depth mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/christopher-melgram)
- Live site: http://www.christophermelgram.com
- Credits: TwoMuch Studio
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

# Design System Inspiration of 69

## 1. Visual Theme & Atmosphere

69 reads as editorial fashion energy. The live capture resolves to a light-leaning system built around #fefefe, #040404, and accent notes from #718eaa. Jackpot on this e-commerce website. That's rare! Nice interface, great content, and we just love the products too.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Platypi, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fefefe, #040404, #718eaa, #989fa6
- Typography stack: Platypi, GTStandard-M
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #fefefe - canvas / dominant background
- Color 2: #040404 - primary text or opposing surface
- Color 3: #718eaa - accent / interactive signal
- Color 4: #989fa6 - supporting surface or hover state
- Color 5: #5d5e5f - supporting surface or hover state
- Color 6: #577595 - supporting surface or hover state
- Color 7: #91b0ca - supporting surface or hover state
- Color 8: #b4c8d9 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Platypi
- Secondary: GTStandard-M

### Hierarchy Snapshot
- Heading sample: 27.6px / weight 500 / letter-spacing 0.69px
- Body sample: 20.7px / weight 500 / line-height 26.1px
- Button sample: 13.3333px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(17, 21, 28) text.
- Links inherit rgb(223, 223, 216) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: rgba(133, 88, 50, 0) 0px 0px 0px 2px.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Platypi in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fefefe) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (e-commerce, fashion) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: rgba(133, 88, 50, 0) 0px 0px 0px 2px.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Platypi consistently for headlines and interface labels.
- Keep the palette anchored to #fefefe, #040404, and #718eaa.
- Preserve the experimental posture signaled by the loadmo.re tags: e-commerce, fashion.
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

> Build a responsive landing page inspired by 69. Keep the palette centered on #fefefe, #040404, and #718eaa. Use Platypi for headlines, preserve the editorial fashion energy mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/sixty-nine)
- Live site: https://sixty-nine.us/
- Credits: Special Offer Studio
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

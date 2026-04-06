# Design System Inspiration of Cash by Cash App

## 1. Visual Theme & Atmosphere

Cash by Cash App reads as spatial depth. The live capture resolves to a light-leaning system built around #fefefe, #000000, and accent notes from #cfd6e0. Explorative game-like 3D experience that celebrates the ever-evolving diversity of the natural world.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers VideoJS, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fefefe, #000000, #cfd6e0, #ececec
- Typography stack: VideoJS, Söhne Mono, Söhne
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #fefefe - canvas / dominant background
- Color 2: #000000 - primary text or opposing surface
- Color 3: #cfd6e0 - accent / interactive signal
- Color 4: #ececec - supporting surface or hover state
- Color 5: #6c6c6c - supporting surface or hover state
- Color 6: #a7a7a7 - supporting surface or hover state
- Color 7: #222222 - supporting surface or hover state
- Color 8: #bccfec - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: VideoJS
- Secondary: Söhne Mono
- Support: Söhne
- Support: Söhne Mono Kräftig
- Support: Inter

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 14px / weight 400 / line-height 22.1053px
- Button sample: 16px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgb(0, 0, 0) backgrounds with rgb(255, 255, 255) text.
- Links inherit rgb(51, 116, 255) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: rgb(255, 255, 255) 0px 0px 0px 0px inset, rgb(255, 255, 255) 0px 0px 0px 0px, rgb(255, 255, 255) 0px 0px 0px 0px.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps VideoJS in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fefefe) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (e-commerce, 3d-space, tactile) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: rgb(255, 255, 255) 0px 0px 0px 0px inset, rgb(255, 255, 255) 0px 0px 0px 0px, rgb(255, 255, 255) 0px 0px 0px 0px.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use VideoJS consistently for headlines and interface labels.
- Keep the palette anchored to #fefefe, #000000, and #cfd6e0.
- Preserve the experimental posture signaled by the loadmo.re tags: e-commerce, 3d-space, tactile.
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

> Build a responsive landing page inspired by Cash by Cash App. Keep the palette centered on #fefefe, #000000, and #cfd6e0. Use VideoJS for headlines, preserve the spatial depth mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/cash-by-cash-app)
- Live site: http://cashbycashapp.com/
- Credits: Superficial, Jack Wild
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

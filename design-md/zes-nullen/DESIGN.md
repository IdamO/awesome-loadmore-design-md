# Design System Inspiration of Zes Nullen

## 1. Visual Theme & Atmosphere

Zes Nullen reads as experimental mobile-first composition. The live capture resolves to a dark-leaning system built around #010101, #535353, and accent notes from #f1f1f1. A cool e-commerce site where product shots seamlessly melt into each other as you scroll, creating a ‘crystal ball’ effect.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Material Icons, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #010101, #535353, #f1f1f1, #481d0d
- Typography stack: Material Icons, Material Icons Round, Montserrat
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #010101 - canvas / dominant background
- Color 2: #535353 - primary text or opposing surface
- Color 3: #f1f1f1 - accent / interactive signal
- Color 4: #481d0d - supporting surface or hover state
- Color 5: #07054d - supporting surface or hover state
- Color 6: #4d0b4e - supporting surface or hover state
- Color 7: #4b4c15 - supporting surface or hover state
- Color 8: #114b4a - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Material Icons
- Secondary: Material Icons Round
- Support: Montserrat
- Support: Satoshi

### Hierarchy Snapshot
- Heading sample: 34.5px / weight 400 / letter-spacing normal
- Body sample: 16px / weight 400 / line-height 16px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(255, 255, 255) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Material Icons in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#010101) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (e-commerce, animation, photography) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: 50%.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Material Icons consistently for headlines and interface labels.
- Keep the palette anchored to #010101, #535353, and #f1f1f1.
- Preserve the experimental posture signaled by the loadmo.re tags: e-commerce, animation, photography.
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

> Build a responsive landing page inspired by Zes Nullen. Keep the palette centered on #010101, #535353, and #f1f1f1. Use Material Icons for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/zes-nullen)
- Live site: https://zesnullen.world/
- Credits: Arvin Leeuwis Kalok Yeung
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

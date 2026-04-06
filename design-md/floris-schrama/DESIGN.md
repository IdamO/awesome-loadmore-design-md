# Design System Inspiration of Floris Schrama

## 1. Visual Theme & Atmosphere

Floris Schrama reads as experimental mobile-first composition. The live capture resolves to a light-leaning system built around #f9f4f6, #212021, and accent notes from #eba4b4. The layout seems quite simple at first sight, but then there's a cool 3D transition to swap categories.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers HB Font, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f9f4f6, #212021, #eba4b4, #615e5d
- Typography stack: HB Font
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #f9f4f6 - canvas / dominant background
- Color 2: #212021 - primary text or opposing surface
- Color 3: #eba4b4 - accent / interactive signal
- Color 4: #615e5d - supporting surface or hover state
- Color 5: #eeb8c4 - supporting surface or hover state
- Color 6: #97979f - supporting surface or hover state
- Color 7: #b4c8e4 - supporting surface or hover state
- Color 8: #a6b6d5 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: HB Font

### Hierarchy Snapshot
- Heading sample: 28.8px / weight 400 / letter-spacing normal
- Body sample: 28.8px / weight 400 / line-height 33.12px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(248, 33, 72) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps HB Font in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f9f4f6) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use HB Font consistently for headlines and interface labels.
- Keep the palette anchored to #f9f4f6, #212021, and #eba4b4.
- Preserve the experimental posture signaled by the loadmo.re tags: portfolio.
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

> Build a responsive landing page inspired by Floris Schrama. Keep the palette centered on #f9f4f6, #212021, and #eba4b4. Use HB Font for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/floris-schrama)
- Live site: http://www.florisschrama.nl/
- Credits: Harrys Blondman
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

# Design System Inspiration of Oto Nove Swiss Paris

## 1. Visual Theme & Atmosphere

Oto Nove Swiss Paris reads as sonic pacing, exhibition-like framing. The live capture resolves to a light-leaning system built around #fcfcfc, #1b1a1b, and accent notes from #9ca0a4. This festival's website includes a music player with a beautiful yet minimalistic sound visualisation.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Inter, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fcfcfc, #1b1a1b, #9ca0a4, #625f61
- Typography stack: Inter, Libre Caslon Display, swiper-icons
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #fcfcfc - canvas / dominant background
- Color 2: #1b1a1b - primary text or opposing surface
- Color 3: #9ca0a4 - accent / interactive signal
- Color 4: #625f61 - supporting surface or hover state
- Color 5: #98675b - supporting surface or hover state
- Color 6: #542c24 - supporting surface or hover state
- Color 7: #60552f - supporting surface or hover state
- Color 8: #9c6528 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Inter
- Secondary: Libre Caslon Display
- Support: swiper-icons

### Hierarchy Snapshot
- Heading sample: 32px / weight 500 / letter-spacing normal
- Body sample: 16px / weight 400 / line-height 24px
- Button sample: 16px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(13, 32, 53) text.
- Links inherit rgb(13, 32, 53) as the interaction signal.
- Border radius trends: 6px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Inter in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fcfcfc) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (music, arts&culture) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 6px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Inter consistently for headlines and interface labels.
- Keep the palette anchored to #fcfcfc, #1b1a1b, and #9ca0a4.
- Preserve the experimental posture signaled by the loadmo.re tags: music, arts&culture.
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

> Build a responsive landing page inspired by Oto Nove Swiss Paris. Keep the palette centered on #fcfcfc, #1b1a1b, and #9ca0a4. Use Inter for headlines, preserve the sonic pacing, exhibition-like framing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/oto-nove-swiss-paris)
- Live site: https://www.otonoveswiss.com/
- Credits: Prasens Buro
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

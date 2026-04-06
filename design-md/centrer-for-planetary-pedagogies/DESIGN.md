# Design System Inspiration of Centrer for Planetary Pedagogies

## 1. Visual Theme & Atmosphere

Centrer for Planetary Pedagogies reads as experimental mobile-first composition. The live capture resolves to a dark-leaning system built around #798822, #68751f, and accent notes from #73895b. Cute minimal forest dances with the movement of your cursor.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers ABCROM-Light, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #798822, #68751f, #73895b, #6c899d
- Typography stack: ABCROM-Light, ABCROMCondensed-Light, ABCROM-LightItalic
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #798822 - canvas / dominant background
- Color 2: #68751f - primary text or opposing surface
- Color 3: #73895b - accent / interactive signal
- Color 4: #6c899d - supporting surface or hover state
- Color 5: #6c7154 - supporting surface or hover state
- Color 6: #899832 - supporting surface or hover state
- Color 7: #99a454 - supporting surface or hover state
- Color 8: #688bc7 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: ABCROM-Light
- Secondary: ABCROMCondensed-Light
- Support: ABCROM-LightItalic

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 15.9984px / weight 400 / line-height normal
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(246, 243, 239) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps ABCROM-Light in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#798822) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (net.art) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use ABCROM-Light consistently for headlines and interface labels.
- Keep the palette anchored to #798822, #68751f, and #73895b.
- Preserve the experimental posture signaled by the loadmo.re tags: net.art.
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

> Build a responsive landing page inspired by Centrer for Planetary Pedagogies. Keep the palette centered on #798822, #68751f, and #73895b. Use ABCROM-Light for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/centrer-for-planetary-pedagogies)
- Live site: https://www.centerforplanetarypedagogies.org/?ref=siteinspire
- Credits: Studio OBV
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

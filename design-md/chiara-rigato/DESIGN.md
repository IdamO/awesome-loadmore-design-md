# Design System Inspiration of Chiara Rigato

## 1. Visual Theme & Atmosphere

Chiara Rigato reads as experimental mobile-first composition. The live capture resolves to a dark-leaning system built around #ee88b5, #fe4d1a, and accent notes from #f66964. Colorful portfolio with bold types scrolling horizontally. And a floating smiley face.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Ginto Nord Regular, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #ee88b5, #fe4d1a, #f66964, #f088b6
- Typography stack: Ginto Nord Regular, Ginto Nord Ultra
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #ee88b5 - canvas / dominant background
- Color 2: #fe4d1a - primary text or opposing surface
- Color 3: #f66964 - accent / interactive signal
- Color 4: #f088b6 - supporting surface or hover state
- Color 5: #f182a4 - supporting surface or hover state
- Color 6: #fb542f - supporting surface or hover state
- Color 7: #f3798d - supporting surface or hover state
- Color 8: #ee8cc1 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Ginto Nord Regular
- Secondary: Ginto Nord Ultra

### Hierarchy Snapshot
- Heading sample: 42px / weight 400 / letter-spacing normal
- Body sample: 156.8px / weight 400 / line-height 196px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(255, 78, 27) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Ginto Nord Regular in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#ee88b5) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Ginto Nord Regular consistently for headlines and interface labels.
- Keep the palette anchored to #ee88b5, #fe4d1a, and #f66964.
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

> Build a responsive landing page inspired by Chiara Rigato. Keep the palette centered on #ee88b5, #fe4d1a, and #f66964. Use Ginto Nord Regular for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/chiara-rigato)
- Live site: http://www.chiararigato.com/
- Credits: Marco Dalle Fratte
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

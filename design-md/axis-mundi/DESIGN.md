# Design System Inspiration of Axis Mundi

## 1. Visual Theme & Atmosphere

Axis Mundi reads as playful interaction. The live capture resolves to a light-leaning system built around #e0e4e7, #a3a3a2, and accent notes from #2789fd. Agency website for cultural research and semiotics studio Axis Mundi

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers font, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #e0e4e7, #a3a3a2, #2789fd, #5fa6fa
- Typography stack: font, font Fallback
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #e0e4e7 - canvas / dominant background
- Color 2: #a3a3a2 - primary text or opposing surface
- Color 3: #2789fd - accent / interactive signal
- Color 4: #5fa6fa - supporting surface or hover state
- Color 5: #d5ceab - supporting surface or hover state
- Color 6: #a6c8f1 - supporting surface or hover state
- Color 7: #0b7afc - supporting surface or hover state
- Color 8: #cfb199 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: font
- Secondary: font Fallback

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 26px / weight 400 / line-height 32.5px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit #2789fd as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps font in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#e0e4e7) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (colorful, playful) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use font consistently for headlines and interface labels.
- Keep the palette anchored to #e0e4e7, #a3a3a2, and #2789fd.
- Preserve the experimental posture signaled by the loadmo.re tags: colorful, playful.
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

> Build a responsive landing page inspired by Axis Mundi. Keep the palette centered on #e0e4e7, #a3a3a2, and #2789fd. Use font for headlines, preserve the playful interaction mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/axis-mundi)
- Live site: http://www.axis-mundi.co
- Credits: Gordan RatkovicNejc PrahLoop StudioKlemen Ilovar
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

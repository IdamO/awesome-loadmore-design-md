# Design System Inspiration of Ezekiel Aquino

## 1. Visual Theme & Atmosphere

Ezekiel Aquino reads as sonic pacing. The live capture resolves to a light-leaning system built around #f4f4f4, #9c9c9c, and accent notes from #d8d8d8. Ezekiel not only coded a generator for piano impromptus tracks, but also found a beautiful way to play with the scores' display.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Basel Grotesk, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f4f4f4, #9c9c9c, #d8d8d8, #c7c7c7
- Typography stack: Basel Grotesk, Ogg Regular Italic, Bravura
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #f4f4f4 - canvas / dominant background
- Color 2: #9c9c9c - primary text or opposing surface
- Color 3: #d8d8d8 - accent / interactive signal
- Color 4: #c7c7c7 - supporting surface or hover state
- Color 5: #626262 - supporting surface or hover state
- Color 6: #b7b7b7 - supporting surface or hover state
- Color 7: #e6e6e6 - supporting surface or hover state
- Color 8: #333333 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Basel Grotesk
- Secondary: Ogg Regular Italic
- Support: Bravura

### Hierarchy Snapshot
- Heading sample: 32px / weight 400 / letter-spacing normal
- Body sample: 32px / weight 400 / line-height 32px
- Button sample: 13.3333px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(255, 255, 255) text.
- Links inherit rgb(255, 255, 255) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Basel Grotesk in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f4f4f4) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (music, sound-design, portfolio) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Basel Grotesk consistently for headlines and interface labels.
- Keep the palette anchored to #f4f4f4, #9c9c9c, and #d8d8d8.
- Preserve the experimental posture signaled by the loadmo.re tags: music, sound-design, portfolio.
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

> Build a responsive landing page inspired by Ezekiel Aquino. Keep the palette centered on #f4f4f4, #9c9c9c, and #d8d8d8. Use Basel Grotesk for headlines, preserve the sonic pacing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/ezekiel-aquino)
- Live site: https://ezekielaquino.com
- Credits: Ezekiel Aquino
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

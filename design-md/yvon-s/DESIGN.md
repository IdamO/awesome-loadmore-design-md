# Design System Inspiration of Yvon's

## 1. Visual Theme & Atmosphere

Yvon's reads as playful interaction. The live capture resolves to a light-leaning system built around #fec700, #f36701, and accent notes from #03a204. fun and playful website selling bouncy castles, the shapes resemble the inflatables

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers futura-pt, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fec700, #f36701, #03a204, #013ce6
- Typography stack: futura-pt
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #fec700 - canvas / dominant background
- Color 2: #f36701 - primary text or opposing surface
- Color 3: #03a204 - accent / interactive signal
- Color 4: #013ce6 - supporting surface or hover state
- Color 5: #dcad08 - supporting surface or hover state
- Color 6: #9e630f - supporting surface or hover state
- Color 7: #fba2e1 - supporting surface or hover state
- Color 8: #ae890e - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: futura-pt

### Hierarchy Snapshot
- Heading sample: 86.1312px / weight 500 / letter-spacing normal
- Body sample: 44.1872px / weight 500 / line-height 44.1872px
- Button sample: 19.0384px / weight 500

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgba(0, 0, 0, 0.5) text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 24px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps futura-pt in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fec700) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (playful, colorful, tactile) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 24px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use futura-pt consistently for headlines and interface labels.
- Keep the palette anchored to #fec700, #f36701, and #03a204.
- Preserve the experimental posture signaled by the loadmo.re tags: playful, colorful, tactile.
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

> Build a responsive landing page inspired by Yvon's. Keep the palette centered on #fec700, #f36701, and #03a204. Use futura-pt for headlines, preserve the playful interaction mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/yvon-s)
- Live site: http://yvonsspringkussenverhuur.nl
- Credits: Studio Deploy
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

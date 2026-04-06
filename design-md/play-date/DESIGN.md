# Design System Inspiration of Play Date

## 1. Visual Theme & Atmosphere

Play Date reads as playful interaction. The live capture resolves to a dark-leaning system built around #777e84, #8e9498, and accent notes from #5d6263. Handle this console in a playful and fluid way in this simple one-pager.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Roobert, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #777e84, #8e9498, #5d6263, #fccc42
- Typography stack: Roobert
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #777e84 - canvas / dominant background
- Color 2: #8e9498 - primary text or opposing surface
- Color 3: #5d6263 - accent / interactive signal
- Color 4: #fccc42 - supporting surface or hover state
- Color 5: #2b2d2c - supporting surface or hover state
- Color 6: #7b8288 - supporting surface or hover state
- Color 7: #d9dadb - supporting surface or hover state
- Color 8: #fdca3b - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Roobert

### Hierarchy Snapshot
- Heading sample: 0px / weight 800 / letter-spacing normal
- Body sample: 57px / weight 700 / line-height 62.7px
- Button sample: 13.3333px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward color(display-p3 0.937 0.314 0.137) backgrounds with rgba(0, 0, 0, 0) text.
- Links inherit rgba(0, 0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Roobert in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#777e84) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (playful) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 6px.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Roobert consistently for headlines and interface labels.
- Keep the palette anchored to #777e84, #8e9498, and #5d6263.
- Preserve the experimental posture signaled by the loadmo.re tags: playful.
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

> Build a responsive landing page inspired by Play Date. Keep the palette centered on #777e84, #8e9498, and #5d6263. Use Roobert for headlines, preserve the playful interaction mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/play-date)
- Live site: http://play.date
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

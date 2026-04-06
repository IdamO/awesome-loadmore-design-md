# Design System Inspiration of Frederic Briolet Monolith

## 1. Visual Theme & Atmosphere

Frederic Briolet Monolith reads as sonic pacing, spatial depth. The live capture resolves to a light-leaning system built around #f9ead5, #e8dbc8, and accent notes from #d8cbba. Beautiful WebGL experiment by Frederic Briolet, including an interactive 3D scene reacting with sound.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f9ead5, #e8dbc8, #d8cbba, #eee0cd
- Typography stack: system fallback
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #f9ead5 - canvas / dominant background
- Color 2: #e8dbc8 - primary text or opposing surface
- Color 3: #d8cbba - accent / interactive signal
- Color 4: #eee0cd - supporting surface or hover state
- Color 5: #b6aa9b - supporting surface or hover state
- Color 6: #f3e5d1 - supporting surface or hover state
- Color 7: #c4b8a8 - supporting surface or hover state
- Color 8: #d2c6b5 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: system UI

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height normal
- Button sample: 14px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(0, 0, 0) text.
- Links inherit #d8cbba as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps the primary stack in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f9ead5) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (3d-space, sound-design) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #f9ead5, #e8dbc8, and #d8cbba.
- Preserve the experimental posture signaled by the loadmo.re tags: 3d-space, sound-design.
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

> Build a responsive landing page inspired by Frederic Briolet Monolith. Keep the palette centered on #f9ead5, #e8dbc8, and #d8cbba. Use the extracted primary font for headlines, preserve the sonic pacing, spatial depth mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/frederic-briolet-monolith)
- Live site: https://fredericbriolet.github.io/
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

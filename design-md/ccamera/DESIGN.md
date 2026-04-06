# Design System Inspiration of ccamera

## 1. Visual Theme & Atmosphere

ccamera reads as experimental mobile-first composition. The live capture resolves to a dark-leaning system built around #000000, #606060, and accent notes from #fdfdfd. A photo app that doesn't allow new pictures to be taken. The website triggers your camera, you take a pic. Then, the website swaps it with a visually similar pro-existing photo from the web.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #000000, #606060, #fdfdfd, #141414
- Typography stack: system fallback
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #000000 - canvas / dominant background
- Color 2: #606060 - primary text or opposing surface
- Color 3: #fdfdfd - accent / interactive signal
- Color 4: #141414 - supporting surface or hover state
- Color 5: #343434 - supporting surface or hover state
- Color 6: #aaaaaa - supporting surface or hover state
- Color 7: #838383 - supporting surface or hover state
- Color 8: #d7d7d7 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: system UI

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height normal
- Button sample: 14px / weight 500

## 4. Component Stylings

### Web
- Buttons tend toward rgb(255, 255, 255) backgrounds with rgb(0, 0, 0) text.
- Links inherit #fdfdfd as the interaction signal.
- Border radius trends: 4px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps the primary stack in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#000000) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (photography) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 4px.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #000000, #606060, and #fdfdfd.
- Preserve the experimental posture signaled by the loadmo.re tags: photography.
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

> Build a responsive landing page inspired by ccamera. Keep the palette centered on #000000, #606060, and #fdfdfd. Use the extracted primary font for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/ccamera)
- Live site: https://ccamera.marco.land/
- Credits: Marco Land
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

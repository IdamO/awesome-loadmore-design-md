# Design System Inspiration of The Lost Lionesses

## 1. Visual Theme & Atmosphere

The Lost Lionesses reads as editorial fashion energy, sonic pacing, spatial depth. The live capture resolves to a dark-leaning system built around #a29f98, #272620, and accent notes from #67655a. Impressive experience that offers a dive within a 3D world, surrounded with voiceovers and films.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers M+1m, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #a29f98, #272620, #67655a, #614a35
- Typography stack: M+1m, Neue Haas Grotesk Display, Neue Haas Grotesk Text
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #a29f98 - canvas / dominant background
- Color 2: #272620 - primary text or opposing surface
- Color 3: #67655a - accent / interactive signal
- Color 4: #614a35 - supporting surface or hover state
- Color 5: #4f3526 - supporting surface or hover state
- Color 6: #8e7356 - supporting surface or hover state
- Color 7: #8e8772 - supporting surface or hover state
- Color 8: #996632 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: M+1m
- Secondary: Neue Haas Grotesk Display
- Support: Neue Haas Grotesk Text
- Support: mr-icons

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height 22.4px
- Button sample: 16px / weight 500

## 4. Component Stylings

### Web
- Buttons tend toward rgb(236, 47, 29) backgrounds with rgb(255, 255, 255) text.
- Links inherit #67655a as the interaction signal.
- Border radius trends: 8px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps M+1m in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#a29f98) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (sound-design, 3d-space, fashion) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 8px.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use M+1m consistently for headlines and interface labels.
- Keep the palette anchored to #a29f98, #272620, and #67655a.
- Preserve the experimental posture signaled by the loadmo.re tags: sound-design, 3d-space, fashion.
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

> Build a responsive landing page inspired by The Lost Lionesses. Keep the palette centered on #a29f98, #272620, and #67655a. Use M+1m for headlines, preserve the editorial fashion energy, sonic pacing, spatial depth mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/the-lost-lionesses)
- Live site: https://nike.martine-rose.com/
- Credits: International Magic
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

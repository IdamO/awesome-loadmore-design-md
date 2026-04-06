# Design System Inspiration of Collection of Holiday Experiences

## 1. Visual Theme & Atmosphere

Collection of Holiday Experiences reads as playful interaction. The live capture resolves to a dark-leaning system built around #989898, #eaeaea, and accent notes from #d4d4d5. Interactive experiences celebrating Xmas magic, eg. a baking cookies challenge or a decorating a tree drawing tool.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Roboto, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #989898, #eaeaea, #d4d4d5, #a7a7a7
- Typography stack: Roboto
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #989898 - canvas / dominant background
- Color 2: #eaeaea - primary text or opposing surface
- Color 3: #d4d4d5 - accent / interactive signal
- Color 4: #a7a7a7 - supporting surface or hover state
- Color 5: #adcceb - supporting surface or hover state
- Color 6: #7a7a7a - supporting surface or hover state
- Color 7: #84b9e8 - supporting surface or hover state
- Color 8: #6fb0e9 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Roboto

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 20px / weight 400 / line-height normal
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit #d4d4d5 as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Roboto in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#989898) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (playful, game, tactile) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Roboto consistently for headlines and interface labels.
- Keep the palette anchored to #989898, #eaeaea, and #d4d4d5.
- Preserve the experimental posture signaled by the loadmo.re tags: playful, game, tactile.
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

> Build a responsive landing page inspired by Collection of Holiday Experiences. Keep the palette centered on #989898, #eaeaea, and #d4d4d5. Use Roboto for headlines, preserve the playful interaction mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/collection-of-holiday-experiences)
- Live site: https://collectionofholidayexperiences.xyz/
- Credits: Rachel Yeeun Kim
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

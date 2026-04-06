# Design System Inspiration of Desktop FM

## 1. Visual Theme & Atmosphere

Desktop FM reads as playful interaction, sonic pacing. The live capture resolves to a light-leaning system built around #bdc2c4, #b3b4b4, and accent notes from #ceced0. Teaser site where users can interact with 3D visual of a desktop.fm CD to play dreamlike musical chords.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #bdc2c4, #b3b4b4, #ceced0, #a2d4b9
- Typography stack: system fallback
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #bdc2c4 - canvas / dominant background
- Color 2: #b3b4b4 - primary text or opposing surface
- Color 3: #ceced0 - accent / interactive signal
- Color 4: #a2d4b9 - supporting surface or hover state
- Color 5: #bbbdc1 - supporting surface or hover state
- Color 6: #2c2c2c - supporting surface or hover state
- Color 7: #606061 - supporting surface or hover state
- Color 8: #c1bec4 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: system UI

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 18px / weight 500 / line-height 22.5px
- Button sample: 18px / weight 500

## 4. Component Stylings

### Web
- Buttons tend toward rgb(221, 221, 221) backgrounds with rgb(45, 45, 45) text.
- Links inherit #ceced0 as the interaction signal.
- Border radius trends: 50%.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps the primary stack in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#bdc2c4) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (playful, sound-design) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 50%.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #bdc2c4, #b3b4b4, and #ceced0.
- Preserve the experimental posture signaled by the loadmo.re tags: playful, sound-design.
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

> Build a responsive landing page inspired by Desktop FM. Keep the palette centered on #bdc2c4, #b3b4b4, and #ceced0. Use the extracted primary font for headlines, preserve the playful interaction, sonic pacing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/desktop-fm)
- Live site: http://desktop.fm/
- Credits: Xavier (Jack)
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

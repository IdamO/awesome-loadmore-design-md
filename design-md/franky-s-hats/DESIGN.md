# Design System Inspiration of Franky's Hats

## 1. Visual Theme & Atmosphere

Franky's Hats reads as editorial fashion energy, retro-computing cues. The live capture resolves to a dark-leaning system built around #272120, #d9c3bb, and accent notes from #d6c4c2. A stylish e-commerce site blending modern-retro design with textured visuals and an AR try-on feature.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Arcade, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #272120, #d9c3bb, #d6c4c2, #cab5b0
- Typography stack: Arcade, Arnold Boecklin
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #272120 - canvas / dominant background
- Color 2: #d9c3bb - primary text or opposing surface
- Color 3: #d6c4c2 - accent / interactive signal
- Color 4: #cab5b0 - supporting surface or hover state
- Color 5: #b09f99 - supporting surface or hover state
- Color 6: #615453 - supporting surface or hover state
- Color 7: #b56a17 - supporting surface or hover state
- Color 8: #45362f - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Arcade
- Secondary: Arnold Boecklin

### Hierarchy Snapshot
- Heading sample: 14px / weight 700 / letter-spacing normal
- Body sample: 14px / weight 400 / line-height 20px
- Button sample: 10px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(0, 0, 0) text.
- Links inherit #d6c4c2 as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Arcade in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#272120) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (colorful, retro, fashion) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 6px.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Arcade consistently for headlines and interface labels.
- Keep the palette anchored to #272120, #d9c3bb, and #d6c4c2.
- Preserve the experimental posture signaled by the loadmo.re tags: colorful, retro, fashion.
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

> Build a responsive landing page inspired by Franky's Hats. Keep the palette centered on #272120, #d9c3bb, and #d6c4c2. Use Arcade for headlines, preserve the editorial fashion energy, retro-computing cues mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/franky-s-hats)
- Live site: https://www.frankys-hats.com/
- Credits: Huig van der Waal
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

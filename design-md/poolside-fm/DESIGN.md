# Design System Inspiration of PoolSide FM

## 1. Visual Theme & Atmosphere

PoolSide FM reads as sonic pacing, retro-computing cues. The live capture resolves to a light-leaning system built around #f3d2d1, #cebcb9, and accent notes from #aba8a2. Travel trough this happy place with nostalgic graphics and retro sounds.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Pixolde, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f3d2d1, #cebcb9, #aba8a2, #cfc0bd
- Typography stack: Pixolde, Perfect DOS VGA 437, Pixelated Times New Roman
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #f3d2d1 - canvas / dominant background
- Color 2: #cebcb9 - primary text or opposing surface
- Color 3: #aba8a2 - accent / interactive signal
- Color 4: #cfc0bd - supporting surface or hover state
- Color 5: #0b0b0c - supporting surface or hover state
- Color 6: #a2cdaa - supporting surface or hover state
- Color 7: #696664 - supporting surface or hover state
- Color 8: #a08f79 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Pixolde
- Secondary: Perfect DOS VGA 437
- Support: Pixelated Times New Roman
- Support: ITC Garamond
- Support: ITC Garamond Std
- Support: ChiKareGo2

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height 24px
- Button sample: 16px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgb(0, 0, 0) backgrounds with rgb(0, 0, 0) text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Pixolde in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f3d2d1) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (music, retro, default-aesthetics) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 0px 0px 4px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Pixolde consistently for headlines and interface labels.
- Keep the palette anchored to #f3d2d1, #cebcb9, and #aba8a2.
- Preserve the experimental posture signaled by the loadmo.re tags: music, retro, default-aesthetics.
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

> Build a responsive landing page inspired by PoolSide FM. Keep the palette centered on #f3d2d1, #cebcb9, and #aba8a2. Use Pixolde for headlines, preserve the sonic pacing, retro-computing cues mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/poolside-fm)
- Live site: https://poolside.fm
- Credits: Niek Dekker, Aziz Firat, Pascal Pixel
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

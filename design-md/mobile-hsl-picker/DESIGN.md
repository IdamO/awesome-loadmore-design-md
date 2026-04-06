# Design System Inspiration of Mobile HSL Picker

## 1. Visual Theme & Atmosphere

Mobile HSL Picker reads as restrained minimalism, playful interaction. The live capture resolves to a light-leaning system built around #fefefe, #d9d9d9, and accent notes from #e6e6e6. Color Picker with gyroscope sensors

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Space Mono, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fefefe, #d9d9d9, #e6e6e6, #a6a6a6
- Typography stack: Space Mono
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #fefefe - canvas / dominant background
- Color 2: #d9d9d9 - primary text or opposing surface
- Color 3: #e6e6e6 - accent / interactive signal
- Color 4: #a6a6a6 - supporting surface or hover state
- Color 5: #b9b9b9 - supporting surface or hover state
- Color 6: #c6c6c6 - supporting surface or hover state
- Color 7: #969696 - supporting surface or hover state
- Color 8: #898989 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Space Mono

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height normal
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit #e6e6e6 as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Space Mono in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fefefe) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (minimal, colorful, playful) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: 8px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Space Mono consistently for headlines and interface labels.
- Keep the palette anchored to #fefefe, #d9d9d9, and #e6e6e6.
- Preserve the experimental posture signaled by the loadmo.re tags: minimal, colorful, playful.
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

> Build a responsive landing page inspired by Mobile HSL Picker. Keep the palette centered on #fefefe, #d9d9d9, and #e6e6e6. Use Space Mono for headlines, preserve the restrained minimalism, playful interaction mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/mobile-hsl-picker)
- Live site: https://mobile-hsl-picker.ferdinands.org
- Credits: Ferdinand Sorg
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

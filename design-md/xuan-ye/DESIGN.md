# Design System Inspiration of Xuan Ye

## 1. Visual Theme & Atmosphere

Xuan Ye reads as spatial depth. The live capture resolves to a dark-leaning system built around #655574, #381e58, and accent notes from #959298. Interactive 3D word cloud reacting when touched. Play with it: move around it or drag its intertwined elements.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers instrumentSans, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #655574, #381e58, #959298, #4a3262
- Typography stack: instrumentSans, instrumentSans Fallback
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #655574 - canvas / dominant background
- Color 2: #381e58 - primary text or opposing surface
- Color 3: #959298 - accent / interactive signal
- Color 4: #4a3262 - supporting surface or hover state
- Color 5: #786e83 - supporting surface or hover state
- Color 6: #83798b - supporting surface or hover state
- Color 7: #c6c5c6 - supporting surface or hover state
- Color 8: #bebac1 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: instrumentSans
- Secondary: instrumentSans Fallback

### Hierarchy Snapshot
- Heading sample: 24px / weight 400 / letter-spacing normal
- Body sample: 24px / weight 400 / line-height 32px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(60, 10, 67) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps instrumentSans in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#655574) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (tactile, portfolio, 3d-space) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use instrumentSans consistently for headlines and interface labels.
- Keep the palette anchored to #655574, #381e58, and #959298.
- Preserve the experimental posture signaled by the loadmo.re tags: tactile, portfolio, 3d-space.
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

> Build a responsive landing page inspired by Xuan Ye. Keep the palette centered on #655574, #381e58, and #959298. Use instrumentSans for headlines, preserve the spatial depth mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/xuan-ye)
- Live site: https://a.pureapparat.us/
- Credits: Xuan Ye 叶轩
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

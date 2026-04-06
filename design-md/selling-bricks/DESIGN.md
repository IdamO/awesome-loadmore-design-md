# Design System Inspiration of Selling Bricks

## 1. Visual Theme & Atmosphere

Selling Bricks reads as experimental mobile-first composition. The live capture resolves to a dark-leaning system built around #010204, #206698, and accent notes from #dad4e0. Drag textured video snippets across your screen to explore an evolving architectural research project.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Bricks, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #010204, #206698, #dad4e0, #0a3152
- Typography stack: Bricks, FontAwesome, Font Awesome 5 Brands
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #010204 - canvas / dominant background
- Color 2: #206698 - primary text or opposing surface
- Color 3: #dad4e0 - accent / interactive signal
- Color 4: #0a3152 - supporting surface or hover state
- Color 5: #5fa4d4 - supporting surface or hover state
- Color 6: #184a6e - supporting surface or hover state
- Color 7: #a79e93 - supporting surface or hover state
- Color 8: #9ecff1 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Bricks
- Secondary: FontAwesome
- Support: Font Awesome 5 Brands
- Support: Font Awesome 5 Free
- Support: Font Awesome 5 Pro

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height 16px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(255, 255, 255) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Bricks in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#010204) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (tactile, photography, educational) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Bricks consistently for headlines and interface labels.
- Keep the palette anchored to #010204, #206698, and #dad4e0.
- Preserve the experimental posture signaled by the loadmo.re tags: tactile, photography, educational.
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

> Build a responsive landing page inspired by Selling Bricks. Keep the palette centered on #010204, #206698, and #dad4e0. Use Bricks for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/selling-bricks)
- Live site: https://sellingbricks.bartlebooth.org/
- Credits: Aurora Saseta
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

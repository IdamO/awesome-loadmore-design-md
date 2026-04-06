# Design System Inspiration of oneiric

## 1. Visual Theme & Atmosphere

oneiric reads as spatial depth. The live capture resolves to a dark-leaning system built around #111010, #5f5e5b, and accent notes from #5e5428. Interact with a 3D cube to browse the magazine's categories.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #111010, #5f5e5b, #5e5428, #d4d3d2
- Typography stack: system fallback
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #111010 - canvas / dominant background
- Color 2: #5f5e5b - primary text or opposing surface
- Color 3: #5e5428 - accent / interactive signal
- Color 4: #d4d3d2 - supporting surface or hover state
- Color 5: #9e9a96 - supporting surface or hover state
- Color 6: #14516d - supporting surface or hover state
- Color 7: #13688b - supporting surface or hover state
- Color 8: #5e8daf - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: system UI

### Hierarchy Snapshot
- Heading sample: 25.92px / weight 400 / letter-spacing normal
- Body sample: 14.4px / weight 400 / line-height 16.56px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(255, 255, 255) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps the primary stack in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#111010) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (3d-space, online-magazine) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #111010, #5f5e5b, and #5e5428.
- Preserve the experimental posture signaled by the loadmo.re tags: 3d-space, online-magazine.
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

> Build a responsive landing page inspired by oneiric. Keep the palette centered on #111010, #5f5e5b, and #5e5428. Use the extracted primary font for headlines, preserve the spatial depth mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/oneiric)
- Live site: https://oneiric.space/
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

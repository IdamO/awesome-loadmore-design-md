# Design System Inspiration of Diffusion Cam

## 1. Visual Theme & Atmosphere

Diffusion Cam reads as experimental mobile-first composition. The live capture resolves to a light-leaning system built around #d7e0c1, #cdd7b8, and accent notes from #a9b493. diffusion.cam, the first artificial social network where real humans share synthetic media. Use the camera to transform your photograph into text, which gets turned back into an image using an AI diffusion model.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Kode Mono, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #d7e0c1, #cdd7b8, #a9b493, #cad4b6
- Typography stack: Kode Mono, Bytesized
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #d7e0c1 - canvas / dominant background
- Color 2: #cdd7b8 - primary text or opposing surface
- Color 3: #a9b493 - accent / interactive signal
- Color 4: #cad4b6 - supporting surface or hover state
- Color 5: #bac4a6 - supporting surface or hover state
- Color 6: #d7dfc4 - supporting surface or hover state
- Color 7: #929e79 - supporting surface or hover state
- Color 8: #7f8b67 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Kode Mono
- Secondary: Bytesized

### Hierarchy Snapshot
- Heading sample: 20px / weight 500 / letter-spacing -0.5px
- Body sample: 18px / weight 400 / line-height 29.25px
- Button sample: 16px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(58, 74, 32) text.
- Links inherit rgb(58, 74, 32) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Kode Mono in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#d7e0c1) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (ai&generative, photography, participative) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Kode Mono consistently for headlines and interface labels.
- Keep the palette anchored to #d7e0c1, #cdd7b8, and #a9b493.
- Preserve the experimental posture signaled by the loadmo.re tags: ai&generative, photography, participative.
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

> Build a responsive landing page inspired by Diffusion Cam. Keep the palette centered on #d7e0c1, #cdd7b8, and #a9b493. Use Kode Mono for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/diffusion-cam)
- Live site: https://www.diffusion.cam/
- Credits: Matthias Pitscher
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

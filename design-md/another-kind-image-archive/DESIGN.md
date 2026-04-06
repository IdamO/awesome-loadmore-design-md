# Design System Inspiration of Another Kind Image Archive

## 1. Visual Theme & Atmosphere

Another Kind Image Archive reads as spatial depth. The live capture resolves to a dark-leaning system built around #211f1c, #625e55, and accent notes from #9d9891. Navigate through a vortex of archive images and videos.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Mediaeval, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #211f1c, #625e55, #9d9891, #4f4735
- Typography stack: Mediaeval, swiper-icons
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #211f1c - canvas / dominant background
- Color 2: #625e55 - primary text or opposing surface
- Color 3: #9d9891 - accent / interactive signal
- Color 4: #4f4735 - supporting surface or hover state
- Color 5: #86827c - supporting surface or hover state
- Color 6: #433c2a - supporting surface or hover state
- Color 7: #d7cfcc - supporting surface or hover state
- Color 8: #827c75 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Mediaeval
- Secondary: swiper-icons

### Hierarchy Snapshot
- Heading sample: 16px / weight 400 / letter-spacing normal
- Body sample: 16px / weight 400 / line-height 20px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit #9d9891 as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Mediaeval in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#211f1c) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio, 3d-space, photography) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Mediaeval consistently for headlines and interface labels.
- Keep the palette anchored to #211f1c, #625e55, and #9d9891.
- Preserve the experimental posture signaled by the loadmo.re tags: portfolio, 3d-space, photography.
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

> Build a responsive landing page inspired by Another Kind Image Archive. Keep the palette centered on #211f1c, #625e55, and #9d9891. Use Mediaeval for headlines, preserve the spatial depth mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/another-kind-image-archive)
- Live site: https://anotherkind.world/
- Credits: João Drumond, James Chester, Luís Ferreira
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

# Design System Inspiration of Taika x TWB

## 1. Visual Theme & Atmosphere

Taika x TWB reads as spatial depth. The live capture resolves to a light-leaning system built around #f8f8f8, #0a0a0a, and accent notes from #a5a4a3. A 3D product as an interface. Instead of reading a block of HTML text, just move around the 3D can to learn more about what this drink is about. Clever.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Azeret Mono, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f8f8f8, #0a0a0a, #a5a4a3, #5d5b58
- Typography stack: Azeret Mono
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #f8f8f8 - canvas / dominant background
- Color 2: #0a0a0a - primary text or opposing surface
- Color 3: #a5a4a3 - accent / interactive signal
- Color 4: #5d5b58 - supporting surface or hover state
- Color 5: #e23b36 - supporting surface or hover state
- Color 6: #c2c1be - supporting surface or hover state
- Color 7: #d8b5b2 - supporting surface or hover state
- Color 8: #dd615f - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Azeret Mono

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height 24px
- Button sample: 16px / weight 300

## 4. Component Stylings

### Web
- Buttons tend toward rgb(0, 0, 0) backgrounds with rgb(255, 255, 255) text.
- Links inherit #a5a4a3 as the interaction signal.
- Border radius trends: 4.8px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Azeret Mono in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f8f8f8) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (3d-space, tactile, e-commerce) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 4.8px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Azeret Mono consistently for headlines and interface labels.
- Keep the palette anchored to #f8f8f8, #0a0a0a, and #a5a4a3.
- Preserve the experimental posture signaled by the loadmo.re tags: 3d-space, tactile, e-commerce.
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

> Build a responsive landing page inspired by Taika x TWB. Keep the palette centered on #f8f8f8, #0a0a0a, and #a5a4a3. Use Azeret Mono for headlines, preserve the spatial depth mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/taika-x-twb)
- Live site: https://mate.taika.co/
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

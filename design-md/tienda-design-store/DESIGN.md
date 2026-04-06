# Design System Inspiration of Tienda - Design Store

## 1. Visual Theme & Atmosphere

Tienda - Design Store reads as editorial fashion energy. The live capture resolves to a dark-leaning system built around #161617, #605955, and accent notes from #4f3337. Rounded glowy buttons, colorful gradients and cute pictograms. A marketplace designed with a smart and playful mobile-friendly interface.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #161617, #605955, #4f3337, #8e6757
- Typography stack: system fallback
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #161617 - canvas / dominant background
- Color 2: #605955 - primary text or opposing surface
- Color 3: #4f3337 - accent / interactive signal
- Color 4: #8e6757 - supporting surface or hover state
- Color 5: #989493 - supporting surface or hover state
- Color 6: #3a433a - supporting surface or hover state
- Color 7: #453a43 - supporting surface or hover state
- Color 8: #e2ddd1 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: system UI

### Hierarchy Snapshot
- Heading sample: 12px / weight 400 / letter-spacing 0.24px
- Body sample: 12px / weight 400 / line-height 16.32px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit oklch(0.918 0.093533 172.6) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps the primary stack in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#161617) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (e-commerce, fashion, colorful) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #161617, #605955, and #4f3337.
- Preserve the experimental posture signaled by the loadmo.re tags: e-commerce, fashion, colorful.
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

> Build a responsive landing page inspired by Tienda - Design Store. Keep the palette centered on #161617, #605955, and #4f3337. Use the extracted primary font for headlines, preserve the editorial fashion energy mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/tienda-design-store)
- Live site: https://tienda.nyc/
- Credits: Sight
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

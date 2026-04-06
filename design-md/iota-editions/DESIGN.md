# Design System Inspiration of Iota Editions

## 1. Visual Theme & Atmosphere

Iota Editions reads as experimental mobile-first composition. The live capture resolves to a light-leaning system built around #ffffff, #000000, and accent notes from #7c3aed. Simple website with a fun navigation: to open a category, instead of a basic tap, you'll need to drag from one corner to another. It somehow provides a materiality sensation.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Sentinel Light, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #ffffff, #000000
- Typography stack: Sentinel Light, Work Sans
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #ffffff - canvas / dominant background
- Color 2: #000000 - primary text or opposing surface

## 3. Typography Rules

### Font Families
- Primary: Sentinel Light
- Secondary: Work Sans

### Hierarchy Snapshot
- Heading sample: 250px / weight 400 / letter-spacing normal
- Body sample: 50px / weight 400 / line-height 55px
- Button sample: 45px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(0, 0, 0) text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Sentinel Light in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#ffffff) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio, animation) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 50%.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Sentinel Light consistently for headlines and interface labels.
- Keep the palette anchored to #ffffff, #000000, and #7c3aed.
- Preserve the experimental posture signaled by the loadmo.re tags: portfolio, animation.
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

> Build a responsive landing page inspired by Iota Editions. Keep the palette centered on #ffffff, #000000, and #7c3aed. Use Sentinel Light for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/iota-editions)
- Live site: https://iota-editions.com
- Credits: Self Aware
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

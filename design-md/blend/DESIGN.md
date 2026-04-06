# Design System Inspiration of Blend

## 1. Visual Theme & Atmosphere

Blend reads as experimental mobile-first composition. The live capture resolves to a dark-leaning system built around #000000, #161616, and accent notes from #232323. Mesmerizing experiment by No Plans, which lets you create colored bubbles that blend together.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #000000, #161616, #232323, #585858
- Typography stack: system fallback
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #000000 - canvas / dominant background
- Color 2: #161616 - primary text or opposing surface
- Color 3: #232323 - accent / interactive signal
- Color 4: #585858 - supporting surface or hover state
- Color 5: #3a3a3a - supporting surface or hover state
- Color 6: #464646 - supporting surface or hover state
- Color 7: #696969 - supporting surface or hover state
- Color 8: #ffffff - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: system UI

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 19.6px / weight 400 / line-height normal
- Button sample: 19.6px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgb(255, 255, 255) backgrounds with rgba(0, 0, 0, 0) text.
- Links inherit #232323 as the interaction signal.
- Border radius trends: 39.2px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps the primary stack in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#000000) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (tactile, colorful, net.art) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 39.2px.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #000000, #161616, and #232323.
- Preserve the experimental posture signaled by the loadmo.re tags: tactile, colorful, net.art.
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

> Build a responsive landing page inspired by Blend. Keep the palette centered on #000000, #161616, and #232323. Use the extracted primary font for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/blend)
- Live site: https://office.no-plans.com/play/blend/
- Credits: No Plans
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

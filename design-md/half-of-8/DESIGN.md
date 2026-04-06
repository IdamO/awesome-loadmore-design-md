# Design System Inspiration of Half of 8

## 1. Visual Theme & Atmosphere

Half of 8 reads as experimental mobile-first composition. The live capture resolves to a dark-leaning system built around #050505, #5b5b5b, and accent notes from #ececec. Website for collective half of 8. Features an infinite grid for exploring chapters of the ‘Half of Journal’ zine, a music player, and even a narrative expedition of Mt. Fuji!

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers __interDisplay_d57320, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #050505, #5b5b5b, #ececec, #999898
- Typography stack: __interDisplay_d57320, __interDisplay_Fallback_d57320, __Noto_Sans_JP_d848ea
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #050505 - canvas / dominant background
- Color 2: #5b5b5b - primary text or opposing surface
- Color 3: #ececec - accent / interactive signal
- Color 4: #999898 - supporting surface or hover state
- Color 5: #551916 - supporting surface or hover state
- Color 6: #f84428 - supporting surface or hover state
- Color 7: #e89697 - supporting surface or hover state
- Color 8: #a22c21 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: __interDisplay_d57320
- Secondary: __interDisplay_Fallback_d57320
- Support: __Noto_Sans_JP_d848ea
- Support: __Noto_Sans_JP_Fallback_d848ea
- Support: __Dela_Gothic_One_e0f1bd
- Support: __Dela_Gothic_One_Fallback_e0f1bd

### Hierarchy Snapshot
- Heading sample: 12px / weight 500 / letter-spacing 1.2px
- Body sample: 46px / weight 500 / line-height 49.68px
- Button sample: 16px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(53, 53, 53, 0.4) backgrounds with rgb(255, 255, 255) text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 4px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps __interDisplay_d57320 in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#050505) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio, online-magazine, graphic-design) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: 2px.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use __interDisplay_d57320 consistently for headlines and interface labels.
- Keep the palette anchored to #050505, #5b5b5b, and #ececec.
- Preserve the experimental posture signaled by the loadmo.re tags: portfolio, online-magazine, graphic-design.
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

> Build a responsive landing page inspired by Half of 8. Keep the palette centered on #050505, #5b5b5b, and #ececec. Use __interDisplay_d57320 for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/half-of-8)
- Live site: https://halfof8.com/
- Credits: Half of 8
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

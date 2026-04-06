# Design System Inspiration of Virgil Abloh™

## 1. Visual Theme & Atmosphere

Virgil Abloh™ reads as editorial fashion energy. The live capture resolves to a light-leaning system built around #efefef, #21211f, and accent notes from #a7a6a4. So this is Virgil Abloh's website and I hate saying this (!!!) but it looks great. Voilà.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Simon Mono, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #efefef, #21211f, #a7a6a4, #5e5e5d
- Typography stack: Simon Mono, GTStandard-M
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #efefef - canvas / dominant background
- Color 2: #21211f - primary text or opposing surface
- Color 3: #a7a6a4 - accent / interactive signal
- Color 4: #5e5e5d - supporting surface or hover state
- Color 5: #b7c6cd - supporting surface or hover state
- Color 6: #ccc6bb - supporting surface or hover state
- Color 7: #c4bab4 - supporting surface or hover state
- Color 8: #b0bcc3 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Simon Mono
- Secondary: GTStandard-M

### Hierarchy Snapshot
- Heading sample: 18px / weight 700 / letter-spacing -0.36px
- Body sample: 16px / weight 700 / line-height 24px
- Button sample: 12px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(30, 30, 28) text.
- Links inherit rgb(255, 255, 255) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Simon Mono in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#efefef) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio, fashion) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 4px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Simon Mono consistently for headlines and interface labels.
- Keep the palette anchored to #efefef, #21211f, and #a7a6a4.
- Preserve the experimental posture signaled by the loadmo.re tags: portfolio, fashion.
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

> Build a responsive landing page inspired by Virgil Abloh™. Keep the palette centered on #efefef, #21211f, and #a7a6a4. Use Simon Mono for headlines, preserve the editorial fashion energy mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/virgil-abloh)
- Live site: https://www.canary---yellow.com
- Credits: Studio TEMP
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

# Design System Inspiration of Headline Vision

## 1. Visual Theme & Atmosphere

Headline Vision reads as experimental mobile-first composition. The live capture resolves to a dark-leaning system built around #606461, #1b1b1d, and accent notes from #9c9e95. Latest news headlines as seen through a generative image AI, with nice glitched transitions.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Dia Regular, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #606461, #1b1b1d, #9c9e95, #9b8f6c
- Typography stack: Dia Regular
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #606461 - canvas / dominant background
- Color 2: #1b1b1d - primary text or opposing surface
- Color 3: #9c9e95 - accent / interactive signal
- Color 4: #9b8f6c - supporting surface or hover state
- Color 5: #937259 - supporting surface or hover state
- Color 6: #5b5433 - supporting surface or hover state
- Color 7: #78858d - supporting surface or hover state
- Color 8: #36495a - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Dia Regular

### Hierarchy Snapshot
- Heading sample: 46.8288px / weight 400 / letter-spacing -1.63901px
- Body sample: 18px / weight 400 / line-height 24px
- Button sample: 18px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(255, 255, 255) text.
- Links inherit rgb(255, 255, 255) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Dia Regular in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#606461) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (glitches, photography) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Dia Regular consistently for headlines and interface labels.
- Keep the palette anchored to #606461, #1b1b1d, and #9c9e95.
- Preserve the experimental posture signaled by the loadmo.re tags: glitches, photography.
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

> Build a responsive landing page inspired by Headline Vision. Keep the palette centered on #606461, #1b1b1d, and #9c9e95. Use Dia Regular for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/headline-vision)
- Live site: https://headline.vision/2021_12_01_B
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

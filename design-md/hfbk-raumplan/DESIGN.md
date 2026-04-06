# Design System Inspiration of HFBK Raumplan

## 1. Visual Theme & Atmosphere

HFBK Raumplan reads as type-led composition. The live capture resolves to a dark-leaning system built around #000000, #f4f6f7, and accent notes from #a0a0a0. Fun website presenting the Design course of University of Fine Arts of Hamburg.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers timesnewarial, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #000000, #f4f6f7, #a0a0a0, #a4dbf3
- Typography stack: timesnewarial, arialrounded
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #000000 - canvas / dominant background
- Color 2: #f4f6f7 - primary text or opposing surface
- Color 3: #a0a0a0 - accent / interactive signal
- Color 4: #a4dbf3 - supporting surface or hover state
- Color 5: #93a1df - supporting surface or hover state
- Color 6: #6e6e6e - supporting surface or hover state
- Color 7: #75bebd - supporting surface or hover state
- Color 8: #6c9feb - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: timesnewarial
- Secondary: arialrounded

### Hierarchy Snapshot
- Heading sample: 40px / weight 400 / letter-spacing -0.8px
- Body sample: 16px / weight 400 / line-height normal
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps timesnewarial in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#000000) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (typography, educational, colorful) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: 8px.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use timesnewarial consistently for headlines and interface labels.
- Keep the palette anchored to #000000, #f4f6f7, and #a0a0a0.
- Preserve the experimental posture signaled by the loadmo.re tags: typography, educational, colorful.
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

> Build a responsive landing page inspired by HFBK Raumplan. Keep the palette centered on #000000, #f4f6f7, and #a0a0a0. Use timesnewarial for headlines, preserve the type-led composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/hfbk-raumplan)
- Live site: https://raumplan.hfbk.net/de
- Credits: Liebermann Kiepe Reddemann
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

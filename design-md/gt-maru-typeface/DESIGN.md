# Design System Inspiration of GT Maru Typeface

## 1. Visual Theme & Atmosphere

GT Maru Typeface reads as type-led composition. The live capture resolves to a dark-leaning system built around #0067fe, #fcdede, and accent notes from #f4f453. Very cute website introducing GT Maru font's background and history through animated illustration triggered on scroll.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers GT Maru, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #0067fe, #fcdede, #f4f453, #57678d
- Typography stack: GT Maru, GT Maru Mono, GT Maru Mega
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #0067fe - canvas / dominant background
- Color 2: #fcdede - primary text or opposing surface
- Color 3: #f4f453 - accent / interactive signal
- Color 4: #57678d - supporting surface or hover state
- Color 5: #0a0b0f - supporting surface or hover state
- Color 6: #1c52a7 - supporting surface or hover state
- Color 7: #a69a9f - supporting surface or hover state
- Color 8: #aaac4e - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: GT Maru
- Secondary: GT Maru Mono
- Support: GT Maru Mega
- Support: GT Maru Emoji
- Support: GT Maru Emoji BW

### Hierarchy Snapshot
- Heading sample: 187.2px / weight 400 / letter-spacing -5.616px
- Body sample: 187.2px / weight 400 / line-height 187.2px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps GT Maru in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#0067fe) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (typography, colorful, animation) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: 10px.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use GT Maru consistently for headlines and interface labels.
- Keep the palette anchored to #0067fe, #fcdede, and #f4f453.
- Preserve the experimental posture signaled by the loadmo.re tags: typography, colorful, animation.
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

> Build a responsive landing page inspired by GT Maru Typeface. Keep the palette centered on #0067fe, #fcdede, and #f4f453. Use GT Maru for headlines, preserve the type-led composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/gt-maru-typeface)
- Live site: https://gt-maru.com/
- Credits: Grilli Type, Josh Schaub, Sensor Station
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

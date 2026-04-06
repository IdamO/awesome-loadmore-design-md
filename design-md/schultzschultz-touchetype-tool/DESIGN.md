# Design System Inspiration of Schultzschultz - ToucheType Tool

## 1. Visual Theme & Atmosphere

Schultzschultz - ToucheType Tool reads as type-led composition. The live capture resolves to a light-leaning system built around #fefefe, #e7e7e7, and accent notes from #d8d8d8. Multi-touch interface for digital hand-lettering.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers FontAwesome, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fefefe, #e7e7e7, #d8d8d8, #b8b8b8
- Typography stack: FontAwesome, strokeWeight VAR, raty
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #fefefe - canvas / dominant background
- Color 2: #e7e7e7 - primary text or opposing surface
- Color 3: #d8d8d8 - accent / interactive signal
- Color 4: #b8b8b8 - supporting surface or hover state
- Color 5: #ababab - supporting surface or hover state
- Color 6: #c8c8c8 - supporting surface or hover state
- Color 7: #939393 - supporting surface or hover state
- Color 8: #717171 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: FontAwesome
- Secondary: strokeWeight VAR
- Support: raty
- Support: Ionicons
- Support: Font Awesome 6 Brands
- Support: Font Awesome 6 Free

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 26px / weight 100 / line-height 34px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(136, 136, 136) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps FontAwesome in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fefefe) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (typography, tactile, participative) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: 50px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use FontAwesome consistently for headlines and interface labels.
- Keep the palette anchored to #fefefe, #e7e7e7, and #d8d8d8.
- Preserve the experimental posture signaled by the loadmo.re tags: typography, tactile, participative.
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

> Build a responsive landing page inspired by Schultzschultz - ToucheType Tool. Keep the palette centered on #fefefe, #e7e7e7, and #d8d8d8. Use FontAwesome for headlines, preserve the type-led composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/schultzschultz-touchetype-tool)
- Live site: https://schultzschultz.com/touchtype
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

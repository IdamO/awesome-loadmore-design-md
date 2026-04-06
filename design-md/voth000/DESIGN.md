# Design System Inspiration of Voth000

## 1. Visual Theme & Atmosphere

Voth000 reads as experimental mobile-first composition. The live capture resolves to a light-leaning system built around #f4fcfe, #09a7fc, and accent notes from #b8e3fc. Visually express your unique burnout journey by sharing thoughts and customising your avatar’s colours and graphic elements.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f4fcfe, #09a7fc, #b8e3fc, #62c5f3
- Typography stack: system fallback
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #f4fcfe - canvas / dominant background
- Color 2: #09a7fc - primary text or opposing surface
- Color 3: #b8e3fc - accent / interactive signal
- Color 4: #62c5f3 - supporting surface or hover state
- Color 5: #4bbcf3 - supporting surface or hover state
- Color 6: #f0fda3 - supporting surface or hover state
- Color 7: #fc9ef5 - supporting surface or hover state
- Color 8: #fba2a2 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: system UI

### Hierarchy Snapshot
- Heading sample: 19.5px / weight 700 / letter-spacing normal
- Body sample: 13px / weight 400 / line-height 20px
- Button sample: 13px / weight 500

## 4. Component Stylings

### Web
- Buttons tend toward rgb(255, 255, 255) backgrounds with rgb(0, 0, 0) text.
- Links inherit #b8e3fc as the interaction signal.
- Border radius trends: 2px.
- Shadow language: rgba(38, 165, 255, 0.196) 2px 2px 1px 0px.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps the primary stack in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f4fcfe) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (tactile) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: rgba(38, 165, 255, 0.196) 2px 2px 1px 0px.
- Radius cue: 2px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #f4fcfe, #09a7fc, and #b8e3fc.
- Preserve the experimental posture signaled by the loadmo.re tags: tactile.
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

> Build a responsive landing page inspired by Voth000. Keep the palette centered on #f4fcfe, #09a7fc, and #b8e3fc. Use the extracted primary font for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/voth000)
- Live site: https://voth000.github.io/bhn/
- Credits: Voth000
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

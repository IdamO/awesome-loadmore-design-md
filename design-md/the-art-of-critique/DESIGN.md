# Design System Inspiration of The Art of Critique

## 1. Visual Theme & Atmosphere

The Art of Critique reads as type-led composition, exhibition-like framing. The live capture resolves to a light-leaning system built around #f8f8f8, #0d0d0c, and accent notes from #5e5e5e. Single page that works as an interactive poster for this online exhibition. Including comprehensive program and details about the event.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers HarmoniaSansMono-Regular, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f8f8f8, #0d0d0c, #5e5e5e, #a2a2a2
- Typography stack: HarmoniaSansMono-Regular, HarmoniaSansMonoStd-Italic, Bureau Grot Cond Lt
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #f8f8f8 - canvas / dominant background
- Color 2: #0d0d0c - primary text or opposing surface
- Color 3: #5e5e5e - accent / interactive signal
- Color 4: #a2a2a2 - supporting surface or hover state
- Color 5: #f5f50c - supporting surface or hover state
- Color 6: #656519 - supporting surface or hover state
- Color 7: #d3d36a - supporting surface or hover state
- Color 8: #a8a824 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: HarmoniaSansMono-Regular
- Secondary: HarmoniaSansMonoStd-Italic
- Support: Bureau Grot Cond Lt

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 10.5px / weight 400 / line-height 12.6px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps HarmoniaSansMono-Regular in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f8f8f8) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (arts&culture, typography, digital-exhibition) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use HarmoniaSansMono-Regular consistently for headlines and interface labels.
- Keep the palette anchored to #f8f8f8, #0d0d0c, and #5e5e5e.
- Preserve the experimental posture signaled by the loadmo.re tags: arts&culture, typography, digital-exhibition.
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

> Build a responsive landing page inspired by The Art of Critique. Keep the palette centered on #f8f8f8, #0d0d0c, and #5e5e5e. Use HarmoniaSansMono-Regular for headlines, preserve the type-led composition, exhibition-like framing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/the-art-of-critique)
- Live site: https://theartofcritique.rietveldacademie.nl/
- Credits: Quentin Creuzet, Giulia Bierens de Haan
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

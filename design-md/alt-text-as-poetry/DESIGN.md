# Design System Inspiration of Alt Text as Poetry

## 1. Visual Theme & Atmosphere

Alt Text as Poetry reads as exhibition-like framing. The live capture resolves to a dark-leaning system built around #240068, #6c5495, and accent notes from #e4e3e7. Nice website for a project which invites exploring alt-text in a poetic way. Love the simplicity of the interface.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #240068, #6c5495, #e4e3e7, #512c84
- Typography stack: system fallback
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #240068 - canvas / dominant background
- Color 2: #6c5495 - primary text or opposing surface
- Color 3: #e4e3e7 - accent / interactive signal
- Color 4: #512c84 - supporting surface or hover state
- Color 5: #9c8eb3 - supporting surface or hover state
- Color 6: #51276a - supporting surface or hover state
- Color 7: #fa01fb - supporting surface or hover state
- Color 8: #03f9fb - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: system UI

### Hierarchy Snapshot
- Heading sample: 112px / weight 400 / letter-spacing normal
- Body sample: 35.2px / weight 400 / line-height 49.28px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(38, 0, 105) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps the primary stack in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#240068) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (arts&culture) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: 39.6px.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #240068, #6c5495, and #e4e3e7.
- Preserve the experimental posture signaled by the loadmo.re tags: arts&culture.
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

> Build a responsive landing page inspired by Alt Text as Poetry. Keep the palette centered on #240068, #6c5495, and #e4e3e7. Use the extracted primary font for headlines, preserve the exhibition-like framing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/alt-text-as-poetry)
- Live site: https://alt-text-as-poetry.net/
- Credits: Bojana Coklyat Finnegan Shannon Laurel Schwulst Taichi Wi
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

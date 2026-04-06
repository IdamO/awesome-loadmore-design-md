# Design System Inspiration of It's a Book

## 1. Visual Theme & Atmosphere

It's a Book reads as exhibition-like framing. The live capture resolves to a light-leaning system built around #f7f8f8, #a6a6a6, and accent notes from #95b6fa. An abstract interpretation of a bookshelf as an interactive grid.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Neue Haas, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f7f8f8, #a6a6a6, #95b6fa, #141412
- Typography stack: Neue Haas, Copperplate, Menlo
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #f7f8f8 - canvas / dominant background
- Color 2: #a6a6a6 - primary text or opposing surface
- Color 3: #95b6fa - accent / interactive signal
- Color 4: #141412 - supporting surface or hover state
- Color 5: #07916b - supporting surface or hover state
- Color 6: #356df4 - supporting surface or hover state
- Color 7: #73b3a7 - supporting surface or hover state
- Color 8: #606362 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Neue Haas
- Secondary: Copperplate
- Support: Menlo
- Support: Synchro
- Support: Synchro Mono

### Hierarchy Snapshot
- Heading sample: 24px / weight 400 / letter-spacing normal
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
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Neue Haas in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f7f8f8) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (colorful, arts&culture) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: rgba(125, 125, 125, 0.1) 5px 5px 20px 0px.
- Radius cue: 100px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Neue Haas consistently for headlines and interface labels.
- Keep the palette anchored to #f7f8f8, #a6a6a6, and #95b6fa.
- Preserve the experimental posture signaled by the loadmo.re tags: colorful, arts&culture.
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

> Build a responsive landing page inspired by It's a Book. Keep the palette centered on #f7f8f8, #a6a6a6, and #95b6fa. Use Neue Haas for headlines, preserve the exhibition-like framing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/it-s-a-book-2)
- Live site: https://www.itsabook.de/books
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

# Design System Inspiration of uberraum

## 1. Visual Theme & Atmosphere

uberraum reads as spatial depth. The live capture resolves to a dark-leaning system built around #939393, #6c6c6c, and accent notes from #0a0a0a. Explore a surreal 3D planet where floating objects and busts of the design duo reveal hidden content, set to a captivating soundscape.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Roboto Mono Bold, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #939393, #6c6c6c, #0a0a0a, #cfcfcf
- Typography stack: Roboto Mono Bold, Roboto Mono Medium, Roboto Mono
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #939393 - canvas / dominant background
- Color 2: #6c6c6c - primary text or opposing surface
- Color 3: #0a0a0a - accent / interactive signal
- Color 4: #cfcfcf - supporting surface or hover state
- Color 5: #25759a - supporting surface or hover state
- Color 6: #ddca95 - supporting surface or hover state
- Color 7: #37515c - supporting surface or hover state
- Color 8: #668da0 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Roboto Mono Bold
- Secondary: Roboto Mono Medium
- Support: Roboto Mono
- Support: IBM Plex Mono SemiBold
- Support: IBM Plex Mono
- Support: IBM Plex Mono Medium

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height normal
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit #0a0a0a as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Roboto Mono Bold in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#939393) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio, 3d-space) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Roboto Mono Bold consistently for headlines and interface labels.
- Keep the palette anchored to #939393, #6c6c6c, and #0a0a0a.
- Preserve the experimental posture signaled by the loadmo.re tags: portfolio, 3d-space.
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

> Build a responsive landing page inspired by uberraum. Keep the palette centered on #939393, #6c6c6c, and #0a0a0a. Use Roboto Mono Bold for headlines, preserve the spatial depth mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/uberraum)
- Live site: https://uberraum.com/
- Credits: uberraum
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

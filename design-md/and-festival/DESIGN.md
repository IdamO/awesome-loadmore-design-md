# Design System Inspiration of And Festival

## 1. Visual Theme & Atmosphere

And Festival reads as playful interaction, type-led composition. The live capture resolves to a dark-leaning system built around #041f92, #021377, and accent notes from #79e3d8. Firstly pick a rendering quality to select how much data you'd like to load, then discover the festival's programme through navigating a 3D map.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Basier Circle Mono, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #041f92, #021377, #79e3d8, #2a509b
- Typography stack: Basier Circle Mono
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #041f92 - canvas / dominant background
- Color 2: #021377 - primary text or opposing surface
- Color 3: #79e3d8 - accent / interactive signal
- Color 4: #2a509b - supporting surface or hover state
- Color 5: #5467aa - supporting surface or hover state
- Color 6: #60d8a1 - supporting surface or hover state
- Color 7: #64a1ad - supporting surface or hover state
- Color 8: #6d9bcc - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Basier Circle Mono

### Hierarchy Snapshot
- Heading sample: 27px / weight 400 / letter-spacing normal
- Body sample: 16px / weight 400 / line-height normal
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(255, 255, 255) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Basier Circle Mono in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#041f92) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (game, typography) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: 30px.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Basier Circle Mono consistently for headlines and interface labels.
- Keep the palette anchored to #041f92, #021377, and #79e3d8.
- Preserve the experimental posture signaled by the loadmo.re tags: game, typography.
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

> Build a responsive landing page inspired by And Festival. Keep the palette centered on #041f92, #021377, and #79e3d8. Use Basier Circle Mono for headlines, preserve the playful interaction, type-led composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/and-festival)
- Live site: https://andfestival.world
- Credits: Alex Piacentini Alex Futtersak
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

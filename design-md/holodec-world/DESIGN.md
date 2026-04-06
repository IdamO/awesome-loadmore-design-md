# Design System Inspiration of Holodec World

## 1. Visual Theme & Atmosphere

Holodec World reads as sonic pacing, spatial depth. The live capture resolves to a dark-leaning system built around #242424, #1b1b1b, and accent notes from #393939. A mesmesizing landing page introducing Holodec's new tracks. It feels like a painting that moves and also has sound.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers neue-haas-grotesk-display, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #242424, #1b1b1b, #393939, #404040
- Typography stack: neue-haas-grotesk-display
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #242424 - canvas / dominant background
- Color 2: #1b1b1b - primary text or opposing surface
- Color 3: #393939 - accent / interactive signal
- Color 4: #404040 - supporting surface or hover state
- Color 5: #0e0e0e - supporting surface or hover state
- Color 6: #606060 - supporting surface or hover state
- Color 7: #777777 - supporting surface or hover state
- Color 8: #8e8e8e - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: neue-haas-grotesk-display

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: n/a / weight n/a / line-height normal
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit #393939 as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps neue-haas-grotesk-display in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#242424) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (3d-space, music) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use neue-haas-grotesk-display consistently for headlines and interface labels.
- Keep the palette anchored to #242424, #1b1b1b, and #393939.
- Preserve the experimental posture signaled by the loadmo.re tags: 3d-space, music.
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

> Build a responsive landing page inspired by Holodec World. Keep the palette centered on #242424, #1b1b1b, and #393939. Use neue-haas-grotesk-display for headlines, preserve the sonic pacing, spatial depth mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/holodec-world)
- Live site: http://holodec.world/
- Credits: Bureau Cool
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

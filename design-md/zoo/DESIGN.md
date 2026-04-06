# Design System Inspiration of ZOO

## 1. Visual Theme & Atmosphere

ZOO reads as spatial depth, exhibition-like framing. The live capture resolves to a dark-leaning system built around #373737, #cfcfcf, and accent notes from #aeaeae. The Pentagram team has designed a generative museum of curiosities for Zoo agency. It includes a bespoke soundtrack and a VIRTUAL ELEVATOR!

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #373737, #cfcfcf, #aeaeae, #444444
- Typography stack: system fallback
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #373737 - canvas / dominant background
- Color 2: #cfcfcf - primary text or opposing surface
- Color 3: #aeaeae - accent / interactive signal
- Color 4: #444444 - supporting surface or hover state
- Color 5: #262f58 - supporting surface or hover state
- Color 6: #4b68ea - supporting surface or hover state
- Color 7: #394b57 - supporting surface or hover state
- Color 8: #52d7e5 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: system UI

### Hierarchy Snapshot
- Heading sample: 115.2px / weight 400 / letter-spacing normal
- Body sample: 16px / weight 200 / line-height normal
- Button sample: 13.3333px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(0, 0, 0) text.
- Links inherit #aeaeae as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps the primary stack in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#373737) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (3d-space, colorful, digital-exhibition) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #373737, #cfcfcf, and #aeaeae.
- Preserve the experimental posture signaled by the loadmo.re tags: 3d-space, colorful, digital-exhibition.
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

> Build a responsive landing page inspired by ZOO. Keep the palette centered on #373737, #cfcfcf, and #aeaeae. Use the extracted primary font for headlines, preserve the spatial depth, exhibition-like framing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/zoo)
- Live site: https://zooaszoo.com
- Credits: Pentagram
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

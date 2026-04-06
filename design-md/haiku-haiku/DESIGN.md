# Design System Inspiration of Haiku Haiku

## 1. Visual Theme & Atmosphere

Haiku Haiku reads as exhibition-like framing. The live capture resolves to a dark-leaning system built around #c71818, #be1716, and accent notes from #cb9d9d. Poetic and colorful website which offers collaborative haiku writing – either start a new haiku or complete another author's.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers mabry-medium, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #c71818, #be1716, #cb9d9d, #cdcfcf
- Typography stack: mabry-medium, XANO-mincho
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #c71818 - canvas / dominant background
- Color 2: #be1716 - primary text or opposing surface
- Color 3: #cb9d9d - accent / interactive signal
- Color 4: #cdcfcf - supporting surface or hover state
- Color 5: #c85d5d - supporting surface or hover state
- Color 6: #c8807e - supporting surface or hover state
- Color 7: #c8403e - supporting surface or hover state
- Color 8: #c73e40 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: mabry-medium
- Secondary: XANO-mincho

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 36px / weight 400 / line-height normal
- Button sample: 36px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(204, 204, 204, 0.7) backgrounds with rgb(255, 255, 255) text.
- Links inherit #cb9d9d as the interaction signal.
- Border radius trends: 50px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps mabry-medium in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#c71818) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (participative, arts&culture) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 50px.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use mabry-medium consistently for headlines and interface labels.
- Keep the palette anchored to #c71818, #be1716, and #cb9d9d.
- Preserve the experimental posture signaled by the loadmo.re tags: participative, arts&culture.
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

> Build a responsive landing page inspired by Haiku Haiku. Keep the palette centered on #c71818, #be1716, and #cb9d9d. Use mabry-medium for headlines, preserve the exhibition-like framing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/haiku-haiku)
- Live site: https://haiku-haiku.netlify.app/
- Credits: Ezekiel Aquino
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

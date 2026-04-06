# Design System Inspiration of Bruno Simon

## 1. Visual Theme & Atmosphere

Bruno Simon reads as playful interaction, spatial depth. The live capture resolves to a dark-leaning system built around #1e0f4a, #19063d, and accent notes from #472a71. A 3D portfolio that turns navigation into play. It is useful design fuel because the interface is inseparable from motion, physics, and personality.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Amatic SC, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #1e0f4a, #19063d, #472a71, #221295
- Typography stack: Amatic SC, Nunito, Pally-Regular
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #1e0f4a - canvas / dominant background
- Color 2: #19063d - primary text or opposing surface
- Color 3: #472a71 - accent / interactive signal
- Color 4: #221295 - supporting surface or hover state
- Color 5: #58348d - supporting surface or hover state
- Color 6: #724aa6 - supporting surface or hover state
- Color 7: #cdb1ea - supporting surface or hover state
- Color 8: #af90d4 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Amatic SC
- Secondary: Nunito
- Support: Pally-Regular
- Support: Pally-Medium
- Support: Pally-Bold

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 20px / weight 400 / line-height normal
- Button sample: 20px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(0, 0, 0) text.
- Links inherit #472a71 as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Amatic SC in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#1e0f4a) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (3d-space, playful, portfolio) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Amatic SC consistently for headlines and interface labels.
- Keep the palette anchored to #1e0f4a, #19063d, and #472a71.
- Preserve the experimental posture signaled by the loadmo.re tags: 3d-space, playful, portfolio.
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

> Build a responsive landing page inspired by Bruno Simon. Keep the palette centered on #1e0f4a, #19063d, and #472a71. Use Amatic SC for headlines, preserve the playful interaction, spatial depth mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: manual curation (https://bruno-simon.com/)
- Live site: https://bruno-simon.com/
- Credits: Bruno Simon
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

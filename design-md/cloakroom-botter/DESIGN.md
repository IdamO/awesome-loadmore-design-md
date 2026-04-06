# Design System Inspiration of Cloakroom Botter

## 1. Visual Theme & Atmosphere

Cloakroom Botter reads as editorial fashion energy, spatial depth. The live capture resolves to a light-leaning system built around #fefefe, #cfcfcf, and accent notes from #e7e7e7. Fullscreen interface that lets you browse BOTTER's collection through dressing up an underwater 3D avatar model.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers DeVinneBT, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fefefe, #cfcfcf, #e7e7e7, #b8b8b8
- Typography stack: DeVinneBT, Akzidenz-GroteskProRegular, Akzidenz-GroteskProBold
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #fefefe - canvas / dominant background
- Color 2: #cfcfcf - primary text or opposing surface
- Color 3: #e7e7e7 - accent / interactive signal
- Color 4: #b8b8b8 - supporting surface or hover state
- Color 5: #010101 - supporting surface or hover state
- Color 6: #a4a4a4 - supporting surface or hover state
- Color 7: #222222 - supporting surface or hover state
- Color 8: #575757 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: DeVinneBT
- Secondary: Akzidenz-GroteskProRegular
- Support: Akzidenz-GroteskProBold
- Support: Akzidenz-GroteskBQExtended
- Support: GTStandard-M
- Support: Inter

### Hierarchy Snapshot
- Heading sample: 28px / weight 400 / letter-spacing normal
- Body sample: 14px / weight 400 / line-height 18.2px
- Button sample: 14px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(0, 0, 0) text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps DeVinneBT in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fefefe) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (fashion, 3d-space) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 5px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use DeVinneBT consistently for headlines and interface labels.
- Keep the palette anchored to #fefefe, #cfcfcf, and #e7e7e7.
- Preserve the experimental posture signaled by the loadmo.re tags: fashion, 3d-space.
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

> Build a responsive landing page inspired by Cloakroom Botter. Keep the palette centered on #fefefe, #cfcfcf, and #e7e7e7. Use DeVinneBT for headlines, preserve the editorial fashion energy, spatial depth mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/cloakroom-botter)
- Live site: https://botter.world/cloakroom
- Credits: Studio Fables, Trappist Monk,
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

# Design System Inspiration of Zentrale

## 1. Visual Theme & Atmosphere

Zentrale reads as restrained minimalism. The live capture resolves to a light-leaning system built around #fefdfd, #f6e7e7, and accent notes from #f3d8d8. A bookshop-inspired site where content is creatively framed like windows or book covers.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers am-controls, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fefdfd, #f6e7e7, #f3d8d8, #f2d8d8
- Typography stack: am-controls, Zentrale
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #fefdfd - canvas / dominant background
- Color 2: #f6e7e7 - primary text or opposing surface
- Color 3: #f3d8d8 - accent / interactive signal
- Color 4: #f2d8d8 - supporting surface or hover state
- Color 5: #edd6d6 - supporting surface or hover state
- Color 6: #ecb9b9 - supporting surface or hover state
- Color 7: #efc0be - supporting surface or hover state
- Color 8: #ecbec0 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: am-controls
- Secondary: Zentrale

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 31.68px / weight 400 / line-height 34.848px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(255, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps am-controls in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fefdfd) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (minimal, graphic-design) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use am-controls consistently for headlines and interface labels.
- Keep the palette anchored to #fefdfd, #f6e7e7, and #f3d8d8.
- Preserve the experimental posture signaled by the loadmo.re tags: minimal, graphic-design.
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

> Build a responsive landing page inspired by Zentrale. Keep the palette centered on #fefdfd, #f6e7e7, and #f3d8d8. Use am-controls for headlines, preserve the restrained minimalism mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/zentrale)
- Live site: http://www.zentrale-karlsruhe.com/
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

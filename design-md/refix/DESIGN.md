# Design System Inspiration of Refix

## 1. Visual Theme & Atmosphere

Refix reads as type-led composition. The live capture resolves to a dark-leaning system built around #160f10, #6e6d6d, and accent notes from #9e9b9b. Solid big bold type nagivation to lure you in to explore further.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers stmicons, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #160f10, #6e6d6d, #9e9b9b, #dbdada
- Typography stack: stmicons, vcpb-plugin-icons, vc_grid_v1
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #160f10 - canvas / dominant background
- Color 2: #6e6d6d - primary text or opposing surface
- Color 3: #9e9b9b - accent / interactive signal
- Color 4: #dbdada - supporting surface or hover state
- Color 5: #443a37 - supporting surface or hover state
- Color 6: #f9c907 - supporting surface or hover state
- Color 7: #eddba4 - supporting surface or hover state
- Color 8: #857a71 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: stmicons
- Secondary: vcpb-plugin-icons
- Support: vc_grid_v1
- Support: Montserrat
- Support: Nunito Sans
- Support: Oswald

### Hierarchy Snapshot
- Heading sample: 50px / weight 700 / letter-spacing 0.6px
- Body sample: 16px / weight 400 / line-height 26px
- Button sample: 14px / weight 700

## 4. Component Stylings

### Web
- Buttons tend toward rgb(17, 17, 17) backgrounds with rgb(255, 255, 255) text.
- Links inherit rgb(255, 255, 255) as the interaction signal.
- Border radius trends: 40px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps stmicons in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#160f10) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (e-commerce, typography, animation) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 5px.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use stmicons consistently for headlines and interface labels.
- Keep the palette anchored to #160f10, #6e6d6d, and #9e9b9b.
- Preserve the experimental posture signaled by the loadmo.re tags: e-commerce, typography, animation.
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

> Build a responsive landing page inspired by Refix. Keep the palette centered on #160f10, #6e6d6d, and #9e9b9b. Use stmicons for headlines, preserve the type-led composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/refix)
- Live site: https://refixyourself.com/
- Credits: Naranjo-Etxeberria
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

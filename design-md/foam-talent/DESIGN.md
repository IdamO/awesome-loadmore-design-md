# Design System Inspiration of Foam Talent

## 1. Visual Theme & Atmosphere

Foam Talent reads as spatial depth. The live capture resolves to a dark-leaning system built around #201f21, #6894cd, and accent notes from #4972af. Discover photographers by orbiting their visuals in 3D.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Monument Grotesk Mono, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #201f21, #6894cd, #4972af, #90b3dd
- Typography stack: Monument Grotesk Mono, PurpleHaze, __MONUMENT_GROTESK_FONT_d95056
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #201f21 - canvas / dominant background
- Color 2: #6894cd - primary text or opposing surface
- Color 3: #4972af - accent / interactive signal
- Color 4: #90b3dd - supporting surface or hover state
- Color 5: #655b56 - supporting surface or hover state
- Color 6: #a78e72 - supporting surface or hover state
- Color 7: #8a7560 - supporting surface or hover state
- Color 8: #a9c7e6 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Monument Grotesk Mono
- Secondary: PurpleHaze
- Support: __MONUMENT_GROTESK_FONT_d95056
- Support: __MONUMENT_GROTESK_FONT_Fallback_d95056
- Support: __KORMELINK_FONT_4ab799
- Support: __KORMELINK_FONT_Fallback_4ab799

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 10px / weight 400 / line-height 11.5px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit #4972af as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Monument Grotesk Mono in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#201f21) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio, 3d-space, photography) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Monument Grotesk Mono consistently for headlines and interface labels.
- Keep the palette anchored to #201f21, #6894cd, and #4972af.
- Preserve the experimental posture signaled by the loadmo.re tags: portfolio, 3d-space, photography.
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

> Build a responsive landing page inspired by Foam Talent. Keep the palette centered on #201f21, #6894cd, and #4972af. Use Monument Grotesk Mono for headlines, preserve the spatial depth mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/foam-talent)
- Live site: https://talent.foam.org/
- Credits: Build in Amsterdam
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

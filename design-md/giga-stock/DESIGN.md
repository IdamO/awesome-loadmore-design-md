# Design System Inspiration of Giga Stock

## 1. Visual Theme & Atmosphere

Giga Stock reads as playful interaction, exhibition-like framing. The live capture resolves to a light-leaning system built around #eeeeee, #0f1011, and accent notes from #b8d905. Giga Stock works as a cinematic vitrine for advertising a limited production of serialised works.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Aktual, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #eeeeee, #0f1011, #b8d905, #9d9ea0
- Typography stack: Aktual, Frankfurter
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #eeeeee - canvas / dominant background
- Color 2: #0f1011 - primary text or opposing surface
- Color 3: #b8d905 - accent / interactive signal
- Color 4: #9d9ea0 - supporting surface or hover state
- Color 5: #5e5e5e - supporting surface or hover state
- Color 6: #706f9b - supporting surface or hover state
- Color 7: #f51a19 - supporting surface or hover state
- Color 8: #59a85c - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Aktual
- Secondary: Frankfurter

### Hierarchy Snapshot
- Heading sample: 24px / weight 600 / letter-spacing -0.48px
- Body sample: 14px / weight 600 / line-height 14px
- Button sample: 14px / weight 600

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(255, 255, 255) text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Aktual in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#eeeeee) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (e-commerce, playful, arts&culture) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Aktual consistently for headlines and interface labels.
- Keep the palette anchored to #eeeeee, #0f1011, and #b8d905.
- Preserve the experimental posture signaled by the loadmo.re tags: e-commerce, playful, arts&culture.
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

> Build a responsive landing page inspired by Giga Stock. Keep the palette centered on #eeeeee, #0f1011, and #b8d905. Use Aktual for headlines, preserve the playful interaction, exhibition-like framing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/giga-stock)
- Live site: https://gigastock.net/
- Credits: gigadesignstudio/
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

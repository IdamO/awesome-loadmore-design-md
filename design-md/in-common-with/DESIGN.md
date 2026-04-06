# Design System Inspiration of In Common With

## 1. Visual Theme & Atmosphere

In Common With reads as restrained minimalism. The live capture resolves to a light-leaning system built around #f3f2ee, #d0c9b8, and accent notes from #4c1009. Simple, elegant interaction turning the lights off and on for this lighting brand.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Caslon Ionic, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f3f2ee, #d0c9b8, #4c1009, #c4bbac
- Typography stack: Caslon Ionic, Mier A, swiper-icons
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #f3f2ee - canvas / dominant background
- Color 2: #d0c9b8 - primary text or opposing surface
- Color 3: #4c1009 - accent / interactive signal
- Color 4: #c4bbac - supporting surface or hover state
- Color 5: #b4a99e - supporting surface or hover state
- Color 6: #24110c - supporting surface or hover state
- Color 7: #704737 - supporting surface or hover state
- Color 8: #765a52 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Caslon Ionic
- Secondary: Mier A
- Support: swiper-icons
- Support: GTStandard-M

### Hierarchy Snapshot
- Heading sample: 14px / weight 400 / letter-spacing normal
- Body sample: 14px / weight 400 / line-height 16.8px
- Button sample: 18px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(74, 10, 5) text.
- Links inherit rgb(74, 10, 5) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Caslon Ionic in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f3f2ee) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (photography, minimal, e-commerce) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Caslon Ionic consistently for headlines and interface labels.
- Keep the palette anchored to #f3f2ee, #d0c9b8, and #4c1009.
- Preserve the experimental posture signaled by the loadmo.re tags: photography, minimal, e-commerce.
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

> Build a responsive landing page inspired by In Common With. Keep the palette centered on #f3f2ee, #d0c9b8, and #4c1009. Use Caslon Ionic for headlines, preserve the restrained minimalism mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/in-common-with)
- Live site: https://www.incommonwith.com/collections/all-lighting
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

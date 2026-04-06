# Design System Inspiration of Duuu

## 1. Visual Theme & Atmosphere

Duuu reads as restrained minimalism, sonic pacing. The live capture resolves to a light-leaning system built around #f9f9f9, #a5a6a6, and accent notes from #070707. Minimalist and grid-based design for an online radio.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers NeueHaasGrotText-55Roman-Web, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f9f9f9, #a5a6a6, #070707, #5d5d5d
- Typography stack: NeueHaasGrotText-55Roman-Web, NeueHaasGrotText-56Italic-Web
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #f9f9f9 - canvas / dominant background
- Color 2: #a5a6a6 - primary text or opposing surface
- Color 3: #070707 - accent / interactive signal
- Color 4: #5d5d5d - supporting surface or hover state
- Color 5: #bfc1c0 - supporting surface or hover state
- Color 6: #7f8180 - supporting surface or hover state
- Color 7: #7e807f - supporting surface or hover state
- Color 8: #bec0bf - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: NeueHaasGrotText-55Roman-Web
- Secondary: NeueHaasGrotText-56Italic-Web

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 46.8px / weight 400 / line-height 48.96px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps NeueHaasGrotText-55Roman-Web in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f9f9f9) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (music, minimal) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use NeueHaasGrotText-55Roman-Web consistently for headlines and interface labels.
- Keep the palette anchored to #f9f9f9, #a5a6a6, and #070707.
- Preserve the experimental posture signaled by the loadmo.re tags: music, minimal.
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

> Build a responsive landing page inspired by Duuu. Keep the palette centered on #f9f9f9, #a5a6a6, and #070707. Use NeueHaasGrotText-55Roman-Web for headlines, preserve the restrained minimalism, sonic pacing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/duuu)
- Live site: https://duuuradio.fr/
- Credits: Spassky Fischer Frédéric Jaman Manon Bruet Quentin Creuzet
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

# Design System Inspiration of Color Push : Wetransfer x Liebermann

## 1. Visual Theme & Atmosphere

Color Push : Wetransfer x Liebermann reads as playful interaction. The live capture resolves to a light-leaning system built around #fdfdfd, #a59b9f, and accent notes from #d69e9d. Impressive drawing tool to create a collaborative artwork for WeTransfer. You can either paint with your finger or enable camera to paint with your head.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers GT-Super, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fdfdfd, #a59b9f, #d69e9d, #040404
- Typography stack: GT-Super, Actief
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #fdfdfd - canvas / dominant background
- Color 2: #a59b9f - primary text or opposing surface
- Color 3: #d69e9d - accent / interactive signal
- Color 4: #040404 - supporting surface or hover state
- Color 5: #dd9c5e - supporting surface or hover state
- Color 6: #60648c - supporting surface or hover state
- Color 7: #a8a168 - supporting surface or hover state
- Color 8: #539093 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: GT-Super
- Secondary: Actief

### Hierarchy Snapshot
- Heading sample: 31.68px / weight 700 / letter-spacing normal
- Body sample: 19.8px / weight 400 / line-height normal
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps GT-Super in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fdfdfd) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (colorful, participative, playful) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use GT-Super consistently for headlines and interface labels.
- Keep the palette anchored to #fdfdfd, #a59b9f, and #d69e9d.
- Preserve the experimental posture signaled by the loadmo.re tags: colorful, participative, playful.
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

> Build a responsive landing page inspired by Color Push : Wetransfer x Liebermann. Keep the palette centered on #fdfdfd, #a59b9f, and #d69e9d. Use GT-Super for headlines, preserve the playful interaction mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/color-push-wetransfer-x-liebermann)
- Live site: https://colorpush.wetransfer.com/
- Credits: Zach Liebermann
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

# Design System Inspiration of Leila Mcglew

## 1. Visual Theme & Atmosphere

Leila Mcglew reads as playful interaction. The live capture resolves to a light-leaning system built around #f4f5f0, #f4f5f1, and accent notes from #000000. Playful yet simple page that lets you draw emojis everywhere. Satisfying!

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Nunito, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f4f5f0, #f4f5f1, #000000
- Typography stack: Nunito
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #f4f5f0 - canvas / dominant background
- Color 2: #f4f5f1 - primary text or opposing surface
- Color 3: #000000 - accent / interactive signal

## 3. Typography Rules

### Font Families
- Primary: Nunito

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 79.2px / weight 1000 / line-height 81.18px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(244, 245, 241) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Nunito in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f4f5f0) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (playful, tactile) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Nunito consistently for headlines and interface labels.
- Keep the palette anchored to #f4f5f0, #f4f5f1, and #000000.
- Preserve the experimental posture signaled by the loadmo.re tags: playful, tactile.
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

> Build a responsive landing page inspired by Leila Mcglew. Keep the palette centered on #f4f5f0, #f4f5f1, and #000000. Use Nunito for headlines, preserve the playful interaction mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/leila-mcglew)
- Live site: http://leilamcglew.com
- Credits: Jake Dow Smith
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

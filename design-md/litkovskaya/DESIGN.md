# Design System Inspiration of Litkovskaya

## 1. Visual Theme & Atmosphere

Litkovskaya reads as restrained minimalism. The live capture resolves to a light-leaning system built around #e8e3de, #649dd0, and accent notes from #ada7a1. Beautiful e-commerce website that combines nice visual content + good graphics.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #e8e3de, #649dd0, #ada7a1, #d0c5ba
- Typography stack: system fallback
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #e8e3de - canvas / dominant background
- Color 2: #649dd0 - primary text or opposing surface
- Color 3: #ada7a1 - accent / interactive signal
- Color 4: #d0c5ba - supporting surface or hover state
- Color 5: #c6b9ad - supporting surface or hover state
- Color 6: #a9c8da - supporting surface or hover state
- Color 7: #8bb8d6 - supporting surface or hover state
- Color 8: #5d5c63 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: system UI

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: n/a / weight n/a / line-height normal
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit #ada7a1 as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps the primary stack in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#e8e3de) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (e-commerce, clean-ui) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #e8e3de, #649dd0, and #ada7a1.
- Preserve the experimental posture signaled by the loadmo.re tags: e-commerce, clean-ui.
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

> Build a responsive landing page inspired by Litkovskaya. Keep the palette centered on #e8e3de, #649dd0, and #ada7a1. Use the extracted primary font for headlines, preserve the restrained minimalism mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/litkovskaya)
- Live site: https://litkovskaya.com/
- Credits: Future Perfect
- Desktop capture: failed
- Mobile capture: failed
- Archival fallback: poster image used for missing screenshots

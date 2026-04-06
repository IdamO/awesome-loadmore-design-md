# Design System Inspiration of Cupidku

## 1. Visual Theme & Atmosphere

Cupidku reads as playful interaction. The live capture resolves to a dark-leaning system built around #ef7689, #f1fdc7, and accent notes from #e7d9b3. Upload a picture of someone you cherish and Cupidku will generate a haiku love poem based on the image.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #ef7689, #f1fdc7, #e7d9b3, #eb9b98
- Typography stack: system fallback
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #ef7689 - canvas / dominant background
- Color 2: #f1fdc7 - primary text or opposing surface
- Color 3: #e7d9b3 - accent / interactive signal
- Color 4: #eb9b98 - supporting surface or hover state
- Color 5: #0b0c09 - supporting surface or hover state
- Color 6: #878e74 - supporting surface or hover state
- Color 7: #a9b28c - supporting surface or hover state
- Color 8: #5f3137 - supporting surface or hover state

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
- Links inherit #e7d9b3 as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps the primary stack in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#ef7689) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (participative, playful, ai&generative) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #ef7689, #f1fdc7, and #e7d9b3.
- Preserve the experimental posture signaled by the loadmo.re tags: participative, playful, ai&generative.
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

> Build a responsive landing page inspired by Cupidku. Keep the palette centered on #ef7689, #f1fdc7, and #e7d9b3. Use the extracted primary font for headlines, preserve the playful interaction mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/cupidku)
- Live site: https://cupidku.com/upload
- Credits: Lex Fefegha
- Desktop capture: failed
- Mobile capture: failed
- Archival fallback: poster image used for missing screenshots

# Design System Inspiration of Perlmutare

## 1. Visual Theme & Atmosphere

Perlmutare reads as type-led composition. The live capture resolves to a light-leaning system built around #e4fd00, #f70e03, and accent notes from #e8a209. Generating absurd demands, that testify to the loss of political left/centre/right orientation.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Remus, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #e4fd00, #f70e03, #e8a209, #f7d3d5
- Typography stack: Remus, Tiny-140, Tiny-160
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #e4fd00 - canvas / dominant background
- Color 2: #f70e03 - primary text or opposing surface
- Color 3: #e8a209 - accent / interactive signal
- Color 4: #f7d3d5 - supporting surface or hover state
- Color 5: #ee5f07 - supporting surface or hover state
- Color 6: #a0ae1e - supporting surface or hover state
- Color 7: #cfb4ac - supporting surface or hover state
- Color 8: #ab9c95 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Remus
- Secondary: Tiny-140
- Support: Tiny-160
- Support: Tiny-180
- Support: Bianzhidai-Ring
- Support: Bianzhidai-Pearl

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 44.8px / weight 400 / line-height normal
- Button sample: 36.8px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgb(255, 213, 213) backgrounds with rgb(0, 0, 0) text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 50%.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Remus in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#e4fd00) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (colorful, typography) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 15px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Remus consistently for headlines and interface labels.
- Keep the palette anchored to #e4fd00, #f70e03, and #e8a209.
- Preserve the experimental posture signaled by the loadmo.re tags: colorful, typography.
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

> Build a responsive landing page inspired by Perlmutare. Keep the palette centered on #e4fd00, #f70e03, and #e8a209. Use Remus for headlines, preserve the type-led composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/perlmutare)
- Live site: https://www.perlmutare.net/
- Credits: Sina Gösele Amyra Radwan
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

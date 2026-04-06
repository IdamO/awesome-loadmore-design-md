# Design System Inspiration of gmbh

## 1. Visual Theme & Atmosphere

gmbh reads as editorial fashion energy. The live capture resolves to a light-leaning system built around #f1f2ef, #6f6757, and accent notes from #a29f9a. Minimalist e-commerce with non-conventional structure and sharp native buttons, giving it an industrial style.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Univers Extended, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f1f2ef, #6f6757, #a29f9a, #131211
- Typography stack: Univers Extended
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #f1f2ef - canvas / dominant background
- Color 2: #6f6757 - primary text or opposing surface
- Color 3: #a29f9a - accent / interactive signal
- Color 4: #131211 - supporting surface or hover state
- Color 5: #948875 - supporting surface or hover state
- Color 6: #897765 - supporting surface or hover state
- Color 7: #d1c7b9 - supporting surface or hover state
- Color 8: #c9b6aa - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Univers Extended

### Hierarchy Snapshot
- Heading sample: 32px / weight 700 / letter-spacing normal
- Body sample: 13px / weight 700 / line-height 20px
- Button sample: 12px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(0, 0, 0) text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 2px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Univers Extended in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f1f2ef) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (e-commerce, fashion, default-aesthetics) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 2px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Univers Extended consistently for headlines and interface labels.
- Keep the palette anchored to #f1f2ef, #6f6757, and #a29f9a.
- Preserve the experimental posture signaled by the loadmo.re tags: e-commerce, fashion, default-aesthetics.
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

> Build a responsive landing page inspired by gmbh. Keep the palette centered on #f1f2ef, #6f6757, and #a29f9a. Use Univers Extended for headlines, preserve the editorial fashion energy mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/gmbh)
- Live site: https://gmbhgmbh.eu
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

# Design System Inspiration of Open Foundry

## 1. Visual Theme & Atmosphere

Open Foundry reads as type-led composition. The live capture resolves to a light-leaning system built around #f1f2f4, #686968, and accent notes from #15220f. Curation of free fonts that look cool, with a sleek interface.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Mirage, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f1f2f4, #686968, #15220f, #760607
- Typography stack: Mirage, Index, aileron
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #f1f2f4 - canvas / dominant background
- Color 2: #686968 - primary text or opposing surface
- Color 3: #15220f - accent / interactive signal
- Color 4: #760607 - supporting surface or hover state
- Color 5: #19511d - supporting surface or hover state
- Color 6: #82080c - supporting surface or hover state
- Color 7: #4a4d34 - supporting surface or hover state
- Color 8: #a19e9c - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Mirage
- Secondary: Index
- Support: aileron
- Support: archivo
- Support: bagnard
- Support: bluu-next

### Hierarchy Snapshot
- Heading sample: 16px / weight 500 / letter-spacing normal
- Body sample: 16px / weight 500 / line-height 29.44px
- Button sample: 15px / weight 450

## 4. Component Stylings

### Web
- Buttons tend toward oklch(0.4 0.01 264 / 0.12) backgrounds with oklch(0.2 0.002 264) text.
- Links inherit oklch(0.2 0.002 264) as the interaction signal.
- Border radius trends: 16px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Mirage in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f1f2f4) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (graphic-design, typography) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 16px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Mirage consistently for headlines and interface labels.
- Keep the palette anchored to #f1f2f4, #686968, and #15220f.
- Preserve the experimental posture signaled by the loadmo.re tags: graphic-design, typography.
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

> Build a responsive landing page inspired by Open Foundry. Keep the palette centered on #f1f2f4, #686968, and #15220f. Use Mirage for headlines, preserve the type-led composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/open-foundry)
- Live site: https://open-foundry.com
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

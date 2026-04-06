# Design System Inspiration of Rauno

## 1. Visual Theme & Atmosphere

Rauno reads as restrained minimalism. The live capture resolves to a light-leaning system built around #f2f2f2, #fefe02, and accent notes from #11110f. Paint the tiled homepage with a swipe, then dive into Rauno’s portfolio through a clean, intuitive UI.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers X, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f2f2f2, #fefe02, #11110f, #5c5c5c
- Typography stack: X, JetBrains Mono
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #f2f2f2 - canvas / dominant background
- Color 2: #fefe02 - primary text or opposing surface
- Color 3: #11110f - accent / interactive signal
- Color 4: #5c5c5c - supporting surface or hover state
- Color 5: #a0a0a0 - supporting surface or hover state
- Color 6: #626112 - supporting surface or hover state
- Color 7: #a5a410 - supporting surface or hover state
- Color 8: #fafa60 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: X
- Secondary: JetBrains Mono

### Hierarchy Snapshot
- Heading sample: 32px / weight 500 / letter-spacing normal
- Body sample: 85px / weight 400 / line-height normal
- Button sample: 13.3333px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(23, 23, 23) text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 12px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps X in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f2f2f2) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (clean-ui, tactile, portfolio) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 12px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use X consistently for headlines and interface labels.
- Keep the palette anchored to #f2f2f2, #fefe02, and #11110f.
- Preserve the experimental posture signaled by the loadmo.re tags: clean-ui, tactile, portfolio.
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

> Build a responsive landing page inspired by Rauno. Keep the palette centered on #f2f2f2, #fefe02, and #11110f. Use X for headlines, preserve the restrained minimalism mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/rauno)
- Live site: https://rauno.me/
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

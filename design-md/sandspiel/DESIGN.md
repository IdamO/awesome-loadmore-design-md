# Design System Inspiration of Sandspiel

## 1. Visual Theme & Atmosphere

Sandspiel reads as playful interaction. The live capture resolves to a light-leaning system built around #f1e8e8, #cda466, and accent notes from #a4a3a3. Draw, it creates sand that falls with gravity, and then these particles make flowers grow. Or you pick lava and it burns everything. Just try it!

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Inconsolata, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f1e8e8, #cda466, #a4a3a3, #d6c7ac
- Typography stack: Inconsolata
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #f1e8e8 - canvas / dominant background
- Color 2: #cda466 - primary text or opposing surface
- Color 3: #a4a3a3 - accent / interactive signal
- Color 4: #d6c7ac - supporting surface or hover state
- Color 5: #cdb9a1 - supporting surface or hover state
- Color 6: #d3b6d6 - supporting surface or hover state
- Color 7: #6e93ca - supporting surface or hover state
- Color 8: #636262 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Inconsolata

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 24px / weight 400 / line-height normal
- Button sample: 19px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgb(245, 245, 245) backgrounds with rgb(0, 0, 0) text.
- Links inherit rgb(0, 0, 238) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Inconsolata in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f1e8e8) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (experience, playful) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Inconsolata consistently for headlines and interface labels.
- Keep the palette anchored to #f1e8e8, #cda466, and #a4a3a3.
- Preserve the experimental posture signaled by the loadmo.re tags: experience, playful.
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

> Build a responsive landing page inspired by Sandspiel. Keep the palette centered on #f1e8e8, #cda466, and #a4a3a3. Use Inconsolata for headlines, preserve the playful interaction mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/sandspiel)
- Live site: https://sandspiel.club/
- Credits: Max Bittker
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

# Design System Inspiration of Robopoetics

## 1. Visual Theme & Atmosphere

Robopoetics reads as spatial depth, exhibition-like framing. The live capture resolves to a light-leaning system built around #12cafe, #fdfefe, and accent notes from #0ab3e3. Web-based exhibition for Internet poetry. It's beautiful, light and the browsing is very enjoyable and easy.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers century, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #12cafe, #fdfefe, #0ab3e3, #0f5268
- Typography stack: century
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #12cafe - canvas / dominant background
- Color 2: #fdfefe - primary text or opposing surface
- Color 3: #0ab3e3 - accent / interactive signal
- Color 4: #0f5268 - supporting surface or hover state
- Color 5: #158db0 - supporting surface or hover state
- Color 6: #127290 - supporting surface or hover state
- Color 7: #57d8fb - supporting surface or hover state
- Color 8: #0b1519 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: century

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 22px / weight 400 / line-height 23.1px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps century in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#12cafe) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (arts&culture, 3d-space) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use century consistently for headlines and interface labels.
- Keep the palette anchored to #12cafe, #fdfefe, and #0ab3e3.
- Preserve the experimental posture signaled by the loadmo.re tags: arts&culture, 3d-space.
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

> Build a responsive landing page inspired by Robopoetics. Keep the palette centered on #12cafe, #fdfefe, and #0ab3e3. Use century for headlines, preserve the spatial depth, exhibition-like framing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/robopoetics)
- Live site: https://robopoetics.com
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

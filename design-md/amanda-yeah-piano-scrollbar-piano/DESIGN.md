# Design System Inspiration of Amanda Yeh Piano Scrollbar Piano

## 1. Visual Theme & Atmosphere

Amanda Yeh Piano Scrollbar Piano reads as playful interaction, sonic pacing. The live capture resolves to a light-leaning system built around #e3fcd4, #ecfba4, and accent notes from #f7ff6e. One of Amanda Yeh's projects and code experiments, scroll to play piano.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Solide Mirage, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #e3fcd4, #ecfba4, #f7ff6e, #9ba3f6
- Typography stack: Solide Mirage
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #e3fcd4 - canvas / dominant background
- Color 2: #ecfba4 - primary text or opposing surface
- Color 3: #f7ff6e - accent / interactive signal
- Color 4: #9ba3f6 - supporting surface or hover state
- Color 5: #adae93 - supporting surface or hover state
- Color 6: #939377 - supporting surface or hover state
- Color 7: #f4b271 - supporting surface or hover state
- Color 8: #bdc09a - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Solide Mirage

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height 22.4px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(66, 255, 198) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Solide Mirage in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#e3fcd4) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (playful, sound-design, colorful) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Solide Mirage consistently for headlines and interface labels.
- Keep the palette anchored to #e3fcd4, #ecfba4, and #f7ff6e.
- Preserve the experimental posture signaled by the loadmo.re tags: playful, sound-design, colorful.
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

> Build a responsive landing page inspired by Amanda Yeh Piano Scrollbar Piano. Keep the palette centered on #e3fcd4, #ecfba4, and #f7ff6e. Use Solide Mirage for headlines, preserve the playful interaction, sonic pacing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/amanda-yeah-piano-scrollbar-piano)
- Live site: https://amandayehh.github.io/scrollbar-piano
- Credits: Amanda Yeh
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

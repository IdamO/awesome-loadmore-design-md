# Design System Inspiration of Christie Wu

## 1. Visual Theme & Atmosphere

Christie Wu reads as playful interaction, retro-computing cues. The live capture resolves to a light-leaning system built around #f1efee, #b1b1b0, and accent notes from #344911. Crazy interactive portfolio website with retro web design aesthetics.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers NeueBit, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f1efee, #b1b1b0, #344911, #d8b1a1
- Typography stack: NeueBit
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #f1efee - canvas / dominant background
- Color 2: #b1b1b0 - primary text or opposing surface
- Color 3: #344911 - accent / interactive signal
- Color 4: #d8b1a1 - supporting surface or hover state
- Color 5: #6392ee - supporting surface or hover state
- Color 6: #97afe4 - supporting surface or hover state
- Color 7: #0326bb - supporting surface or hover state
- Color 8: #295fe2 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: NeueBit

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height 24px
- Button sample: 25.6px / weight 700

## 4. Component Stylings

### Web
- Buttons tend toward rgb(190, 190, 190) backgrounds with rgb(0, 0, 0) text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: rgb(0, 0, 0) 2px 2px 1px 0px.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps NeueBit in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f1efee) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio, retro, playful) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: rgb(0, 0, 0) 2px 2px 1px 0px.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use NeueBit consistently for headlines and interface labels.
- Keep the palette anchored to #f1efee, #b1b1b0, and #344911.
- Preserve the experimental posture signaled by the loadmo.re tags: portfolio, retro, playful.
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

> Build a responsive landing page inspired by Christie Wu. Keep the palette centered on #f1efee, #b1b1b0, and #344911. Use NeueBit for headlines, preserve the playful interaction, retro-computing cues mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/christie-wu)
- Live site: https://christiewu.fun/
- Credits: Christie Wu
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

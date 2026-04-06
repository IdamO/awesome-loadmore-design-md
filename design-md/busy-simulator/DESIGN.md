# Design System Inspiration of Busy Simulator

## 1. Visual Theme & Atmosphere

Busy Simulator reads as playful interaction, sonic pacing. The live capture resolves to a dark-leaning system built around #344b12, #6592ee, and accent notes from #e3e7eb. Such a BRILLIANT idea. A website that triggers apps notifications sounds, to make people think you're so busy.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #344b12, #6592ee, #e3e7eb, #6c911c
- Typography stack: system fallback
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #344b12 - canvas / dominant background
- Color 2: #6592ee - primary text or opposing surface
- Color 3: #e3e7eb - accent / interactive signal
- Color 4: #6c911c - supporting surface or hover state
- Color 5: #92afee - supporting surface or hover state
- Color 6: #2c6ae9 - supporting surface or hover state
- Color 7: #4f6b1c - supporting surface or hover state
- Color 8: #4978e7 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: system UI

### Hierarchy Snapshot
- Heading sample: 22.4px / weight 700 / letter-spacing normal
- Body sample: 16px / weight 400 / line-height 16px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(0, 0, 238) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps the primary stack in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#344b12) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (playful, sound-design) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #344b12, #6592ee, and #e3e7eb.
- Preserve the experimental posture signaled by the loadmo.re tags: playful, sound-design.
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

> Build a responsive landing page inspired by Busy Simulator. Keep the palette centered on #344b12, #6592ee, and #e3e7eb. Use the extracted primary font for headlines, preserve the playful interaction, sonic pacing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/busy-simulator)
- Live site: https://busysimulator.com/
- Credits: Brian Moore
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

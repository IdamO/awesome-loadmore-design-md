# Design System Inspiration of Pond GG

## 1. Visual Theme & Atmosphere

Pond GG reads as playful interaction, retro-computing cues. The live capture resolves to a dark-leaning system built around #050506, #06a0f9, and accent notes from #29d0fe. Log on this website and interact with other online users as a duck.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers lores-12, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #050506, #06a0f9, #29d0fe, #0377f3
- Typography stack: lores-12, lores-12-bold-alt-oakland, lores-12-narrow
- Desktop posture: fixed/sticky framing
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #050506 - canvas / dominant background
- Color 2: #06a0f9 - primary text or opposing surface
- Color 3: #29d0fe - accent / interactive signal
- Color 4: #0377f3 - supporting surface or hover state
- Color 5: #4f60fa - supporting surface or hover state
- Color 6: #5b5a5f - supporting surface or hover state
- Color 7: #47eafc - supporting surface or hover state
- Color 8: #582214 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: lores-12
- Secondary: lores-12-bold-alt-oakland
- Support: lores-12-narrow
- Support: lores-15-bold-alt-oakland
- Support: lores-15-narrow
- Support: lores-15

### Hierarchy Snapshot
- Heading sample: 14.4px / weight 700 / letter-spacing normal
- Body sample: 14.4px / weight 400 / line-height 20.16px
- Button sample: 10.8px / weight 700

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(0, 0, 0) text.
- Links inherit rgb(255, 255, 255) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps lores-12 in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#050506) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (playful, participative, retro) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 1.8px.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use lores-12 consistently for headlines and interface labels.
- Keep the palette anchored to #050506, #06a0f9, and #29d0fe.
- Preserve the experimental posture signaled by the loadmo.re tags: playful, participative, retro.
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

> Build a responsive landing page inspired by Pond GG. Keep the palette centered on #050506, #06a0f9, and #29d0fe. Use lores-12 for headlines, preserve the playful interaction, retro-computing cues mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/pond-gg)
- Live site: http://pond.gg/
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

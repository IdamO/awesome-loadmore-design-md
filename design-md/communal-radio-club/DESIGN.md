# Design System Inspiration of Communal Radio Club

## 1. Visual Theme & Atmosphere

Communal Radio Club reads as sonic pacing, retro-computing cues. The live capture resolves to a dark-leaning system built around #070201, #056206, and accent notes from #4f090a. Listen to live radio stations and enjoy quirky Web 1.0-style animations by clicking the blue jog dial. Leave your name on the listener list to mark your presence.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Menlo, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #070201, #056206, #4f090a, #f70301
- Typography stack: Menlo, MetamorBit, FKGroteskMonoTrial-Regular
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #070201 - canvas / dominant background
- Color 2: #056206 - primary text or opposing surface
- Color 3: #4f090a - accent / interactive signal
- Color 4: #f70301 - supporting surface or hover state
- Color 5: #020ace - supporting surface or hover state
- Color 6: #981704 - supporting surface or hover state
- Color 7: #03129b - supporting surface or hover state
- Color 8: #55490c - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Menlo
- Secondary: MetamorBit
- Support: FKGroteskMonoTrial-Regular
- Support: FKGroteskSemiMonoTrial-Regular

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 0px / weight 400 / line-height normal
- Button sample: 0px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(255, 255, 0) text.
- Links inherit #4f090a as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Menlo in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#070201) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (music, participative, retro) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Menlo consistently for headlines and interface labels.
- Keep the palette anchored to #070201, #056206, and #4f090a.
- Preserve the experimental posture signaled by the loadmo.re tags: music, participative, retro.
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

> Build a responsive landing page inspired by Communal Radio Club. Keep the palette centered on #070201, #056206, and #4f090a. Use Menlo for headlines, preserve the sonic pacing, retro-computing cues mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/communal-radio-club)
- Live site: https://communalradio.club/
- Credits: Halim Lee
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

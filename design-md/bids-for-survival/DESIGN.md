# Design System Inspiration of Bids for Survival

## 1. Visual Theme & Atmosphere

Bids for Survival reads as playful interaction, spatial depth. The live capture resolves to a dark-leaning system built around #1d1c1c, #5d5d59, and accent notes from #9f9f9a. An immersive experience that offers a dive within a photogrammetric world, guided with voiceovers and and cut-scenes.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Helvetica Now Text, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #1d1c1c, #5d5d59, #9f9f9a, #8e8976
- Typography stack: Helvetica Now Text, Century Schoolbook Mono
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #1d1c1c - canvas / dominant background
- Color 2: #5d5d59 - primary text or opposing surface
- Color 3: #9f9f9a - accent / interactive signal
- Color 4: #8e8976 - supporting surface or hover state
- Color 5: #d6d6d5 - supporting surface or hover state
- Color 6: #46423c - supporting surface or hover state
- Color 7: #857969 - supporting surface or hover state
- Color 8: #443b37 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Helvetica Now Text
- Secondary: Century Schoolbook Mono

### Hierarchy Snapshot
- Heading sample: 14px / weight 400 / letter-spacing 1.68px
- Body sample: 14px / weight 400 / line-height 14px
- Button sample: 15px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(0, 0, 0) text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 12.7344px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Helvetica Now Text in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#1d1c1c) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (3d-space, game, participative) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 3px.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Helvetica Now Text consistently for headlines and interface labels.
- Keep the palette anchored to #1d1c1c, #5d5d59, and #9f9f9a.
- Preserve the experimental posture signaled by the loadmo.re tags: 3d-space, game, participative.
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

> Build a responsive landing page inspired by Bids for Survival. Keep the palette centered on #1d1c1c, #5d5d59, and #9f9f9a. Use Helvetica Now Text for headlines, preserve the playful interaction, spatial depth mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/bids-for-survival)
- Live site: https://bidsforsurvival.com/
- Credits: Michael Schindhelm
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

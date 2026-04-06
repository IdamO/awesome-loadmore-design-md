# Design System Inspiration of Emoji To Scale

## 1. Visual Theme & Atmosphere

Emoji To Scale reads as restrained minimalism, playful interaction. The live capture resolves to a light-leaning system built around #ededed, #261e1a, and accent notes from #d6a56e. A guy just decided he would create a website to classify emojis based on the actual scale of represented objects.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Brutalita, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #ededed, #261e1a, #d6a56e, #a6a09c
- Typography stack: Brutalita
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #ededed - canvas / dominant background
- Color 2: #261e1a - primary text or opposing surface
- Color 3: #d6a56e - accent / interactive signal
- Color 4: #a6a09c - supporting surface or hover state
- Color 5: #665953 - supporting surface or hover state
- Color 6: #523526 - supporting surface or hover state
- Color 7: #ae8960 - supporting surface or hover state
- Color 8: #945929 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Brutalita

### Hierarchy Snapshot
- Heading sample: 25px / weight 400 / letter-spacing -1px
- Body sample: 20px / weight 400 / line-height normal
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(35, 120, 176) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Brutalita in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#ededed) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (playful, minimal) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: rgb(35, 120, 176) 0px -1px 0px 0px inset.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Brutalita consistently for headlines and interface labels.
- Keep the palette anchored to #ededed, #261e1a, and #d6a56e.
- Preserve the experimental posture signaled by the loadmo.re tags: playful, minimal.
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

> Build a responsive landing page inspired by Emoji To Scale. Keep the palette centered on #ededed, #261e1a, and #d6a56e. Use Brutalita for headlines, preserve the restrained minimalism, playful interaction mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/emoji-to-scale)
- Live site: https://javier.xyz/emoji-to-scale/
- Credits: Javier Bórquez
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

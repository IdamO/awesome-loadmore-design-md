# Design System Inspiration of Make Word Art

## 1. Visual Theme & Atmosphere

Make Word Art reads as playful interaction, retro-computing cues. The live capture resolves to a light-leaning system built around #f5f5f5, #8d8d8e, and accent notes from #215ba7. Go back in time with this nice web adaptation of the coolest typographic tool from the 2000s.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Impact, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #f5f5f5, #8d8d8e, #215ba7, #787877
- Typography stack: Impact
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #f5f5f5 - canvas / dominant background
- Color 2: #8d8d8e - primary text or opposing surface
- Color 3: #215ba7 - accent / interactive signal
- Color 4: #787877 - supporting surface or hover state
- Color 5: #10338d - supporting surface or hover state
- Color 6: #6e788c - supporting surface or hover state
- Color 7: #7a8596 - supporting surface or hover state
- Color 8: #062279 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Impact

### Hierarchy Snapshot
- Heading sample: 12px / weight 400 / letter-spacing normal
- Body sample: 12px / weight 400 / line-height 18px
- Button sample: 12px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgb(192, 192, 192) backgrounds with rgb(128, 128, 128) text.
- Links inherit rgb(255, 255, 255) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: rgb(223, 223, 223) 1px 1px 0px 0px inset, rgb(0, 0, 0) 1px 0px 0px 0px, rgb(0, 0, 0) 0px 1px 0px 0px, rgb(0, 0, 0) 1px 1px 0px 0px.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Impact in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#f5f5f5) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (playful, retro, default-aesthetics) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: rgb(223, 223, 223) 1px 1px 0px 0px inset, rgb(0, 0, 0) 1px 0px 0px 0px, rgb(0, 0, 0) 0px 1px 0px 0px, rgb(0, 0, 0) 1px 1px 0px 0px.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Impact consistently for headlines and interface labels.
- Keep the palette anchored to #f5f5f5, #8d8d8e, and #215ba7.
- Preserve the experimental posture signaled by the loadmo.re tags: playful, retro, default-aesthetics.
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

> Build a responsive landing page inspired by Make Word Art. Keep the palette centered on #f5f5f5, #8d8d8e, and #215ba7. Use Impact for headlines, preserve the playful interaction, retro-computing cues mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/makewordart)
- Live site: https://makewordart.com/
- Credits: Mike Mcmillan
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

# Design System Inspiration of Hudson Mohawke

## 1. Visual Theme & Atmosphere

Hudson Mohawke reads as sonic pacing. The live capture resolves to a dark-leaning system built around #345012, #6592f2, and accent notes from #dee3eb. Fun early 2000s Windows XP user interface vibe, including a rude Clippy character (the paperclip guy on Microsoft Word).

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Icons, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #345012, #6592f2, #dee3eb, #6b9317
- Typography stack: Icons, Fragment Mono, Press Start 2P
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #345012 - canvas / dominant background
- Color 2: #6592f2 - primary text or opposing surface
- Color 3: #dee3eb - accent / interactive signal
- Color 4: #6b9317 - supporting surface or hover state
- Color 5: #93b1ee - supporting surface or hover state
- Color 6: #1d64df - supporting surface or hover state
- Color 7: #4e6b17 - supporting surface or hover state
- Color 8: #b2c7f0 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Icons
- Secondary: Fragment Mono
- Support: Press Start 2P
- Support: itc-avant-garde-gothic-pro
- Support: comic-sans-ms
- Support: tondo

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 14.112px / weight 400 / line-height normal
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgba(255, 255, 255, 0.9) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Icons in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#345012) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (net.art, music, sound-design) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Icons consistently for headlines and interface labels.
- Keep the palette anchored to #345012, #6592f2, and #dee3eb.
- Preserve the experimental posture signaled by the loadmo.re tags: net.art, music, sound-design.
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

> Build a responsive landing page inspired by Hudson Mohawke. Keep the palette centered on #345012, #6592f2, and #dee3eb. Use Icons for headlines, preserve the sonic pacing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/hudson-mohawke)
- Live site: http://www.hudsonmohawke.com/
- Credits: DXR Zone
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

# Design System Inspiration of Fuse.kiwi – Interesting Internet

## 1. Visual Theme & Atmosphere

Fuse.kiwi – Interesting Internet reads as restrained minimalism, exhibition-like framing. The live capture resolves to a light-leaning system built around #ededed, #1f201e, and accent notes from #92f54a. Collection of digital references, with new links posted weekly that disappear after 7 days.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Syne, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #ededed, #1f201e, #92f54a, #a3a4a2
- Typography stack: Syne, Syne Mono, Syne Tactile
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #ededed - canvas / dominant background
- Color 2: #1f201e - primary text or opposing surface
- Color 3: #92f54a - accent / interactive signal
- Color 4: #a3a4a2 - supporting surface or hover state
- Color 5: #5a605c - supporting surface or hover state
- Color 6: #8bf63c - supporting surface or hover state
- Color 7: #619d31 - supporting surface or hover state
- Color 8: #c8e5b1 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Syne
- Secondary: Syne Mono
- Support: Syne Tactile

### Hierarchy Snapshot
- Heading sample: 240px / weight 500 / letter-spacing -12px
- Body sample: 14px / weight 500 / line-height 16px
- Button sample: 24px / weight 500

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(26, 26, 26) text.
- Links inherit rgb(26, 26, 26) as the interaction signal.
- Border radius trends: 4px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Syne in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#ededed) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (tactile, clean-ui, arts&culture) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 24px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Syne consistently for headlines and interface labels.
- Keep the palette anchored to #ededed, #1f201e, and #92f54a.
- Preserve the experimental posture signaled by the loadmo.re tags: tactile, clean-ui, arts&culture.
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

> Build a responsive landing page inspired by Fuse.kiwi – Interesting Internet. Keep the palette centered on #ededed, #1f201e, and #92f54a. Use Syne for headlines, preserve the restrained minimalism, exhibition-like framing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/fuse-kiwi-interesting-internet)
- Live site: https://www.fuse.kiwi/
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

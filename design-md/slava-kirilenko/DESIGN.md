# Design System Inspiration of Slava Kirilenko

## 1. Visual Theme & Atmosphere

Slava Kirilenko reads as restrained minimalism, type-led composition. The live capture resolves to a light-leaning system built around #fafafa, #6f6e6d, and accent notes from #a29f9f. A portfolio website for type designer Slava Kirilenko that features a site-wide editable type explorer.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers Futura, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fafafa, #6f6e6d, #a29f9f, #131112
- Typography stack: Futura, Jost
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #fafafa - canvas / dominant background
- Color 2: #6f6e6d - primary text or opposing surface
- Color 3: #a29f9f - accent / interactive signal
- Color 4: #131112 - supporting surface or hover state
- Color 5: #582f16 - supporting surface or hover state
- Color 6: #936d5a - supporting surface or hover state
- Color 7: #d4a59a - supporting surface or hover state
- Color 8: #20579b - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Futura
- Secondary: Jost

### Hierarchy Snapshot
- Heading sample: 16px / weight 500 / letter-spacing normal
- Body sample: 14px / weight 400 / line-height 14px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Futura in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fafafa) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio, typography, clean-ui) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: rgba(0, 0, 0, 0.05) 0px 2px 5px 0px.
- Radius cue: 5px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Futura consistently for headlines and interface labels.
- Keep the palette anchored to #fafafa, #6f6e6d, and #a29f9f.
- Preserve the experimental posture signaled by the loadmo.re tags: portfolio, typography, clean-ui.
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

> Build a responsive landing page inspired by Slava Kirilenko. Keep the palette centered on #fafafa, #6f6e6d, and #a29f9f. Use Futura for headlines, preserve the restrained minimalism, type-led composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/slava-kirilenko)
- Live site: https://slavakirilenko.com/
- Credits: White Russian Studio
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

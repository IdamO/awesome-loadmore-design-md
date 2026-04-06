# Design System Inspiration of Pizza Pizza

## 1. Visual Theme & Atmosphere

Pizza Pizza reads as restrained minimalism, type-led composition. The live capture resolves to a dark-leaning system built around #e6001c, #a10517, and accent notes from #1c0406. A website that feels like browsing an app. Smooth transitions, sleek design.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers ABC Diatype, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #e6001c, #a10517, #1c0406, #61040e
- Typography stack: ABC Diatype
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #e6001c - canvas / dominant background
- Color 2: #a10517 - primary text or opposing surface
- Color 3: #1c0406 - accent / interactive signal
- Color 4: #61040e - supporting surface or hover state
- Color 5: #f7f2f2 - supporting surface or hover state
- Color 6: #a8a0a0 - supporting surface or hover state
- Color 7: #f0bec4 - supporting surface or hover state
- Color 8: #595959 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: ABC Diatype

### Hierarchy Snapshot
- Heading sample: 116.64px / weight 400 / letter-spacing -4.6656px
- Body sample: 22px / weight 400 / line-height 26px
- Button sample: 18px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(0, 0, 0) text.
- Links inherit rgb(255, 255, 255) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps ABC Diatype in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#e6001c) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (portfolio, typography, clean-ui) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 96px.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use ABC Diatype consistently for headlines and interface labels.
- Keep the palette anchored to #e6001c, #a10517, and #1c0406.
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

> Build a responsive landing page inspired by Pizza Pizza. Keep the palette centered on #e6001c, #a10517, and #1c0406. Use ABC Diatype for headlines, preserve the restrained minimalism, type-led composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/pizza-pizza)
- Live site: https://pizzapizza.io/
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

# Design System Inspiration of Stripe Press

## 1. Visual Theme & Atmosphere

Stripe Press reads as spatial depth. The live capture resolves to a dark-leaning system built around #21181a, #5e5e5f, and accent notes from #592435. Scroll through a 3D virtual bookshelf to discover the publications released by Stripe Press.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers Ivar Display, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #21181a, #5e5e5f, #592435, #a9a791
- Typography stack: Ivar Display, Ivar Headline, Ivar Text
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #21181a - canvas / dominant background
- Color 2: #5e5e5f - primary text or opposing surface
- Color 3: #592435 - accent / interactive signal
- Color 4: #a9a791 - supporting surface or hover state
- Color 5: #2f3a46 - supporting surface or hover state
- Color 6: #883352 - supporting surface or hover state
- Color 7: #cbc8a3 - supporting surface or hover state
- Color 8: #7a2e47 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: Ivar Display
- Secondary: Ivar Headline
- Support: Ivar Text

### Hierarchy Snapshot
- Heading sample: 17.6px / weight 600 / letter-spacing 0.32px
- Body sample: 25px / weight 500 / line-height 37.5px
- Button sample: 16px / weight 600

## 4. Component Stylings

### Web
- Buttons tend toward rgb(110, 102, 91) backgrounds with rgb(223, 199, 142) text.
- Links inherit rgb(223, 199, 142) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps Ivar Display in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#21181a) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (3d-space, e-commerce) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use Ivar Display consistently for headlines and interface labels.
- Keep the palette anchored to #21181a, #5e5e5f, and #592435.
- Preserve the experimental posture signaled by the loadmo.re tags: 3d-space, e-commerce.
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

> Build a responsive landing page inspired by Stripe Press. Keep the palette centered on #21181a, #5e5e5f, and #592435. Use Ivar Display for headlines, preserve the spatial depth mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/stripe-press)
- Live site: https://press.stripe.com/
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

# Design System Inspiration of Come Shave

## 1. Visual Theme & Atmosphere

Come Shave reads as playful interaction. The live capture resolves to a dark-leaning system built around #62a16f, #78cb8a, and accent notes from #497452. Fancy shaving a website? There you go. Watch out, digital hair's regrowth is quick!

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers gt_alpinalight, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #62a16f, #78cb8a, #497452, #70bc81
- Typography stack: gt_alpinalight
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #62a16f - canvas / dominant background
- Color 2: #78cb8a - primary text or opposing surface
- Color 3: #497452 - accent / interactive signal
- Color 4: #70bc81 - supporting surface or hover state
- Color 5: #81db94 - supporting surface or hover state
- Color 6: #3c5f43 - supporting surface or hover state
- Color 7: #35513a - supporting surface or hover state
- Color 8: #253929 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: gt_alpinalight

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 48px / weight 400 / line-height normal
- Button sample: 48px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(0, 0, 0) text.
- Links inherit #497452 as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps gt_alpinalight in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#62a16f) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (tactile, net.art, playful) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use gt_alpinalight consistently for headlines and interface labels.
- Keep the palette anchored to #62a16f, #78cb8a, and #497452.
- Preserve the experimental posture signaled by the loadmo.re tags: tactile, net.art, playful.
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

> Build a responsive landing page inspired by Come Shave. Keep the palette centered on #62a16f, #78cb8a, and #497452. Use gt_alpinalight for headlines, preserve the playful interaction mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/come-shave)
- Live site: https://www.comeshave.com/
- Credits: Studio Moniker, Alexandra Barancova, Jae Perris
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

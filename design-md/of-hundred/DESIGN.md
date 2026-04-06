# Design System Inspiration of Of Hundred

## 1. Visual Theme & Atmosphere

Of Hundred reads as restrained minimalism, sonic pacing. The live capture resolves to a light-leaning system built around #fdfcfc, #ebaba8, and accent notes from #ec5e5a. Online radio show that curates various range of sounds.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers NHaasGroteskDSPro-95Blk, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fdfcfc, #ebaba8, #ec5e5a, #ed322c
- Typography stack: NHaasGroteskDSPro-95Blk, Swiss721BT-Regular
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #fdfcfc - canvas / dominant background
- Color 2: #ebaba8 - primary text or opposing surface
- Color 3: #ec5e5a - accent / interactive signal
- Color 4: #ed322c - supporting surface or hover state
- Color 5: #ecc0bd - supporting surface or hover state
- Color 6: #ec423c - supporting surface or hover state
- Color 7: #ee817d - supporting surface or hover state
- Color 8: #e6bec1 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: NHaasGroteskDSPro-95Blk
- Secondary: Swiss721BT-Regular

### Hierarchy Snapshot
- Heading sample: 76px / weight 300 / letter-spacing normal
- Body sample: 14px / weight 300 / line-height normal
- Button sample: 14px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgb(255, 255, 255) backgrounds with rgb(238, 56, 49) text.
- Links inherit rgb(0, 0, 238) as the interaction signal.
- Border radius trends: 50%.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps NHaasGroteskDSPro-95Blk in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fdfcfc) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (music, minimal) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 50%.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use NHaasGroteskDSPro-95Blk consistently for headlines and interface labels.
- Keep the palette anchored to #fdfcfc, #ebaba8, and #ec5e5a.
- Preserve the experimental posture signaled by the loadmo.re tags: music, minimal.
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

> Build a responsive landing page inspired by Of Hundred. Keep the palette centered on #fdfcfc, #ebaba8, and #ec5e5a. Use NHaasGroteskDSPro-95Blk for headlines, preserve the restrained minimalism, sonic pacing mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/of-hundred)
- Live site: https://ofhundred.com/
- Credits: David Rindlisbacher, Arne Spremberg
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

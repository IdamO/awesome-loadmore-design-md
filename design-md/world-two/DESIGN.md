# Design System Inspiration of World Two

## 1. Visual Theme & Atmosphere

World Two reads as playful interaction. The live capture resolves to a light-leaning system built around #faf8f7, #01a3f5, and accent notes from #036f2c. Straight-forward interface to browse a stack of cards. Each card generated has an illustration and a title, randomly associated to question its meaning.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers altehaasgroteskregular, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #faf8f7, #01a3f5, #036f2c, #a7694e
- Typography stack: altehaasgroteskregular, altehaasgroteskbold
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #faf8f7 - canvas / dominant background
- Color 2: #01a3f5 - primary text or opposing surface
- Color 3: #036f2c - accent / interactive signal
- Color 4: #a7694e - supporting surface or hover state
- Color 5: #0164fb - supporting surface or hover state
- Color 6: #0ba945 - supporting surface or hover state
- Color 7: #db0d03 - supporting surface or hover state
- Color 8: #fd9500 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: altehaasgroteskregular
- Secondary: altehaasgroteskbold

### Hierarchy Snapshot
- Heading sample: 40px / weight 400 / letter-spacing normal
- Body sample: 24px / weight 400 / line-height 28.8px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps altehaasgroteskregular in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#faf8f7) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (participative, game, colorful) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: rgba(0, 0, 0, 0.39) 0px 0px 10px 0px.
- Radius cue: 10px.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use altehaasgroteskregular consistently for headlines and interface labels.
- Keep the palette anchored to #faf8f7, #01a3f5, and #036f2c.
- Preserve the experimental posture signaled by the loadmo.re tags: participative, game, colorful.
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

> Build a responsive landing page inspired by World Two. Keep the palette centered on #faf8f7, #01a3f5, and #036f2c. Use altehaasgroteskregular for headlines, preserve the playful interaction mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/world-two)
- Live site: http://www.world2.uk/
- Credits: Two Much, Thomas Hedger,
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

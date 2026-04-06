# Design System Inspiration of Han Kjøbenhavn

## 1. Visual Theme & Atmosphere

Han Kjøbenhavn reads as editorial fashion energy. The live capture resolves to a light-leaning system built around #fcfafa, #5e615e, and accent notes from #18171b. Interesting layout concept for this e-commerce that explore the aesthetics of google sheets.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers GTStandard-M, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fcfafa, #5e615e, #18171b, #aa9d9a
- Typography stack: GTStandard-M, Manrope, Poppins
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #fcfafa - canvas / dominant background
- Color 2: #5e615e - primary text or opposing surface
- Color 3: #18171b - accent / interactive signal
- Color 4: #aa9d9a - supporting surface or hover state
- Color 5: #9c1729 - supporting surface or hover state
- Color 6: #63181f - supporting surface or hover state
- Color 7: #314d4e - supporting surface or hover state
- Color 8: #926d68 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: GTStandard-M
- Secondary: Manrope
- Support: Poppins
- Support: Avenir_Nex_pro_regular
- Support: Avenir_Next_Pro_Bold

### Hierarchy Snapshot
- Heading sample: 18px / weight 600 / letter-spacing 0.27px
- Body sample: 16px / weight 400 / line-height normal
- Button sample: 12px / weight 700

## 4. Component Stylings

### Web
- Buttons tend toward rgb(0, 0, 0) backgrounds with rgb(255, 255, 255) text.
- Links inherit rgb(0, 0, 0) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps GTStandard-M in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fcfafa) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (e-commerce, fashion, default-aesthetics) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use GTStandard-M consistently for headlines and interface labels.
- Keep the palette anchored to #fcfafa, #5e615e, and #18171b.
- Preserve the experimental posture signaled by the loadmo.re tags: e-commerce, fashion, default-aesthetics.
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

> Build a responsive landing page inspired by Han Kjøbenhavn. Keep the palette centered on #fcfafa, #5e615e, and #18171b. Use GTStandard-M for headlines, preserve the editorial fashion energy mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/han-kjobenhavn)
- Live site: https://hankjobenhavn.com/
- Credits: not listed
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

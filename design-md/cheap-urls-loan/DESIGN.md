# Design System Inspiration of Cheap URLs Loan

## 1. Visual Theme & Atmosphere

Cheap URLs Loan reads as restrained minimalism, retro-computing cues. The live capture resolves to a light-leaning system built around #fbfbfc, #a3a7d2, and accent notes from #e7a09f. Retro leaflet vibes promoting affordable, fast, and convenient websites. A super minimal one-pager with a clever 'verso' detail. We're sold—take our money!

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #fbfbfc, #a3a7d2, #e7a09f, #dd6565
- Typography stack: system fallback
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. Color Palette & Roles

- Color 1: #fbfbfc - canvas / dominant background
- Color 2: #a3a7d2 - primary text or opposing surface
- Color 3: #e7a09f - accent / interactive signal
- Color 4: #dd6565 - supporting surface or hover state
- Color 5: #656cbb - supporting surface or hover state
- Color 6: #7278c2 - supporting surface or hover state
- Color 7: #bdc1dd - supporting surface or hover state
- Color 8: #d92d2d - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: system UI

### Hierarchy Snapshot
- Heading sample: 24px / weight 700 / letter-spacing normal
- Body sample: 16px / weight 400 / line-height 20.8px
- Button sample: n/a / weight n/a

## 4. Component Stylings

### Web
- Buttons tend toward transparent backgrounds with inherit text.
- Links inherit rgb(218, 3, 3) as the interaction signal.
- Border radius trends: 0px.
- Shadow language: minimal / none detected.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps the primary stack in control.

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#fbfbfc) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (retro, minimal) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: flat surfaces / contrast-only separation.
- Radius cue: square corners dominate.
- Contrast cue: dark text on light surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #fbfbfc, #a3a7d2, and #e7a09f.
- Preserve the experimental posture signaled by the loadmo.re tags: retro, minimal.
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

> Build a responsive landing page inspired by Cheap URLs Loan. Keep the palette centered on #fbfbfc, #a3a7d2, and #e7a09f. Use the extracted primary font for headlines, preserve the restrained minimalism, retro-computing cues mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/cheap-urls-loan)
- Live site: https://cheap.urls.loan/
- Credits: Elijah Beaton
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

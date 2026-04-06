# Design System Inspiration of Too Busy Foundation

## 1. Visual Theme & Atmosphere

Too Busy Foundation reads as experimental mobile-first composition. The live capture resolves to a dark-leaning system built around #050506, #565952, and accent notes from #531212. Image archive shedding light on the hidden epidemic of human trafficking through embedded facts and statistics.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes anchored chrome and fixed-position framing, while mobile compresses the same language into tighter interaction zones. The site's type system centers __ppmono_6b0fd0, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: cinematic dark surfaces with bright contrast
- Core palette: #050506, #565952, #531212, #ebedeb
- Typography stack: __ppmono_6b0fd0, __ppmono_Fallback_6b0fd0, __realgar_1d9602
- Desktop posture: fixed/sticky framing
- Mobile posture: sticky, app-like chrome

## 2. Color Palette & Roles

- Color 1: #050506 - canvas / dominant background
- Color 2: #565952 - primary text or opposing surface
- Color 3: #531212 - accent / interactive signal
- Color 4: #ebedeb - supporting surface or hover state
- Color 5: #a2a99f - supporting surface or hover state
- Color 6: #354a4b - supporting surface or hover state
- Color 7: #112e4c - supporting surface or hover state
- Color 8: #4d4b36 - supporting surface or hover state

## 3. Typography Rules

### Font Families
- Primary: __ppmono_6b0fd0
- Secondary: __ppmono_Fallback_6b0fd0
- Support: __realgar_1d9602
- Support: __realgar_Fallback_1d9602

### Hierarchy Snapshot
- Heading sample: 30px / weight 400 / letter-spacing normal
- Body sample: 30px / weight 400 / line-height 36px
- Button sample: 16px / weight 400

## 4. Component Stylings

### Web
- Buttons tend toward rgba(0, 0, 0, 0) backgrounds with rgb(255, 255, 255) text.
- Links inherit #531212 as the interaction signal.
- Border radius trends: 999px.
- Shadow language: none.

### Mobile
- Mobile preserves the same palette while reducing surface area and increasing gesture weight.
- Recreate the mobile feel with oversized tap targets, single-column pacing, and typography that keeps __ppmono_6b0fd0 in control.

## 5. Layout Principles

- Use a framed viewport with anchored navigation on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#050506) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (educational, photography) imply the site is intentionally non-generic.

## 6. Depth & Elevation

- Primary depth cue: none.
- Radius cue: 999px.
- Contrast cue: light text on dark surfaces with accent interruptions.

## 7. Do's and Don'ts

### Do
- Use __ppmono_6b0fd0 consistently for headlines and interface labels.
- Keep the palette anchored to #050506, #565952, and #531212.
- Preserve the experimental posture signaled by the loadmo.re tags: educational, photography.
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

> Build a responsive landing page inspired by Too Busy Foundation. Keep the palette centered on #050506, #565952, and #531212. Use __ppmono_6b0fd0 for headlines, preserve the experimental mobile-first composition mood, and treat desktop and mobile as distinct compositions rather than a single squashed layout.

## 10. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/we-are-too-busy-foundation)
- Live site: https://weare.toobusy.foundation/
- Credits: Your Majesty
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

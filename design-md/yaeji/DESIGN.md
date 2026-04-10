# Design System Inspiration of Yaeji

## 1. Visual Theme & Atmosphere

Yaeji reads as sonic pacing, retro-computing cues. The live capture resolves to a light-leaning system built around #e2dcd3, #59585f, and accent notes from #1b1d2a. Yaeji is cool. Her website is very cute and comes with a drawing tool.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers 5final, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #e2dcd3, #59585f, #1b1d2a, #a49996
- Typography stack: 5final, RadioGrotesk
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. World Systems & Archetype

### World Systems
- Primary: Cozy Desktop - tags include retro; archetype affinity: retro tool emulator
- Secondary: Club Instrument - tags include music

### Interaction Archetype
- Archetype: Retro Tool Emulator (91% confidence)
- Why: tags include retro; description mentions tool
- Core verbs: edit, preset, export, draw
- Inputs: tap, drag, type



## 3. Color Palette & Roles

- Color 1: #e2dcd3 - canvas / dominant background
- Color 2: #59585f - primary text or opposing surface
- Color 3: #1b1d2a - accent / interactive signal
- Color 4: #a49996 - supporting surface or hover state
- Color 5: #333845 - supporting surface or hover state
- Color 6: #946f5e - supporting surface or hover state
- Color 7: #c7b3a7 - supporting surface or hover state
- Color 8: #ad8a72 - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: 5final
- Secondary: RadioGrotesk

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 24.5px / weight 400 / line-height normal
- Button sample: n/a / weight n/a

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#e2dcd3) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (music, illustration, retro) imply the system is intentionally non-generic.
- Buttons tend toward transparent backgrounds with inherit text, and links inherit rgb(248, 214, 216) as the interaction signal.

## 6. Interaction Mechanics

- Primary model: retro_tool_emulator
- Navigation structure: hub / wayfinding explicit / friction medium
- Navigation model: The utility surface is primary; menus, presets, and output views are the main navigation.
- State model: Pick tool or preset -> adjust parameters -> render or export -> reset or save.
- Must-keep mechanic: The interface behaves like a remembered app: menus, presets, panels, export, and toy controls are the product.

## 7. Motion System

- Density: low
- Cadence: event-driven
- Triggers: pointer, keyboard
- Transition types: cut, menu-drop, panel-swap
- Physics level: none
- Motion recipe:
  - Keep animation minimal and rely on press states, panel swaps, menu drops, and render feedback.
  - Use progress or export states to sell the utility fiction.
  - Avoid floaty transitions; remembered apps feel decisive.

## 8. Spatial Model

- Space type: flat
- Camera behavior: fixed
- Depth cues: scale
- HUD layering: overlay
- Render tier: mixed
- Primary depth cue in capture: flat surfaces / contrast-only separation

## 9. Participation & State

- Participation mode: customize
- Persistence: saved
- Inputs to preserve: tap, drag, type
- Reset/save posture: Persist enough state that revisits feel intentional.

## 10. Sound & Sensor Behavior

- Audio role: none
- Audio triggers: none
- Controls: none
- Sync: none
- Required APIs or platform hooks: canvas

## 11. Implementation Checklist

- Complexity: medium
- Required APIs: canvas
- Must-have mechanics:
  - Keep the tool affordances obvious enough that users can generate output immediately.
  - Export or save flow should feel like part of the charm, not plumbing.
  - Use nostalgia as structure, not as a skin pasted over generic controls.
- Nice-to-have embellishments:
  - tags include retro
  - description mentions tool
- Mobile fallback: Turn dense panels into a one-tool-at-a-time inspector or wizard while preserving the visual chrome.
- Fallback path: wizard-flow, reduced-motion
- Manual validation:
  - The core generate or edit loop is obvious.
  - Preset, render, or export states read clearly.
  - Mobile isolates one tool region at a time.

## 12. Do's and Don'ts

### Do
- Use 5final consistently for headlines and interface labels.
- Keep the palette anchored to #e2dcd3, #59585f, and #1b1d2a.
- Preserve the experimental posture signaled by the archive tags: music, illustration, retro.
- Build separate desktop and mobile compositions instead of pretending one layout can fake both.
- Use the inferred mechanics schema as the implementation baseline before adding ornament.

### Don't
- Don't genericize the interface into a default SaaS landing page.
- Don't introduce rounded, pastel, or glassmorphism defaults unless the captured site already does.
- Don't replace the extracted font stack with Inter/Roboto/system as the main voice unless no custom stack loaded.
- Don't ignore the mobile fallback just because the desktop interaction is more fun.
- Don't copy screenshots literally when the repo only has archival capture evidence.

## 13. Responsive Behavior

- Desktop capture uses screenshots/desktop.jpg as the visual baseline.
- Mobile capture uses screenshots/mobile.jpg as the mobile baseline.
- Keep touch targets oversized on mobile and allow the background system to dominate the viewport.
- Implement mobile as: Turn dense panels into a one-tool-at-a-time inspector or wizard while preserving the visual chrome..
- If the live site failed to capture, fall back to the archival poster on the loadmo.re post page before inventing missing behavior.

## 14. Agent Prompt Guide

Use this when asking an AI coding agent to recreate the feel:

> Build this as a Cozy Desktop page with a secondary cue from Club Instrument using the Retro Tool Emulator interaction model. Keep 5final as the voice anchor, preserve the palette around #e2dcd3, #59585f, #1b1d2a, drive the page through tap, drag, type, and implement the mobile fallback as: Turn dense panels into a one-tool-at-a-time inspector or wizard while preserving the visual chrome.



## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/yaeji)
- Live site: http://yaeji.com/
- Credits: not listed
- Capture mode: live
- Desktop capture: completed
- Mobile capture: completed
- Archival fallback: not used

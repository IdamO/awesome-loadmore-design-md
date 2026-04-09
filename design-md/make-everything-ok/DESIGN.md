# Design System Inspiration of Make Everything Ok

## 1. Visual Theme & Atmosphere

Make Everything Ok reads as experimental mobile-first composition. The live capture resolves to a light-leaning system built around #e7e7e8, #f5f5f5, and accent notes from #d9d9dc. Press the magic button to make everything ok.

Desktop and mobile stay aligned but not identical: the desktop capture emphasizes a looser scroll narrative, while mobile compresses the same language into tighter interaction zones. The site's type system centers a bespoke stack, which becomes the fastest way to reproduce the feel.

Key Characteristics:
- Primary tone: bright surfaces with editorial contrast
- Core palette: #e7e7e8, #f5f5f5, #d9d9dc, #dddce1
- Typography stack: system fallback
- Desktop posture: flowing document rhythm
- Mobile posture: single-column immersive scroll

## 2. World Systems & Archetype

### World Systems
- Primary: Cozy Desktop - tags include default-aesthetics; archetype affinity: retro tool emulator
- Secondary: Collage Core - archival visual bias

### Interaction Archetype
- Archetype: Retro Tool Emulator (88% confidence)
- Why: tags include default-aesthetics; description mentions make; title mentions make
- Core verbs: edit, preset, export
- Inputs: tap, drag, type



## 3. Color Palette & Roles

- Color 1: #e7e7e8 - canvas / dominant background
- Color 2: #f5f5f5 - primary text or opposing surface
- Color 3: #d9d9dc - accent / interactive signal
- Color 4: #dddce1 - supporting surface or hover state
- Color 5: #acacac - supporting surface or hover state
- Color 6: #d1d0d3 - supporting surface or hover state
- Color 7: #676767 - supporting surface or hover state
- Color 8: #1c1c1c - supporting surface or hover state

## 4. Typography Rules

### Font Families
- Primary: system UI

### Hierarchy Snapshot
- Heading sample: n/a / weight n/a / letter-spacing normal
- Body sample: 16px / weight 400 / line-height 16px
- Button sample: n/a / weight n/a

## 5. Layout Principles

- Use a free-flowing vertical canvas on desktop.
- Keep mobile single-column and immersive rather than dashboard-like.
- Let the main background color (#e7e7e8) carry the atmosphere instead of layering multiple competing surfaces.
- Preserve asymmetry when present - the archive tags (default-aesthetics) imply the system is intentionally non-generic.
- Buttons tend toward transparent backgrounds with inherit text, and links inherit #d9d9dc as the interaction signal.

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
  - This entry relies on archival fallback captures, so use the visual direction literally and the interaction model heuristically.
  - Keep the tool affordances obvious enough that users can generate output immediately.
  - Export or save flow should feel like part of the charm, not plumbing.
  - Use nostalgia as structure, not as a skin pasted over generic controls.
- Nice-to-have embellishments:
  - tags include default-aesthetics
  - description mentions make
  - title mentions make
- Mobile fallback: Turn dense panels into a one-tool-at-a-time inspector or wizard while preserving the visual chrome.
- Fallback path: wizard-flow, reduced-motion
- Manual validation:
  - The core generate or edit loop is obvious.
  - Preset, render, or export states read clearly.
  - Mobile isolates one tool region at a time.
  - Before shipping, manually verify any interaction that the capture could not prove live.

## 12. Do's and Don'ts

### Do
- Use the primary extracted font consistently for headlines and interface labels.
- Keep the palette anchored to #e7e7e8, #f5f5f5, and #d9d9dc.
- Preserve the experimental posture signaled by the archive tags: default-aesthetics.
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

> Build this as a Cozy Desktop page with a secondary cue from Collage Core using the Retro Tool Emulator interaction model. Keep the extracted primary font as the voice anchor, preserve the palette around #e7e7e8, #f5f5f5, #d9d9dc, drive the page through tap, drag, type, and implement the mobile fallback as: Turn dense panels into a one-tool-at-a-time inspector or wizard while preserving the visual chrome.

## 15. Source Capture & Validation

- Source: loadmo.re (https://loadmo.re/posts/make-everything-ok)
- Live site: http://make-everything-ok.com/
- Credits: not listed
- Capture mode: archival-fallback
- Desktop capture: failed
- Mobile capture: completed
- Archival fallback: poster image used for missing screenshots

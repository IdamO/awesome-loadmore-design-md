# Validation Rubric

Use this after generation and before trusting a reference for implementation.

## 1. Capture truth first

- Confirm whether the entry is `live`, `mixed`, or `archival-fallback`
- If it is not `live`, trust composition and mood more than implied interaction detail
- If DOM analysis is sparse, use the description and inferred archetype as the mechanic source of truth

## 2. Lock the world and mechanic

- Pick one dominant world system
- Pick one dominant interaction archetype
- Write down the core verbs, primary inputs, and mobile fallback before building
- If you cannot name those clearly, the reference is not ready to drive a build

## 3. Verify navigation and state

- What is the navigation structure: linear, hub, room, world, map, or single-scene?
- Is wayfinding explicit or ambient?
- What are the key state changes from idle to focused to detailed to reset?
- If the page has depth, can the user stay oriented after every transition?

## 4. Verify motion as structure

- Motion should explain orientation, timing, or physical response
- Identify the cadence: ambient, continuous, event-driven, or tempo-linked
- Check whether transitions are doing real navigational work or just decoration
- Confirm the reduced-motion fallback is conceptually valid, not just disabled

## 5. Verify mobile honestly

- Do not shrink the desktop interaction and call it responsive
- Preserve the idea with fewer simultaneous interactions
- Keep one hero mechanic only
- Prefer guided tour, slider, card stack, or stepper fallbacks over broken freeform controls

## 6. Verify implementation fit

- Check the render tier: DOM, canvas, WebGL, or mixed
- Check required APIs: audio, sensors, export, CSS 3D, WebGL
- Separate must-have mechanics from nice-to-have embellishments
- If the mechanics need specialized engines, note that before building

## 7. Red flags

- The page reads like a generic hero plus screenshots despite a rich source
- The mechanic cannot be named in one sentence
- Mobile keeps impossible desktop interactions
- The repo entry has beautiful screenshots but no credible state model
- A fallback capture is being treated like verified interaction truth

## Sign-off

A reference is implementation-ready only when you can state:

- world system
- interaction archetype
- core verbs
- navigation structure
- motion cadence
- mobile fallback
- required APIs

# Poster To Website

Use this when the source is static art, album cover, poster, flyer, or editorial graphic and you need to derive a browser-native design system instead of documenting a live site.

## Core rule

Do not recreate the room mockup, frame, or storefront chrome.

Isolate the art. Then ask:
- what is the hero object?
- what is the depth model?
- what is the one motion ritual?
- what is the mobile collapse?
- what is the browser-native payoff that static print could not do?

## Translation sequence

1. Extract the main poster image, not the staged product shot.
2. Identify the dominant energy: relic, signal, atmosphere, geometry, or quiet lightbox.
3. Choose one browser metaphor:
   - object chamber
   - orbital field
   - signal slab
   - geometry tunnel
   - quiet lightbox
4. Turn the poster into one dominant hero stage with depth.
5. Pull 3-4 secondary states from the poster: annotations, material notes, rails, captions, counters, orbit labels.
6. Write the motion system before adding ornament.
7. Make mobile a guided compression of the same ritual, not a flattened copy.

## What to preserve

- headline attitude
- palette hierarchy
- material cues
- density vs stillness
- emotional temperature
- whether the piece feels collectible, atmospheric, technical, or editorial

## What to invent

- the camera model
- the interaction loop
- layered depth cues
- browser-only state changes
- responsive collapse logic
- optional sound role after user intent

## Variant transpositions

When the goal is not just "make the poster a website" but "make the poster a website for a different domain," do not keep the original hero object by default.

Translate at the layer level:
- keep the title architecture
- keep the copy atmosphere
- keep the palette hierarchy
- keep the emotional temperature
- replace the hero object cluster with a generated object kit from the new domain

Typical examples:
- storage relic -> music relic
- science object -> fashion artifact
- cosmic poster -> club flyer environment

Rule: the new object kit should feel like it could have been the original poster's subject, not like unrelated props dropped on top.

For repo entries that already define a domain remix, prefer the machine-readable variant block in `meta.json` such as `musicTransposition`. Those generated assets and prompts override the base object cluster for that remix.

## Scene families

### Artifact Monolith
- Best for: relics, machines, objects, archives, industrial collage
- Browser move: suspend one hero slab in a shallow room and orbit around it
- Motion: hover lift, card rail reveal, slow drift
- Mobile: one guided object and one evidence rail

### Orbital Atmosphere
- Best for: cosmic, dreamy, sky, cloud, drifting compositions
- Browser move: wrap the poster in parallax planes, glow rails, and halo labels
- Motion: drift, bloom, parallax wake
- Mobile: stacked atmospheric scenes with one caption rail per section

### Signal Slab
- Best for: tech posters, neural grids, code, diagnostics, machine language
- Browser move: tilt the poster into a reactive control surface with panel rails
- Motion: scanline drift, pulse, scrub, signal flash
- Mobile: one hero slab plus two stacked telemetry rails

### Geometry Chamber
- Best for: type posters, refraction, structured graphic systems, sharp layout logic
- Browser move: extrude the poster into layered type planes and refraction strips
- Motion: entrance extrusion, tilt, controlled depth shift
- Mobile: one volumetric move and one caption rail

### Quiet Lightbox
- Best for: minimal posters, restrained editorial worlds, silence-heavy compositions
- Browser move: put the poster in a calm lit room with thin caption choreography
- Motion: light sweep, micro tilt, shadow drift
- Mobile: one lightbox stage and one note at a time

## Validation

A good poster-derived website should pass all of these:
- the page feels like the poster came alive, not like the poster was pasted into a hero block
- the depth model is obvious in under three seconds
- the motion system matches the poster's emotional temperature
- the browser adds something print could not do
- mobile preserves the same soul with fewer simultaneous elements

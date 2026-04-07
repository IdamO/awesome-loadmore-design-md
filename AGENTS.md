# Agent Navigation Guide

This repo is not a flat moodboard. It is an agent-usable design retrieval system for internet-native work.

## First pass

1. Open `playbooks/scene-kit.md` first when the task is net-new design, not imitation.
2. Open `data/design-os.json` for machine-readable world, motion, type, and asset guidance.
3. Open `data/agent-index.json` for machine-readable filtering and ranking of source references.
4. Filter for `captureMode: "live"` when you need interaction truth. Use `archival-fallback` when you need visual attitude more than verified UX.
5. Prioritize the docs in `playbooks/` and `collections/` for music-tech, fashion, culture-tech, and anti-B2B directions.
6. Pick 1 dominant world system, 1 secondary interaction reference, and 1 typography/material reference. Do not copy a single site verbatim. Recombine.

## Recommended selection logic

- For a bold product launch: sort by `scores.genZPop` and `scores.weird`.
- For music tooling or artist-facing products: sort by `scores.musicTech`.
- For fashion, editorial, or culture worlds: sort by `scores.fashionCulture` and `scores.editorial`.
- For anti-corporate energy: sort by `scores.weird`, then exclude entries with `clean-ui` or `e-commerce`.

## Design OS docs

- `playbooks/scene-kit.md`
- `playbooks/world-systems.md`
- `playbooks/motion-grammar.md`
- `playbooks/type-systems.md`
- `playbooks/asset-forge.md`
- `playbooks/component-philosophy.md`
- `data/design-os.json`

## Domain starter packs

- `collections/gen-z-pop.md`
- `collections/music-tech.md`
- `collections/fashion-culture.md`
- `collections/culture-tech.md`
- `collections/anti-b2b.md`
- `collections/combo-recipes.md`

## Current repo state

- Total indexed sites: 389
- Live captures: 334
- Archival fallbacks: 55
- Minimum usable target met: yes

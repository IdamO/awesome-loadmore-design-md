# Agent Navigation Guide

This repo is not a flat moodboard. It is an agent-usable design retrieval system for internet-native work.

## First pass

1. Open `data/agent-index.json` first. It is the machine-readable entry point.
2. Filter for `captureMode: "live"` when you need interaction truth. Use `archival-fallback` when you need visual attitude more than verified UX.
3. Prioritize the collection docs in `collections/` for music-tech, fashion, culture-tech, and anti-B2B directions.
4. Pick 1 base system, 1 interaction reference, and 1 typography/color reference. Do not copy a single site verbatim. Recombine.

## Recommended selection logic

- For a bold product launch: sort by `scores.genZPop` and `scores.weird`.
- For music tooling or artist-facing products: sort by `scores.musicTech`.
- For fashion, editorial, or culture worlds: sort by `scores.fashionCulture` and `scores.editorial`.
- For anti-corporate energy: sort by `scores.weird`, then exclude entries with `clean-ui` or `e-commerce`.

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

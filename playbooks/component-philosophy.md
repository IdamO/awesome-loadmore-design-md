# Component Philosophy

The repo should not teach agents to copy a pretty component library.
It should teach them what to standardize and what to author.

## Standardize these

- keyboard and focus behavior
- menu / dialog / tooltip / popover / select / combobox logic
- form semantics
- disclosure patterns
- layout measurements and spacing tokens
- state handling and animation hooks

## Keep these authored

- surface treatments
- card compositions
- hero structures
- navigation metaphors
- ornament systems
- image framing
- motion language
- page-to-page identity

## Recommended foundations

Use unstyled or low-opinion primitives for behavior:

- Radix Primitives
- Base UI
- Ariakit

Use stronger visual kits only for internal product surfaces, not public-facing brand worlds.

## Public surface rule

A public-facing page should not reveal its component ancestry from spacing, radius, card shape, button tone, or layout rhythm.
If someone can tell what starter kit generated it, it is under-designed.

## Scene-first assembly

For net-new work, assemble in this order:

1. choose world system
2. choose scene primitives
3. choose type stack
4. choose motion grammar
5. choose materials
6. only then map behavior primitives underneath

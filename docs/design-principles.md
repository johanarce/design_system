# Design Principles

## Core Philosophy

This design system is built around three values: **constraint**, **composability**, and **predictability**.

### Constrained

Every decision has one correct answer. There are no arbitrary values — only tokens. This means:
- Spacing comes from the spacing scale, never from raw pixel values
- Colors come from the semantic palette, never from arbitrary hex codes
- Typography comes from the type scale, never from ad-hoc font sizes

Constraint is a feature, not a limitation. It makes AI-generated UI and human-authored UI look the same.

### Composable

Complex UIs are built by combining a small set of well-defined primitives. The system provides:
- Layout primitives (Stack, Inline, Grid, Container) — these own all spacing
- Semantic tokens — these own all visual decisions
- Components — these own their own internal structure only

No component adds external margins. Spacing between components is always the responsibility of a layout primitive.

### Predictable

A component used in 10 different places looks and behaves the same. This means:
- No `style` props that accept arbitrary CSS
- No `className` overrides for visual tweaks
- No component variants beyond what the token system supports

---

## Rules

1. **No inline styles** — ever
2. **No raw spacing values** — always use tokens
3. **No margins on components** — spacing via layout primitives only
4. **No arbitrary className overrides** — use variants
5. **Max 3–4 variants per component** — if you need more, reconsider the design
6. **States are not variants** — hover/focus/disabled/error are states, not separate components

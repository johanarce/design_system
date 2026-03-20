# Design System

A production-ready design system built with React, TypeScript, and Storybook. Constrained, composable, and optimized for AI-generated UI composition.

## Install

```bash
npm install
```

## Run

```bash
# Component explorer (primary interface)
npm run storybook

# Dev app
npm run dev

# Lint
npm run lint

# Format
npm run format
```

## Structure

```
src/design-system/
  tokens.ts           # All design tokens (spacing, color, type, etc.)
  primitives/
    Stack.tsx         # Vertical layout
    Inline.tsx        # Horizontal wrapping layout
    Grid.tsx          # Grid layout
    Container.tsx     # Max-width wrapper
  components/         # UI components (Button, Input, Card, etc.)
  index.ts            # Barrel export

docs/
  design-principles.md
  layout-rules.md
  token-spec.ts
```

## Principles

- **No inline styles** in application code — use tokens
- **No raw spacing/color values** — everything from tokens
- **No margins on components** — spacing via layout primitives only
- **Max 3–4 variants** per component
- **No arbitrary overrides** — use variants or file a new component

# Layout Rules

All spacing in the UI is managed by layout primitives. Components do not set their own external margins.

## Primitives

### Stack
Arranges children vertically with consistent gap.

```tsx
<Stack gap="md">
  <Card />
  <Card />
</Stack>
```

### Inline
Arranges children horizontally with wrapping, consistent gap.

```tsx
<Inline gap="sm" align="center">
  <Badge />
  <Badge />
</Inline>
```

### Grid
Arranges children in a responsive grid.

```tsx
<Grid cols={3} gap="lg">
  <Card />
  <Card />
  <Card />
</Grid>
```

### Container
Constrains max-width and centers content horizontally. The only component that adds horizontal padding.

```tsx
<Container>
  <Stack gap="xl">...</Stack>
</Container>
```

## Rules

- Only layout primitives set `gap`, `padding`, `margin`
- Components render with `display: block` or `display: flex` — never with external spacing
- Nesting primitives is encouraged; nesting the same primitive type is fine
- `align` and `justify` props follow CSS flexbox conventions

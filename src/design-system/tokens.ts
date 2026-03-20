/**
 * Design system tokens — runtime values
 *
 * Color values aligned with Apollo design system (Nexthink) as inspiration.
 * Spacing scale matches Apollo exactly. Typography kept at readable scale
 * (Apollo targets dense data UIs; this system targets customer-facing products).
 */

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
} as const;

export const radius = {
  none: '0px',
  sm: '4px',
  md: '8px',
  lg: '16px',
  full: '9999px',
} as const;

export const fontSize = {
  xs: '11px',
  sm: '13px',
  md: '15px',
  lg: '17px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '30px',
  '4xl': '36px',
} as const;

export const fontWeight = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
} as const;

export const lineHeight = {
  tight: '1.2',
  normal: '1.5',
  relaxed: '1.75',
} as const;

export const fontFamily = {
  sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  mono: '"JetBrains Mono", "Fira Code", "Cascadia Code", monospace',
} as const;

/**
 * Primitive color palette — never use directly in components.
 * Use semantic colors below.
 *
 * Values derived from Apollo's light theme token set.
 */
const palette = {
  // Neutral — derived from Apollo's neutral/UI scale
  neutral0: '#ffffff',
  neutral50: '#f5f6fa',    // Apollo app background
  neutral100: '#e8edf5',   // Apollo container-secondary / surface-subtle
  neutral200: '#d8dcea',   // Apollo disabled border
  neutral300: '#a8aebc',   // Apollo disabled text
  neutral400: '#8b93a6',
  neutral500: '#58627d',   // Apollo secondary/tertiary text
  neutral600: '#647893',   // Apollo default form border
  neutral700: '#272d36',   // Apollo primary text
  neutral800: '#1a2030',
  neutral900: '#111520',

  // Accent (brand blue) — Apollo interactive primary
  accent50: '#f1f7fc',     // Apollo selected-light / info-subtle
  accent100: '#d9eaf5',    // Apollo info border
  accent200: '#a7cde7',    // Apollo primary-disabled
  accent300: '#5da8ec',    // Apollo selected
  accent400: '#1c8ef2',    // Apollo focus ring
  accent500: '#0c6fc6',    // Apollo primary interactive
  accent600: '#0959a3',    // Apollo primary hover
  accent700: '#0c5497',    // Apollo primary active / nav-bar
  accent800: '#08568a',    // Apollo nav-primary
  accent900: '#063d63',

  // Success (green) — Apollo semantic
  success50: '#edf7ee',    // Apollo success bg
  success100: '#d1ead9',   // Apollo success border
  success500: '#377b56',   // Apollo success text
  success600: '#2d6344',

  // Warning (amber) — Apollo semantic
  warning50: '#fbf8ec',    // Apollo warning bg
  warning100: '#f1ecc8',   // Apollo warning border
  warning500: '#877336',   // Apollo warning text
  warning600: '#6b5c2b',

  // Error (red-orange) — Apollo semantic
  error50: '#fdeae8',      // Apollo error bg
  error100: '#fbdbd7',     // Apollo error border
  error500: '#ec6054',     // Apollo error text
  error600: '#ca2b16',     // Apollo destructive
  error700: '#a32210',
} as const;

export const color = {
  // Backgrounds
  background: palette.neutral50,
  surface: palette.neutral0,
  surfaceRaised: palette.neutral0,
  surfaceSubtle: palette.neutral100,

  // Borders
  border: palette.neutral200,
  borderStrong: palette.neutral600,

  // Text
  text: palette.neutral700,
  textSubtle: palette.neutral500,
  textDisabled: palette.neutral300,
  textOnAccent: palette.neutral0,

  // Accent
  accent: palette.accent500,
  accentHover: palette.accent600,
  accentActive: palette.accent700,
  accentSubtle: palette.accent50,
  focusRing: palette.accent400,

  // Semantic statuses
  success: palette.success500,
  successSubtle: palette.success50,
  warning: palette.warning500,
  warningSubtle: palette.warning50,
  error: palette.error500,
  errorSubtle: palette.error50,
  errorDestructive: palette.error600,
  info: palette.accent500,       // Apollo reuses brand blue for info
  infoSubtle: palette.accent50,
} as const;

// Apollo-derived shadows — significantly more subtle than generic CSS shadows
export const shadow = {
  none: 'none',
  sm: '0px 1px 4px rgba(136, 136, 136, 0.08)',           // Apollo container
  md: '0px 2px 8px rgba(139, 147, 166, 0.32)',            // Apollo dropdown
  lg: '0px 2px 24px rgba(139, 147, 166, 0.32)',           // Apollo dialog
  xl: '0px 4px 4px rgba(39, 45, 54, 0.16)',               // Apollo dragged
} as const;

export const transition = {
  fast: '100ms ease',
  normal: '200ms ease',
  slow: '350ms ease',
} as const;

export const zIndex = {
  base: 0,
  raised: 1,
  dropdown: 100,
  sticky: 200,
  overlay: 300,
  modal: 400,
  toast: 500,
} as const;

// Token type exports
export type Spacing = keyof typeof spacing;
export type Radius = keyof typeof radius;
export type FontSize = keyof typeof fontSize;
export type FontWeight = keyof typeof fontWeight;
export type LineHeight = keyof typeof lineHeight;
export type FontFamily = keyof typeof fontFamily;
export type Color = keyof typeof color;
export type Shadow = keyof typeof shadow;
export type Transition = keyof typeof transition;
export type ZIndex = keyof typeof zIndex;

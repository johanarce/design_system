/**
 * Design system tokens — runtime values
 *
 * All values in the design system are derived from these tokens.
 * No component or primitive uses raw CSS values directly.
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
 */
const palette = {
  // Neutral
  neutral0: '#ffffff',
  neutral50: '#f7f8f9',
  neutral100: '#f0f2f4',
  neutral200: '#e3e6eb',
  neutral300: '#c8cdd6',
  neutral400: '#9ba4b0',
  neutral500: '#6b7585',
  neutral600: '#4b5566',
  neutral700: '#333d4d',
  neutral800: '#1f2733',
  neutral900: '#111820',

  // Accent (brand blue)
  accent50: '#edf3ff',
  accent100: '#dae6ff',
  accent200: '#b3ccff',
  accent300: '#7aa8ff',
  accent400: '#4a84ff',
  accent500: '#2563eb',
  accent600: '#1d4ed8',
  accent700: '#1e40af',
  accent800: '#1e3a8a',
  accent900: '#1e3066',

  // Success (green)
  success50: '#f0fdf4',
  success100: '#dcfce7',
  success500: '#22c55e',
  success600: '#16a34a',
  success700: '#15803d',

  // Warning (amber)
  warning50: '#fffbeb',
  warning100: '#fef3c7',
  warning500: '#f59e0b',
  warning600: '#d97706',
  warning700: '#b45309',

  // Error (red)
  error50: '#fef2f2',
  error100: '#fee2e2',
  error500: '#ef4444',
  error600: '#dc2626',
  error700: '#b91c1c',

  // Info (sky)
  info50: '#f0f9ff',
  info100: '#e0f2fe',
  info500: '#0ea5e9',
  info600: '#0284c7',
  info700: '#0369a1',
} as const;

export const color = {
  // Backgrounds
  background: palette.neutral50,
  surface: palette.neutral0,
  surfaceRaised: palette.neutral0,
  surfaceSubtle: palette.neutral100,

  // Borders
  border: palette.neutral200,
  borderStrong: palette.neutral300,

  // Text
  text: palette.neutral900,
  textSubtle: palette.neutral500,
  textOnAccent: palette.neutral0,

  // Accent
  accent: palette.accent500,
  accentHover: palette.accent600,
  accentSubtle: palette.accent50,

  // Semantic statuses
  success: palette.success600,
  successSubtle: palette.success50,
  warning: palette.warning600,
  warningSubtle: palette.warning50,
  error: palette.error600,
  errorSubtle: palette.error50,
  info: palette.info600,
  infoSubtle: palette.info50,
} as const;

export const shadow = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
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

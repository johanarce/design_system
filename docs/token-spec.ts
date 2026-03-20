/**
 * Token Specification
 *
 * This file is the source of truth for all design token decisions.
 * The actual runtime tokens live in src/design-system/tokens.ts.
 *
 * Token categories:
 * - spacing: used for gap, padding (layout primitives only)
 * - radius: used for border-radius
 * - typography: font families, sizes, weights, line heights
 * - colors: primitive palette + semantic palette
 * - shadow: elevation levels
 * - transition: motion timing
 * - zIndex: layering
 */

export type SpacingScale = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
// 4px   8px   16px  24px  32px  48px   64px

export type RadiusScale = 'none' | 'sm' | 'md' | 'lg' | 'full';
// 0      4px    8px   16px   9999px

export type FontSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
// 11px  13px  15px  17px  20px  24px   30px   36px

export type FontWeight = 'regular' | 'medium' | 'semibold' | 'bold';
// 400      500      600        700

export type LineHeight = 'tight' | 'normal' | 'relaxed';
// 1.2     1.5      1.75

// Semantic color roles — components use these, never raw palette values
export type ColorRole =
  | 'background'       // page background
  | 'surface'          // card/panel background
  | 'surfaceRaised'    // elevated surface (modal, dropdown)
  | 'surfaceSubtle'    // muted surface (sidebars, headers)
  | 'border'           // default border
  | 'borderStrong'     // emphasized border
  | 'text'             // primary text
  | 'textSubtle'       // secondary/muted text
  | 'textOnAccent'     // text on colored backgrounds
  | 'accent'           // primary brand action
  | 'accentHover'      // accent on hover
  | 'accentSubtle'     // tinted accent background
  | 'success'          // positive status
  | 'successSubtle'    // positive tinted background
  | 'warning'          // caution status
  | 'warningSubtle'    // caution tinted background
  | 'error'            // destructive/error status
  | 'errorSubtle'      // error tinted background
  | 'info'             // informational status
  | 'infoSubtle';      // informational tinted background

export type ShadowScale = 'none' | 'sm' | 'md' | 'lg';

export type TransitionSpeed = 'fast' | 'normal' | 'slow';
// 100ms   200ms   350ms

export type ZIndex = 'base' | 'raised' | 'dropdown' | 'sticky' | 'overlay' | 'modal' | 'toast';

/**
 * Wayne's Wings Restaurant Color System
 * 
 * This file contains all color constants used throughout the application.
 * Colors are extracted from the Figma design and organized for consistent usage.
 */

// Brand Colors - Primary Red (#d52329)
export const PRIMARY_COLORS = {
  50: '#fef2f2',
  100: '#fee2e2',
  200: '#fecaca',
  300: '#fca5a5',
  400: '#f87171',
  500: '#d52329', // Main brand red
  600: '#b91c1c',
  700: '#991b1b',
  800: '#7f1d1d',
  900: '#450a0a',
  950: '#2c0a0a',
} as const;

// Brand Colors - Dark (#1a1819)
export const DARK_COLORS = {
  50: '#f6f6f6',
  100: '#e7e7e7',
  200: '#d1d1d1',
  300: '#b0b0b0',
  400: '#888888',
  500: '#6d6d6d',
  600: '#5d5d5d',
  700: '#4f4f4f',
  800: '#454545',
  900: '#3d3d3d',
  950: '#1a1819', // Main brand dark
} as const;

// Semantic Colors for Restaurant App
export const SEMANTIC_COLORS = {
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16',
  },
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    950: '#451a03',
  },
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a',
  },
} as const;

// Text Colors
export const TEXT_COLORS = {
  primary: '#ffffff',
  secondary: '#96959b',
  muted: '#6b7280',
  inverse: '#1a1819',
} as const;

// Background Colors
export const BACKGROUND_COLORS = {
  primary: '#1a1819',
  secondary: '#262626',
  tertiary: '#404040',
  card: 'rgba(255, 255, 255, 0.06)',
  overlay: 'rgba(0, 0, 0, 0.85)',
} as const;

// Border Colors
export const BORDER_COLORS = {
  primary: 'rgba(255, 255, 255, 0.1)',
  secondary: 'rgba(255, 255, 255, 0.16)',
  muted: 'rgba(255, 255, 255, 0.05)',
} as const;

// Additional Brand Colors
export const ACCENT_COLORS = {
  blue: '#0195ff',
  green: '#22c55e',
  yellow: '#f59e0b',
  purple: '#8b5cf6',
} as const;

// Neutral Grays for UI Elements
export const NEUTRAL_COLORS = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#e5e5e5',
  300: '#d4d4d4',
  400: '#a3a3a3',
  500: '#737373',
  600: '#525252',
  700: '#404040',
  800: '#262626',
  900: '#171717',
  950: '#0a0a0a',
} as const;

// Main Brand Colors (most commonly used)
export const BRAND = {
  primary: PRIMARY_COLORS[500], // #d52329
  dark: DARK_COLORS[950], // #1a1819
  accent: ACCENT_COLORS.blue, // #0195ff
} as const;

// Color Type Definitions
export type PrimaryColor = keyof typeof PRIMARY_COLORS;
export type DarkColor = keyof typeof DARK_COLORS;
export type SemanticColorType = keyof typeof SEMANTIC_COLORS;
export type SemanticColorShade = keyof typeof SEMANTIC_COLORS.success;
export type TextColor = keyof typeof TEXT_COLORS;
export type BackgroundColor = keyof typeof BACKGROUND_COLORS;
export type BorderColor = keyof typeof BORDER_COLORS;
export type AccentColor = keyof typeof ACCENT_COLORS;
export type NeutralColor = keyof typeof NEUTRAL_COLORS;

// Utility functions for color manipulation
export const getPrimaryColor = (shade: PrimaryColor = 500) => PRIMARY_COLORS[shade];
export const getDarkColor = (shade: DarkColor = 950) => DARK_COLORS[shade];
export const getSemanticColor = (type: SemanticColorType, shade: SemanticColorShade = 500) => 
  SEMANTIC_COLORS[type][shade];
export const getTextColor = (type: TextColor = 'primary') => TEXT_COLORS[type];
export const getBackgroundColor = (type: BackgroundColor = 'primary') => BACKGROUND_COLORS[type];
export const getBorderColor = (type: BorderColor = 'primary') => BORDER_COLORS[type];
export const getAccentColor = (type: AccentColor = 'blue') => ACCENT_COLORS[type];
export const getNeutralColor = (shade: NeutralColor = 500) => NEUTRAL_COLORS[shade];

// Restaurant-specific color combinations
export const RESTAURANT_THEME = {
  // Order status colors
  orderStatus: {
    pending: SEMANTIC_COLORS.warning[500],
    confirmed: SEMANTIC_COLORS.success[500],
    preparing: ACCENT_COLORS.blue,
    ready: SEMANTIC_COLORS.success[600],
    completed: SEMANTIC_COLORS.success[700],
    cancelled: SEMANTIC_COLORS.error[500],
  },
  // Payment status colors
  paymentStatus: {
    pending: SEMANTIC_COLORS.warning[500],
    paid: SEMANTIC_COLORS.success[500],
    failed: SEMANTIC_COLORS.error[500],
    refunded: NEUTRAL_COLORS[500],
  },
  // Priority colors
  priority: {
    low: NEUTRAL_COLORS[400],
    medium: SEMANTIC_COLORS.warning[500],
    high: SEMANTIC_COLORS.error[500],
    urgent: PRIMARY_COLORS[500],
  },
} as const;

export default {
  PRIMARY_COLORS,
  DARK_COLORS,
  SEMANTIC_COLORS,
  TEXT_COLORS,
  BACKGROUND_COLORS,
  BORDER_COLORS,
  ACCENT_COLORS,
  NEUTRAL_COLORS,
  BRAND,
  RESTAURANT_THEME,
};

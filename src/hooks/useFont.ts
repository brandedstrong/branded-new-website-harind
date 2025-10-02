import { useMemo } from 'react';
import { FONT_VARIANTS } from '../constants/fonts';
import type { FontVariant, FontVariantConfig } from '../constants/fonts';

interface UseFontReturn {
  fontFamily: string;
  fontWeight: number;
  fontStyle: string;
  fontCSS: string;
  style: React.CSSProperties;
}

/**
 * Hook to get font configuration for a specific variant
 * @param variant - The font variant to use
 * @returns Object containing font properties and CSS styles
 */
export const useFont = (variant: FontVariant): UseFontReturn => {
  const config = FONT_VARIANTS[variant];
  
  const fontCSS = useMemo(() => {
    return `${config.style} ${config.weight} 1em "${config.family}"`;
  }, [config]);

  const style = useMemo(() => ({
    fontFamily: config.family,
    fontWeight: config.weight,
    fontStyle: config.style,
  }), [config]);

  return {
    fontFamily: config.family,
    fontWeight: config.weight,
    fontStyle: config.style,
    fontCSS,
    style,
  };
};

/**
 * Hook to get all available font variants
 * @returns Array of all font variant configurations
 */
export const useAllFonts = (): FontVariantConfig[] => {
  return useMemo(() => Object.values(FONT_VARIANTS), []);
};

/**
 * Hook to get font variants by weight
 * @param weight - The font weight to filter by
 * @returns Array of font variants with the specified weight
 */
export const useFontsByWeight = (weight: number): FontVariantConfig[] => {
  return useMemo(() => {
    return Object.values(FONT_VARIANTS).filter(config => config.weight === weight);
  }, [weight]);
};

/**
 * Hook to get font variants by style
 * @param style - The font style to filter by ('normal' or 'italic')
 * @returns Array of font variants with the specified style
 */
export const useFontsByStyle = (style: 'normal' | 'italic'): FontVariantConfig[] => {
  return useMemo(() => {
    return Object.values(FONT_VARIANTS).filter(config => config.style === style);
  }, [style]);
};

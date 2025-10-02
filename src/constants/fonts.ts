export type FontVariant = 
  | 'ubuntu-light'
  | 'ubuntu-light-italic'
  | 'ubuntu-regular'
  | 'ubuntu-regular-italic'
  | 'ubuntu-medium'
  | 'ubuntu-medium-italic'
  | 'ubuntu-bold'
  | 'ubuntu-bold-italic'
  | 'bw-gradual-light'
  | 'bw-gradual-light-italic'
  | 'bw-gradual-regular'
  | 'bw-gradual-regular-italic'
  | 'bw-gradual-medium'
  | 'bw-gradual-medium-italic'
  | 'bw-gradual-bold'
  | 'bw-gradual-bold-italic'
  | 'bw-gradual-black'
  | 'bw-gradual-black-italic'
  | 'bw-gradual-thin'
  | 'bw-gradual-thin-italic'
  | 'bw-gradual-extrabold'
  | 'bw-gradual-extrabold-italic';

export interface FontVariantConfig {
  family: string;
  weight: number;
  style: 'normal' | 'italic';
  variant: FontVariant;
}

export const FONT_VARIANTS: Record<FontVariant, FontVariantConfig> = {
  // Ubuntu Font Variants
  'ubuntu-light': {
    family: 'Ubuntu',
    weight: 300,
    style: 'normal',
    variant: 'ubuntu-light',
  },
  'ubuntu-light-italic': {
    family: 'Ubuntu',
    weight: 300,
    style: 'italic',
    variant: 'ubuntu-light-italic',
  },
  'ubuntu-regular': {
    family: 'Ubuntu',
    weight: 400,
    style: 'normal',
    variant: 'ubuntu-regular',
  },
  'ubuntu-regular-italic': {
    family: 'Ubuntu',
    weight: 400,
    style: 'italic',
    variant: 'ubuntu-regular-italic',
  },
  'ubuntu-medium': {
    family: 'Ubuntu',
    weight: 500,
    style: 'normal',
    variant: 'ubuntu-medium',
  },
  'ubuntu-medium-italic': {
    family: 'Ubuntu',
    weight: 500,
    style: 'italic',
    variant: 'ubuntu-medium-italic',
  },
  'ubuntu-bold': {
    family: 'Ubuntu',
    weight: 700,
    style: 'normal',
    variant: 'ubuntu-bold',
  },
  'ubuntu-bold-italic': {
    family: 'Ubuntu',
    weight: 700,
    style: 'italic',
    variant: 'ubuntu-bold-italic',
  },
  
  // Bw Gradual DEMO Font Variants
  'bw-gradual-light': {
    family: 'Bw Gradual DEMO',
    weight: 300,
    style: 'normal',
    variant: 'bw-gradual-light',
  },
  'bw-gradual-light-italic': {
    family: 'Bw Gradual DEMO',
    weight: 300,
    style: 'italic',
    variant: 'bw-gradual-light-italic',
  },
  'bw-gradual-regular': {
    family: 'Bw Gradual DEMO',
    weight: 400,
    style: 'normal',
    variant: 'bw-gradual-regular',
  },
  'bw-gradual-regular-italic': {
    family: 'Bw Gradual DEMO',
    weight: 400,
    style: 'italic',
    variant: 'bw-gradual-regular-italic',
  },
  'bw-gradual-medium': {
    family: 'Bw Gradual DEMO',
    weight: 500,
    style: 'normal',
    variant: 'bw-gradual-medium',
  },
  'bw-gradual-medium-italic': {
    family: 'Bw Gradual DEMO',
    weight: 500,
    style: 'italic',
    variant: 'bw-gradual-medium-italic',
  },
  'bw-gradual-bold': {
    family: 'Bw Gradual DEMO',
    weight: 700,
    style: 'normal',
    variant: 'bw-gradual-bold',
  },
  'bw-gradual-bold-italic': {
    family: 'Bw Gradual DEMO',
    weight: 700,
    style: 'italic',
    variant: 'bw-gradual-bold-italic',
  },
  'bw-gradual-black': {
    family: 'Bw Gradual DEMO',
    weight: 900,
    style: 'normal',
    variant: 'bw-gradual-black',
  },
  'bw-gradual-black-italic': {
    family: 'Bw Gradual DEMO',
    weight: 900,
    style: 'italic',
    variant: 'bw-gradual-black-italic',
  },
  'bw-gradual-thin': {
    family: 'Bw Gradual DEMO',
    weight: 100,
    style: 'normal',
    variant: 'bw-gradual-thin',
  },
  'bw-gradual-thin-italic': {
    family: 'Bw Gradual DEMO',
    weight: 100,
    style: 'italic',
    variant: 'bw-gradual-thin-italic',
  },
  'bw-gradual-extrabold': {
    family: 'Bw Gradual DEMO',
    weight: 800,
    style: 'normal',
    variant: 'bw-gradual-extrabold',
  },
  'bw-gradual-extrabold-italic': {
    family: 'Bw Gradual DEMO',
    weight: 800,
    style: 'italic',
    variant: 'bw-gradual-extrabold-italic',
  },
};

// Font family constants for easy access
export const FONT_FAMILIES = {
  UBUNTU: 'Ubuntu',
  BW_GRADUAL: 'Bw Gradual DEMO',
} as const;

// Font weight constants
export const FONT_WEIGHTS = {
  THIN: 100,
  LIGHT: 300,
  REGULAR: 400,
  MEDIUM: 500,
  BOLD: 700,
  EXTRABOLD: 800,
  BLACK: 900,
} as const;

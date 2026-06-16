export interface TypographyEntry {
  classes: string[];
  tag: keyof HTMLElementTagNameMap;
}

export const typographySizes: Record<string, TypographyEntry> = {
  display:    { classes: ['text-[48px]', 'md:text-[56px]', 'lg:text-[64px]', 'font-[500]', 'leading-[1.1]', 'tracking-[-1px]', 'font-heading'], tag: 'h1' },
  h1:         { classes: ['text-[56px]', 'font-[500]', 'tracking-[-1px]', 'font-heading'], tag: 'h1' },
  h2:         { classes: ['text-[26px] md:text-5xl', 'font-[600] md:font-[500]', 'leading-[1.15]', 'font-heading'], tag: 'h2' },
  h3:         { classes: ['text-[40px]', 'font-[500]', 'font-heading'], tag: 'h3' },
  h4:         { classes: ['text-[28px]', 'font-[500]', 'font-heading'], tag: 'h4' },
  h5:         { classes: ['text-[22px]', 'font-[800]', 'font-heading'], tag: 'h5' },
  'card-title': { classes: ['text-[26px]', 'font-[900]', 'font-heading'], tag: 'p' },
  subtitle:   { classes: ['text-xl', 'leading-[1.7]'], tag: 'p' },
  'body-lg':  { classes: ['text-xl', 'leading-[1.7]'], tag: 'p' },
  body:       { classes: ['text-lg', 'leading-[1.7]'], tag: 'p' },
  'body-sm':  { classes: ['text-[15px]', 'leading-[1.6]'], tag: 'p' },
  'body-xs':  { classes: ['text-sm', 'leading-[1.5]'], tag: 'p' },
  label:      { classes: ['text-sm', 'font-[500]'], tag: 'span' },
  overline:   { classes: ['text-sm', 'font-[600]', 'tracking-[2px]', 'uppercase'], tag: 'span' },
  'overline-sm': { classes: ['font-[600]', 'tracking-[2px]', 'uppercase'], tag: 'span' },
  caption:    { classes: ['text-[13px]', 'font-[500]'], tag: 'span' },
  'caption-sm': { classes: ['text-xs', 'font-[500]'], tag: 'span' },
  editorial:  { classes: ['text-lg', 'font-[400]', 'leading-[1.9]', 'italic', 'font-editorial'], tag: 'p' },
} as const;

export type TypographySize = keyof typeof typographySizes;

export const typographyColors: Record<string, string> = {
  'brand-primary': 'text-brand-primary',
  'brand-dark': 'text-brand-dark',
  'brand-accent': 'text-brand-accent',
  'brand-accent-dark': 'text-brand-accent-dark',
  'neutral-0': 'text-neutral-0',
  'neutral-50': 'text-neutral-50',
  'neutral-100': 'text-neutral-100',
  'neutral-200': 'text-neutral-200',
  'neutral-300': 'text-neutral-300',
  'neutral-500': 'text-neutral-500',
  'neutral-600': 'text-neutral-600',
  'neutral-900': 'text-neutral-900',
  'text-primary': 'text-primary',
  'text-secondary': 'text-secondary',
  'text-tertiary': 'text-tertiary',
  'text-inverse': 'text-inverse',
} as const;

export type TypographyColor = keyof typeof typographyColors;

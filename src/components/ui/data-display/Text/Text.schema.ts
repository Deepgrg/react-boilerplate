export type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'subtitle3'
  // | 'body1'
  // | 'body2'
  // | 'button'
  | 'small'
  | 'overline'
  | 'paragraph'
  | 'label'

export type TextAs =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'span'
  | 'small'
  | 'p'
  | 'label'

export type Align =
  | 'center'
  | 'inherit'
  | 'justify'
  | 'left'
  | 'right'
  | 'start'
  | 'end'

export const VariantMapping: Record<Variant, TextAs> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  subtitle3: 'h6',
  small: 'small',
  overline: 'span',
  paragraph: 'p',
  label: 'label',
}

export const VariantClassMapping: Record<Variant, string> = {
  h1: 'text-5xl font-semibold leading-130',
  h2: 'text-4xl font-semibold leading-130',
  h3: 'text-2xl font-semibold leading-130',
  h4: 'text-xl font-semibold leading-130',
  h5: 'text-lg font-semibold leading-130',
  h6: 'text-base font-semibold leading-130',
  subtitle1: 'text-base font-semibold leading-5',
  subtitle2: 'text-sm font-medium leading-6',
  subtitle3: 'text-sm leading-4',
  small: 'text-xs font-regular leading-6',
  overline: 'text-sm uppercase leading-6',
  paragraph: 'text-base font-normal',
  label: 'text-sm font-normal leading-4',
}

export const AlignClassMapping: Record<Align, string> = {
  left: 'text-left',
  right: 'text-right',
  justify: 'text-justify',
  start: 'text-start',
  center: 'text-center',
  end: 'text-end',
  inherit: '',
}

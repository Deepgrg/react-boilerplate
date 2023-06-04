export type ColorVariant =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '550'
  | '600'
  | '700'
  | '800'
  | '900'

export type Color<Prefix extends string> =
  | `${Prefix}-${Exclude<string, ''>}-${ColorVariant}`
  | `${Prefix}-${Exclude<string, ''>}`

export type ColorWoPrefix = `${Exclude<string,''>}-${ColorVariant}`

export type TypeFace =
  | 'thin'
  | 'extralight'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black'

export type DefaultColors =
  | 'gray'
  | 'primary'
  | 'danger'
  | 'success'
  | 'warning'
  | 'info'

export type DefaultSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'

export type BreakPoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export type SpacingValue =
  | '0'
  | '0.5'
  | '1'
  | '1.5'
  | '2'
  | '2.5'
  | '3'
  | '3.5'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '14'
  | '16'
  | '20'
  | '24'
  | '28'
  | '32'
  | '36'
  | '40'
  | '44'
  | '48'
  | '52'
  | '56'
  | '60'
  | '64'
  | '72'
  | '80'
  | '96'

export type Spacing = SpacingValue | `x-${SpacingValue}` | `y-${SpacingValue}`

export type TModalSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'

export const ModalSizeMapping : {[key in TModalSizes] : string} = {
  xs: "max-w-xs",
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  full: "max-w-xxl",
}

export type TModalPlacement = 'top' | 'bottom' | 'center' | 'left' | 'right'

export const ModalPlacementMapping : {[key in TModalPlacement] : string} = {
  top: "items-start justify-center",
  bottom: "items-end justify-center",
  center: "items-center justify-center",
  left: "items-center justify-start",
  right: "items-center justify-end",
}

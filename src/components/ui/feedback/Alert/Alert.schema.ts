export type Variant = 'strip' | 'default' | 'toaster'

export type Theme = 'default' | 'info' | 'warning' | 'success' | 'danger'

export type Dismissible = 'Yes' | 'No'

export const VariantClassMapping: Record<Variant, string> = {
  strip: '',
  default: 'rounded border p-4',
  toaster: 'border-t-4 p-4 shadow-md',
}

export const DismissibleStripPaddingClassMapping: Record<Dismissible, string> =
  {
    Yes: 'p-3',
    No: 'px-3 py-2',
  }

export const IconColorClassMapping: Record<Theme, string> = {
  default: 'text-black',
  info: 'text-blue-600 ',
  success: 'text-green-600 ',
  danger: 'text-red-600',
  warning: 'text-yellow-600',
}

export const TextColorClassMapping: Record<Theme, string> = {
  default: 'text-black',
  info: 'text-blue-900 ',
  success: 'text-green-900',
  danger: 'text-red-900',
  warning: 'text-yellow-900',
}

export const PaddingClassMapping: Record<Variant, string> = {
  strip: '',
  default: 'pb-1',
  toaster: 'pb-1',
}

export const ToasterThemeColorClassMapping: Record<Theme, string> = {
  default: 'border-black ',
  info: 'border-blue-600 ',
  success: 'border-green-600 ',
  danger: 'border-red-600',
  warning: 'border-yellow-600',
}

export const DefaultThemeColorClassMapping: Record<Theme, string> = {
  default: 'border-cool-gray-400',
  info: 'border-blue-400 ',
  success: 'border-green-400 ',
  danger: 'border-red-400',
  warning: 'border-yellow-400',
}

export const BackgroundClassMapping: Record<Theme, string> = {
  default: 'bg-cool-gray-100 ',
  info: 'bg-blue-50 ',
  success: 'bg-green-50 ',
  danger: 'bg-red-50 ',
  warning: 'bg-yellow-50 ',
}

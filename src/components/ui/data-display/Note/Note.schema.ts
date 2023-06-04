export type Theme = 'primary' | 'default' | 'warning' | 'success' | 'danger'

export const HeaderBackgroundClassMapping: Record<Theme, string> = {
  default: 'bg-cool-gray-100 ',
  success: 'bg-green-50 ',
  danger: 'bg-red-50 ',
  warning: 'bg-yellow-50 ',
  primary: 'bg-blue-50',
}

export const HeaderTextColorClassMapping: Record<Theme, string> = {
  default: 'text-black',
  success: 'text-green-700 ',
  danger: 'text-red-700',
  warning: 'text-yellow-700',
  primary: 'text-primary',
}

export const IconColorClassMapping: Record<Theme, string> = {
  default: 'text-black',
  success: 'text-green-700 ',
  danger: 'text-red-700',
  warning: 'text-yellow-700',
  primary: 'text-primary',
}

export const BorderColorClassMapping: Record<Theme, string> = {
  default: 'border-black',
  success: 'border-green-700 ',
  danger: 'border-red-700',
  warning: 'border-yellow-700',
  primary: 'border-primary',
}

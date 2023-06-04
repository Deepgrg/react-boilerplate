export type Variant =
  | 'gray'
  | 'info'
  | 'success'
  | 'warning'
  | 'primary'
  | 'danger'

export const BadgeVariantClassMapping: Partial<Record<Variant, string>> = {
  gray: `bg-cool-gray-200 text-cool-gray-700`,
  info: `bg-blue-100 text-blue-700`,
  success: `bg-green-100 text-green-700`,
  warning: `bg-yellow-100 text-yellow-700`,
  primary: `bg-primary text-white`,
  danger: `bg-red-100 text-red-700`,
}

export const BadgeVariantDismissibleMapping: Partial<Record<Variant, string>> =
  {
    gray: 'text-cool-gray-500',
    info: 'text-blue-500',
    success: 'text-green-500',
    warning: 'text-yellow-500',
    primary: 'text-white',
    danger: 'text-red-500',
  }

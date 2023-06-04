export type Variant = 'active' | 'indeterminate' | 'default' | 'hovered'

export const VariantMapping: Record<Variant, string> = {
  active: 'active',
  indeterminate: 'indeterminate',
  default: 'default',
  hovered: 'hovered',
}

const defaultClass =
  'rounded border-cool-gray-200 text-blue-800 border-cool-gray-300 shadow-sm mr-2'

export const VariantClassMapping: Record<Variant, string> = {
  active: `${defaultClass} checked:bg-[url('./assets/svg/check.svg')]  hover:bg-[url('./assets/svg/check-hovered.svg')] hover:bg-center`,
  indeterminate: `${defaultClass} checked:bg-[url('./assets/svg/indeterminate.svg')]  hover:bg-[url('./assets/svg/indeterminate.svg')] hover:bg-center`,
  default: `${defaultClass}  checked:bg-[url('./assets/svg/check.svg')] hover:bg-[url('./assets/svg/check-hovered.svg')] hover:bg-center`,
  hovered: `${defaultClass} checked:bg-[url('./assets/svg/check.svg')] bg-[url('./assets/svg/check-hovered.svg')] bg-center  hover:bg-[url('./check-hovered.svg')] hover:bg-center`,
}

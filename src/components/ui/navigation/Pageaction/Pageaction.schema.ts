export type Variant = 'withshadow' | 'withoutshadow'

export const VariantMapping: Record<Variant, string> = {
  withshadow: 'withshadow',
  withoutshadow: 'withoutshadow',
}

export const VariantClassMapping: Record<Variant, string> = {
  withshadow: 'shadow-inset p-3',
  withoutshadow: 'shadow-none p-3',
}

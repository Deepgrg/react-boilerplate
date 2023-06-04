export type Variant = 'fullbleed' | 'inset'

export const VariantMapping: Record<Variant, string> = {
  fullbleed: 'fullbleed',
  inset: 'inset',
}

export const VariantClassMapping: Record<Variant, string> = {
  fullbleed: 'w-full border-t',
  inset: 'w-3/4 border-t',
}

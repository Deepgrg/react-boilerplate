import { DefaultSizes } from '../../types'
import { Variant } from './Avatar.types'

export const VariantClassMapping: Record<Variant, string> = {
  image: '',
  initials: '',
  icon: '',
}

export const SizeClassMapping: Record<DefaultSizes, string> = {
  xs: 'h-6 w-6',
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-12 w-12',
  xl: 'h-14 w-14',
  '2xl': 'h-16 w-16',
  '3xl': 'h-20 w-20',
}

export const SubVarientSizeClassMapping: Record<DefaultSizes, string> = {
  xs: 'h-1.5 w-1.5',
  sm: 'h-2 w-2',
  md: 'h-2.5 w-2.5',
  lg: 'h-3 w-3',
  xl: 'h-3.5 w-3.5',
  '2xl': 'h-4 w-4',
  '3xl': 'h-5 w-5',
}

export const IconSizeClassMapping: Record<DefaultSizes, string> = {
  xs: 'h-3 w-3 p-px',
  sm: 'h-3.5 w-3.5 p-px',
  md: 'h-4 w-4 p-px',
  lg: 'h-4.5 w-4.5 p-0.5',
  xl: 'h-5 w-5 p-0.5',
  '2xl': 'h-6 w-6 p-0.5',
  '3xl': 'h-7 w-7 p-0.5',
}

export const InitialsSizeClassMapping: Record<DefaultSizes, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg font-semibold',
  xl: 'text-xl font-semibold',
  '2xl': 'text-2xl font-semibold',
  '3xl': 'text-2xl font-semibold',
}

export const IconSizeMapping: Record<DefaultSizes, number> = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
  '2xl': 28,
  '3xl': 32,
}

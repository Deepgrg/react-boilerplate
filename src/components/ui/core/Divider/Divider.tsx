import React, { ComponentPropsWithRef } from 'react'
import { getComputedClassNames } from '@/utility/tailwind/tailwind-utility'
import { Variant, VariantClassMapping } from './Divider.schema'
import { Color } from '../../types'

export type AS = 'div' | 'span'

export type DividerProps<T extends AS = AS> = ComponentPropsWithRef<T> & {
  as?: T
  variant?: Variant
  color?: Color<'border'>
  className?: string
}

const Divider: React.FunctionComponent<DividerProps> = (props) => {
  const {
    variant = 'fullbleed',
    as = variant === 'fullbleed' ? 'div' : 'span',
    className,
    color,
    ...restProps
  } = props
  const computedClasses = getComputedClassNames(
    VariantClassMapping[variant],
    className,
    color
  )
  return React.createElement(as, {
    ...restProps,
    className: computedClasses,
    role: 'divider',
  })
}

Divider.displayName = 'Divider'

export { Divider }

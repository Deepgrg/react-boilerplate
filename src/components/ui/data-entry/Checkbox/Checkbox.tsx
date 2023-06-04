import React, { ComponentPropsWithRef } from 'react'
import { getComputedClassNames } from '@/utility/tailwind/tailwind-utility'
import { Color } from '../../types'
import { Variant, VariantClassMapping } from './Checkbox.schema'
import { Text } from '../../data-display/Text'

export type AS = 'input'

export type CheckboxProps<T extends AS = AS> = ComponentPropsWithRef<T> & {
  variant?: Variant
  color?: Color<'text'>
  className?: string
  type?: string
  style?: { [key: string]: string }
  label?: string
  testid?: string
}

const Checkbox: React.FunctionComponent<CheckboxProps> = (props) => {
  const {
    variant = 'active',
    color,
    className,
    type = 'checkbox',
    // style = { boxShadow: 'none' },
    label,
    testid = 'my-checkbox',
    ...restProps
  } = props
  const computedClasses = getComputedClassNames(
    VariantClassMapping[variant],
    className,
    color,
  )

  return (
    <>
      <input
        className={computedClasses}
        type={type}
        // ref={ref}
        {...restProps}
        data-testid={testid}
      />
      <Text variant='label' as='label' color='text-cool-gray-900'>
        {label}
      </Text>
    </>
  )
}

Checkbox.displayName = 'Checkbox'

export default Checkbox

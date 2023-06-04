import React, { ComponentPropsWithRef } from 'react'
import { getComputedClassNames } from '@/utility/tailwind/tailwind-utility'
import { Color } from '../../types'
import { Text } from '../../data-display/Text'
import { Variant, VariantClassMapping } from './Radio.schema'

export type AS = 'input'

export type CheckboxProps<T extends AS = AS> = ComponentPropsWithRef<T> & {
  variant?: Variant
  color?: Color<'text'>
  id: string
  className?: string
  type?: string
  style?: { [key: string]: string }
  label?: string
  testid?: string
}

const Radio: React.FunctionComponent<CheckboxProps> = (props) => {
  const {
    id,
    variant = 'active',
    color,
    className,
    type = 'radio',
    label,
    testid = 'my-radio',
    ...restProps
  } = props
  const computedClasses = getComputedClassNames(
    VariantClassMapping[variant],
    className,
    color
  )

  return (
    <>
      <input
        id={id}
        className={computedClasses}
        name="radio"
        type={type}
        {...restProps}
        data-testid={testid}
      />
      <Text
        variant="label"
        className="ml-2"
        as="label"
        color="text-cool-gray-900"
        htmlFor={label}
      >
        {label}
      </Text>
    </>
  )
}

Radio.displayName = 'Radio'

export default Radio

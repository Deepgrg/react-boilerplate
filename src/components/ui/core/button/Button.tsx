import { getComputedClassNames } from '@/utility/tailwind/tailwind-utility'
import React from 'react'
import {
  ButtonBaseClasses,
  ButtonDisplays,
  ButtonSizes,
  ButtonTypes,
  ButtonVariants,
  ClickedMapping,
  DefaultClassesMapping,
  DisabledMapping,
  DisplayMapping,
  FocusedClassesMapping,
  HoverClassesMapping,
  SizeMappings,
} from './Button.schema'

interface Props extends React.ComponentPropsWithRef<'button'> {
  variant?: ButtonVariants
  btnType?: ButtonTypes
  size?: ButtonSizes
  display?: ButtonDisplays
}
export const Button = ({
  variant = 'success',
  size = 'regular',
  display = 'inline',
  btnType = 'solid',
  ...buttonProps
}: Props) => {
  const classNames = getComputedClassNames(
    ButtonBaseClasses,
    SizeMappings[size],
    DisplayMapping[display],
    DefaultClassesMapping[variant][btnType],
    HoverClassesMapping[variant][btnType],
    FocusedClassesMapping[variant][btnType],
    ClickedMapping[variant][btnType],
    DisabledMapping[variant][btnType],
    buttonProps.className
  )

  if (variant === 'plain') {
    return (
      <button type="button" {...buttonProps} className={buttonProps.className}>
        {buttonProps.children}
      </button>
    )
  }

  return (
    <button type="button" {...buttonProps} className={classNames}>
      {buttonProps.children}
    </button>
  )
}

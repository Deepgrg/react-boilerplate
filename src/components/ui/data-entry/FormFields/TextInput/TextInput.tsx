import React from 'react'
import { Box } from '@/components/ui/core/Box'
import { FormFieldContainerClass, FormFieldContainerDisabledContainerClass, FormFieldContainerErrorClassNames, FormFieldContainerFocusClass, FormFieldRegularSizeClasses, FormFieldSize, FormFieldSmallSizeClasses, InputClasses } from '@/components/ui/data-entry/FormFields/FormField.schema'
import { getComputedClassNames } from '@/utility/tailwind/tailwind-utility'

interface TextInputProps extends React.ComponentPropsWithRef<'input'> {
  error?: boolean
  containerClassName: string
  RightIcon?: React.ReactNode
  LeftIcon?: React.ReactNode
  fieldSize?: FormFieldSize
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(({
                                                                               fieldSize = 'regular',
                                                                               error,
                                                                               disabled,
                                                                               containerClassName,
                                                                               className,
                                                                               RightIcon,
                                                                               LeftIcon,
                                                                               ...props
                                                                             }, ref) => {
  const containerClasses = getComputedClassNames(
    FormFieldContainerClass,
    FormFieldContainerFocusClass,
    {
      [FormFieldContainerDisabledContainerClass]: disabled,
      [FormFieldContainerErrorClassNames]: error,
      [FormFieldRegularSizeClasses]: fieldSize === 'regular',
      [FormFieldSmallSizeClasses]: fieldSize === 'sm',
    },
    containerClassName,
  )

  const inputClasses = getComputedClassNames(
    InputClasses,
    {
      [FormFieldContainerDisabledContainerClass]: disabled,
    },
    {
      'mr-2': !!RightIcon,
      'ml-2': !!LeftIcon,
    },
    className,
  )

  return (
    <Box className={containerClasses}>
      {LeftIcon}
      <input {...props} disabled={disabled} className={inputClasses} ref={ref} />
      {RightIcon}
    </Box>
  )
})

TextInput.displayName = 'TextInput'

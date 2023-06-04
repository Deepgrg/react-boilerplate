import { Box } from '@/components/ui/core/Box'
import { FormFieldContainerClass, FormFieldContainerDisabledContainerClass, FormFieldContainerErrorClassNames, FormFieldContainerFocusClass, FormFieldRegularSizeClasses, FormFieldSize, FormFieldSmallSizeClasses } from '@/components/ui/data-entry/FormFields/FormField.schema'
import { TextAreaInputClasses, TextAreaRegularSizeClasses, TextAreaSmallSizeClasses } from '@/components/ui/data-entry/FormFields/TextArea/TextArea.schema'
import { getComputedClassNames } from '@/utility/tailwind/tailwind-utility'
import { ComponentPropsWithRef, forwardRef } from 'react'

export interface TextAreaProps extends ComponentPropsWithRef<'textarea'> {
  error?: boolean
  containerClassName?: string
  size?: FormFieldSize
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({
                                                                          size = 'regular',
                                                                          error,
                                                                          disabled,
                                                                          containerClassName,
                                                                          className,
                                                                          ...props
                                                                        }, ref) => {
  const containerClasses = getComputedClassNames(
    FormFieldContainerClass,
    FormFieldContainerFocusClass,
    {
      [FormFieldContainerDisabledContainerClass]: disabled,
      [FormFieldContainerErrorClassNames]: error,
      [FormFieldRegularSizeClasses]: size === 'regular',
      [FormFieldSmallSizeClasses]: size === 'sm',
    },
    'w-full',
    containerClassName,
  )

  const inputClasses = getComputedClassNames(
    {
      [FormFieldContainerDisabledContainerClass]: disabled,
      [TextAreaRegularSizeClasses]: size === 'regular',
      [TextAreaSmallSizeClasses]: size === 'sm',
    },
    TextAreaInputClasses,
    className,
  )

  return (
    <Box className={containerClasses}>
      {/* No classes for box shadow: none in tailwind */}
      <textarea
        {...props}
        disabled={disabled}
        className={inputClasses}
        style={{ boxShadow: 'none' }}
        ref={ref}
      />
    </Box>
  )
})

TextArea.displayName = 'TextArea'

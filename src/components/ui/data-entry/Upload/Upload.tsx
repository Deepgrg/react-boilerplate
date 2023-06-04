import React, { InputHTMLAttributes, ReactNode } from 'react'
import { IconProps, Upload as UploadIcon } from 'phosphor-react'
import { Box } from '@/components/ui/core/Box'
import { Flexbox } from '@/components/ui/core/Flexbox'
import { Icon } from '@/components/ui/core/Icon'
import { Text } from '@/components/ui/data-display/Text'
import { getComputedClassNames } from '@/utility/tailwind/tailwind-utility'

export interface Props extends InputHTMLAttributes<File> {
  className?: string
  helperText: string | ReactNode
  icon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >
  disabled?: boolean
  info?: ReactNode
}

const Upload = (props: Props) => {
  const {
    className,
    helperText,
    icon = UploadIcon,
    disabled = false,
    info,
    children,
  } = props

  const computedClasses = getComputedClassNames(
    className,
    {
      'bg-white hover:border-solid  hover:border-primary cursor-pointer ':
        !disabled,
      'bg-cool-gray-100 pointer-events-none': disabled,
    },
    'border-2 border-cool-gray-300 border-dashed rounded-lg p-4 transition ease-in-out duration-300 '
  )

  const uploadText = getComputedClassNames(
    className,
    'text-center',
    disabled ? 'text-cool-gray-500' : 'text-primary '
  )

  return (
    <Box className={computedClasses}>
      {children ? (
        <Flexbox direction="column" className="w-full">
          {children}
          <Box className="mt-4 border text-primary border-dashed w-full bg-blue-50 text-center rounded p-3 border-blue-300">
            {info ?? 'Click to upload or drag and drop'}
          </Box>
        </Flexbox>
      ) : (
        <Flexbox direction="column" align="center" justify="center">
          <Box className="rounded-full p-3 bg-cool-gray-200 border-4 border-cool-gray-100 ">
            <Icon size="sm" icon={icon} color="text-cool-gray-800" />
          </Box>
          {info ?? (
            <Text
              as="p"
              className="mt-4 mb-2 text-sm leading-4 text-center"
              color="text-cool-gray-800"
            >
              <Text as="span" className={uploadText}>
                Click to upload&nbsp;
              </Text>
              or drag and drop
            </Text>
          )}

          {helperText && (
            <Text
              as="p"
              className="text-xs"
              color="text-cool-gray-600 text-center"
            >
              {helperText}
            </Text>
          )}
        </Flexbox>
      )}
    </Box>
  )
}

Upload.displayName = 'Upload'

export { Upload }

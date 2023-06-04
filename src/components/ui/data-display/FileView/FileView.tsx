import { Color } from '@/components/ui/types'
import { getComputedClassNames } from '@/utility/tailwind/tailwind-utility'
import { IconProps, Trash, Upload } from 'phosphor-react'
import React, { HTMLAttributes } from 'react'
import { Box } from '../../core/Box'
import { Flexbox } from '../../core/Flexbox'
import { Icon } from '../../core/Icon'
import { Text } from '../Text'

interface FileViewProps extends HTMLAttributes<HTMLElement> {
  icon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >
  errorMessage?: string
  className?: string
  fileName: string
  fileDetails: string
  onDelete?: () => void
}

const FileView = React.forwardRef<HTMLElement, FileViewProps>((props, ref) => {
  const {
    icon = Upload,
    errorMessage,
    className,
    fileName,
    fileDetails,
    onDelete,
    ...restProps
  } = props

  const computedClasses = getComputedClassNames(
    className,
    {
      'border-cool-gray-300 rounded hover:border-primary ': !errorMessage,
      'bg-red-50 border-red-300': errorMessage,
    },
    'border-2 rounded p-3 hover:cursor-pointer transition ease-in-out duration-300 w-full'
  )

  const fileNameColor = getComputedClassNames<Color<'text'>>({
    'text-cool-gray-800': !errorMessage,
    'text-red-800': errorMessage,
  })

  const fileInfoColor = getComputedClassNames<Color<'text'>>({
    'text-cool-gray-600': !errorMessage,
    'text-red-600': errorMessage,
  })

  const fileIconColor = getComputedClassNames({
    'text-primary': !errorMessage,
    'text-red-700': errorMessage,
  })

  const trashIconClass = getComputedClassNames('shrink-0 ml-3 ', {
    'text-cool-gray-400': !errorMessage,
    'text-red-700': errorMessage,
  })

  const iconBackgroundColor = getComputedClassNames(
    'rounded-full p-3 border-4 shrink-0',
    {
      'bg-blue-100 border-blue-50 ': !errorMessage,
      'bg-red-100 border-red-50': errorMessage,
    }
  )

  const onDeleteIconClicked = (event: React.MouseEvent) => {
    event.stopPropagation()
    if (onDelete) onDelete()
  }

  return (
    <Flexbox className={computedClasses} {...restProps} ref={ref}>
      <Box className={iconBackgroundColor}>
        <Icon size="sm" icon={icon} className={fileIconColor} />
      </Box>
      <Box className="ml-4 grow">
        <Flexbox justify="space-between">
          <Text
            typeface="medium"
            className="leading-4 text-sm break-all sm:break-words"
            color={fileNameColor}
          >
            {fileName}
          </Text>
          {onDelete && (
            <Icon
              icon={Trash}
              size="sm"
              className={trashIconClass}
              onClick={onDeleteIconClicked}
            />
          )}
        </Flexbox>
        <Text
          className="leading-4 text-xs mt-1 break-all sm:break-words"
          color={fileInfoColor}
        >
          {fileDetails}
        </Text>
        {errorMessage && (
          <Text
            className="leading-4 text-xs mt-1 break-all sm:break-words"
            color={fileInfoColor}
          >
            {errorMessage}
          </Text>
        )}
      </Box>
    </Flexbox>
  )
})
FileView.displayName = 'FileView'
export { FileView }

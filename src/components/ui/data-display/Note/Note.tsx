import { getComputedClassNames } from '@/utility/tailwind/tailwind-utility'
import { IconProps, Info } from 'phosphor-react'
import React from 'react'
import { Box } from '../../core/Box'
import { Icon } from '../../core/Icon'
import { Color } from '../../types'
import { Text } from '../Text'
import {
  BorderColorClassMapping,
  HeaderBackgroundClassMapping,
  HeaderTextColorClassMapping,
  IconColorClassMapping,
  Theme,
} from './Note.schema'

interface NoteProps {
  title: string
  className?: string
  description: string
  noHeader?: boolean
  variant?: Theme
  icon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >
}

const Note: React.FunctionComponent<NoteProps> = (props) => {
  const {
    title,
    description,
    noHeader = false,
    variant = 'primary',
    icon = Info,
    className,
  } = props

  const noteComputedClass = getComputedClassNames(
    'border-l-4 rounded overflow-hidden shadow-md',
    className,
    BorderColorClassMapping[variant]
  )

  const headerComputedClass = getComputedClassNames(
    'py-3 pr-3 pl-12 relative',
    HeaderBackgroundClassMapping[variant]
  )

  const headerTextComputedClass = getComputedClassNames(
    'leading-5',
    HeaderTextColorClassMapping[variant]
  )

  const iconColor = getComputedClassNames(
    IconColorClassMapping[variant]
  ) as Color<'text'>

  const descriptionClass = getComputedClassNames(
    'text-cool-gray-700 ',
    'leading-6'
  ) as Color<'text'>

  return (
    <Box className={noteComputedClass}>
      {!noHeader && (
        <Box className={headerComputedClass}>
          <Icon
            icon={icon}
            size={20}
            color={iconColor}
            className="absolute top-0 left-0 my-3.5 ml-4"
          />
          <Text
            variant="h6"
            typeface="semibold"
            className={headerTextComputedClass}
          >
            {title}
          </Text>
        </Box>
      )}
      <Box className="py-4 pr-4 pl-12 relative">
        {noHeader && (
          <Icon
            icon={icon}
            size={20}
            color={iconColor}
            className="absolute top-0 left-0 mt-5 ml-4"
          />
        )}
        <Text variant="subtitle3" className={descriptionClass}>
          {noHeader && (
            <Text
              as="span"
              variant="h6"
              typeface="semibold"
              className="font-semibold"
            >
              {title}:&nbsp;
            </Text>
          )}
          {description}
        </Text>
      </Box>
    </Box>
  )
}
Note.displayName = 'Note'
export { Note }

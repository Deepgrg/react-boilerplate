import React, { FC } from 'react'
import Text from '@/components/ui/data-display/Text/Text'
import { Props } from '@/components/ui/data-display/List/List.schema'
import { Box } from '../../core/Box'

const List: FC<Props> = (props) => {
  const {
    heading = 'This is list heading',
    subHeading,
    subHeadingIcon,
    trail,
    lead,
  } = props

  return (
    <Box className="max-w-md bg-white">
      <Box className="flex items-center space-x-4">
        {lead && (
          <Box className="rounded-full h-16 w-16 flex items-center justify-center">
            {lead}{' '}
          </Box>
        )}
        <Box className="flex-auto min-w-0">
          <Text className="text-sm font-medium text-cool-gray-800">
            {heading}
          </Text>
          <Box className="flex items-center space-x-2">
            {subHeadingIcon && subHeadingIcon}

            {typeof subHeading === 'string' ? (
              <Text className="text-xs text-cool-gray-600 ">{subHeading}</Text>
            ) : (
              subHeading?.map((val) => (
                <Text key={val} className="text-xs text-cool-gray-600 ">
                  {val}
                </Text>
              ))
            )}
          </Box>
        </Box>

        <Box className="flex-1">
          {typeof trail === 'string' ? (
            <Text className="text-xs text-cool-gray-600">{trail}</Text>
          ) : (
            trail
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default List

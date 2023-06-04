import React, { useState } from 'react'
import { Tab } from '@headlessui/react'
import classNames from 'classnames'
import { Box, Text } from '@/components/ui'

import { getComputedClassNames } from '@/utility/tailwind/tailwind-utility'
import { Icon } from '@/components/ui/core/Icon'
import { IconProps } from 'phosphor-react'
import { Flexbox } from '../../core/Flexbox'

import {
  CountBgClassMapping,
  CountColorClassMapping,
  IconColorClassMapping,
  TabDisplayClassMapping,
  TabStatesMapping,
  TypesVariant,
} from './Tabs.schema'

interface TabHeaderProps {
  alignment?: 'horizontal' | 'vertical'

  variant?: TypesVariant
  display?: 'inline-block' | 'block' | 'flex'
  className?: string

  tabs: Array<TabsProps>
}

interface TabsProps {
  label: string
  value: number
  count?: number
  icon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >
}

const TabHeader: React.FunctionComponent<TabHeaderProps> = (props) => {
  const [openTab, setOpenTab] = useState('Home')

  const { tabs, variant = 'default', className, alignment='horizontal', display } = props

  const tabHeaderComputedClass = getComputedClassNames(
    'inline-block',
    TabDisplayClassMapping[variant],
    {
      'flex flex-col': alignment === 'vertical',
      'flex flex-1': display === 'block',
      'inline-block': display === 'inline-block',
    },

    className
  )
  const tabSelectedComputedClass = getComputedClassNames('px-4 py-2 ', {
    'w-full': display === 'block',
  })

  const IconComputedClass = getComputedClassNames(
    'mr-2',
    IconColorClassMapping[variant]
  )

  return (
    <Tab.List as={Box} className={tabHeaderComputedClass}>
      {tabs.map((tab: TabsProps) => {
        return (
          <Tab
            key={tab?.value}
            onClick={() => setOpenTab(tab?.label)}
            className={({ selected }) =>
              classNames(
                tabSelectedComputedClass,
                selected
                  ? TabStatesMapping[variant]
                  : 'text-cool-gray-600 hover:bg-cool-gray-100 hover:text-cool-gray-800 bg-cool-gray-100 '
              )
            }
          >
            <Flexbox
              align="center"
              className={'ml-2'}
              justify={`${
                alignment === 'horizontal' ? 'center' : 'flex-start'
              }`}
            >
              {tab?.icon && (
                <Icon
                  icon={tab?.icon}
                  size={20}
                  className={IconComputedClass}
                />
              )}

              <Text typeface="medium" className="font-Inter text-sm leading-4 	">
                {tab?.label}
              </Text>
              {tab.count && (
                <Box
                  className={`${
                    openTab === tab?.label
                      ? CountBgClassMapping[variant]
                      : 'bg-cool-gray-200'
                  }   w-4 h-4	rounded-full ml-2 inline-flex items-center justify-center `}
                >
                  <Text
                    typeface="normal"
                    className={`${
                      openTab === tab?.label
                        ? CountColorClassMapping[variant]
                        : 'text-cool-gray-600'
                    } text-xs leading-4`}
                  >
                    {tab.count}
                  </Text>
                </Box>
              )}
            </Flexbox>
          </Tab>
        )
      })}
    </Tab.List>
  )
}
export default TabHeader
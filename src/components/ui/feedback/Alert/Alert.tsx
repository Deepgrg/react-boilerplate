import { useBoolean, useTimeout } from '@/hooks'
import { getComputedClassNames } from '@/utility/tailwind/tailwind-utility'
import { Transition } from '@headlessui/react'
import { Warning, X } from 'phosphor-react'
import { Box } from '../../core/Box'
import { Flexbox } from '../../core/Flexbox'
import { Icon } from '../../core/Icon'
import { Text } from '../../data-display/Text'
import {
  BackgroundClassMapping,
  DefaultThemeColorClassMapping,
  DismissibleStripPaddingClassMapping,
  IconColorClassMapping,
  PaddingClassMapping,
  TextColorClassMapping,
  ToasterThemeColorClassMapping,
  VariantClassMapping,
} from './Alert.schema'
import { AlertProps } from './Alert.types'

const Alert = (props: AlertProps) => {
  const {
    variant = 'default',
    theme = 'default',
    isDismissible = false,
    className,
    title,
    description,
    icon = Warning,
    timeout = 5000,
    autoClose = true,
  } = props
  const { value, setFalse, setTrue } = useBoolean(false)
  const hide = () => setFalse()
  const show = () => setTrue()
  useTimeout(show, 300)
  useTimeout(() => {
    if (autoClose) hide()
  }, timeout)

  const borderOrBackground =
    variant === 'toaster'
      ? ToasterThemeColorClassMapping[theme]
      : BackgroundClassMapping[theme]

  const defaultBorder =
    variant === 'default' ? DefaultThemeColorClassMapping[theme] : ''

  const stripPadding =
    variant === 'strip'
      ? DismissibleStripPaddingClassMapping[isDismissible ? 'Yes' : 'No']
      : ''

  const computedClasses = getComputedClassNames(
    VariantClassMapping[variant],
    className,
    borderOrBackground,
    defaultBorder,
    stripPadding
  )

  const textComputedClasses = getComputedClassNames(
    'leading-4',
    TextColorClassMapping[theme]
  )

  const titleComputedClasses = getComputedClassNames(
    'leading-4',
    textComputedClasses,
    PaddingClassMapping[variant]
  )

  const iconComputedClasses = getComputedClassNames(
    IconColorClassMapping[theme]
  )

  return (
    <Transition
      show={value}
      enter="transition ease duration-300"
      enterFrom=" translate-x-full"
      enterTo=" translate-x-0"
      leave="transition ease duration-300 "
      leaveFrom=" translate-x-0"
      leaveTo=" translate-x-full"
    >
      <Flexbox
        className={computedClasses}
        justify="space-between"
        align={variant === 'strip' ? 'center' : 'flex-start'}
        role="alert"
      >
        <Flexbox>
          <Icon icon={icon} size="md" className={iconComputedClasses} />
          <Box className="ml-4">
            {variant !== 'strip' && title && (
              <Text typeface="semibold" className={titleComputedClasses}>
                {title}
              </Text>
            )}
            {description && (
              <Text typeface="normal" className={textComputedClasses}>
                {description}
              </Text>
            )}
          </Box>
        </Flexbox>
        {isDismissible && (
          <Icon
            icon={X}
            size="sm"
            onClick={hide}
            name="Close Alert"
            role="button"
          />
        )}
      </Flexbox>
    </Transition>
  )
}

export { Alert }

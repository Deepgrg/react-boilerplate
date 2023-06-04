import React, { FC, PropsWithChildren } from 'react'
import { IconProps, X } from 'phosphor-react'
import {
  BadgeVariantClassMapping,
  BadgeVariantDismissibleMapping,
  Variant,
} from '@/components/ui/data-display/Badge/Badge.schema'
import { getComputedClassNames } from '@/utility/tailwind/tailwind-utility'
import { Icon } from '@/components/ui/core/Icon'

import Box, { BoxProps } from '@/components/ui/core/Box/Box'

export interface BadgeProps extends PropsWithChildren {
  leftIcon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >
  variant?: Variant
  as?: BoxProps['as']

  onDismiss?(): void
  className?: string
}

const Badge: FC<BadgeProps> = (props) => {
  const {
    children,
    variant = 'primary',
    as,
    leftIcon,
    onDismiss,
    className,
  } = props

  const computedClassNames = getComputedClassNames(
    className,
    BadgeVariantClassMapping[variant],
    'text-xs pt-1 pb-1 pl-2 pr-2 rounded-2xl inline-flex flex-row gap-x-1 font-medium w-min items-center'
  )

  const computedDismissibleClassNames = getComputedClassNames(
    BadgeVariantDismissibleMapping[variant],
    'cursor-pointer'
  )

  return (
    <Box as={as} {...props} className={computedClassNames}>
      {leftIcon && <Icon icon={leftIcon} />}

      {children}

      {onDismiss && (
        <Icon
          className={computedDismissibleClassNames}
          icon={X}
          onClick={onDismiss}
        />
      )}
    </Box>
  )
}

export default Badge

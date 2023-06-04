import React from 'react'
import { Box } from '@/components/ui/core/Box'
import { getComputedClassNames } from '@/utility/tailwind/tailwind-utility'
import { CollapseBodyProps } from '@/components/ui/data-display/Collapse/Collapse.type'
import { CollapseContext } from '@/components/ui/data-display/Collapse/CollapseContext'
import {
  CollapseBodyClasses,
  CollapseBodyCloseClass,
  CollapseBodyOpenClass,
  collapseBodyTestId,
  CollapseInnerBodyClass,
} from '@/components/ui/data-display/Collapse/Collapse.schema'

export function CollapseBody({ children, className }: CollapseBodyProps) {
  const { open } = React.useContext(CollapseContext)

  const classes = getComputedClassNames(CollapseBodyClasses, {
    [CollapseBodyOpenClass]: open,
    [CollapseBodyCloseClass]: !open,
    className,
  })

  const innerClasses = getComputedClassNames(CollapseInnerBodyClass)
  return (
    <Box className={classes} data-testid={collapseBodyTestId}>
      <Box className={innerClasses}>{children}</Box>
    </Box>
  )
}

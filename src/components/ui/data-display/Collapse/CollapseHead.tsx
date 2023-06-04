import { Icon } from '@/components/ui/core/Icon'
import { Box } from '@/components/ui/core/Box'
import { CaretRight, CaretUp } from 'phosphor-react'
import React from 'react'
import { CollapseContext } from '@/components/ui/data-display/Collapse/CollapseContext'
import { getComputedClassNames } from '@/utility/tailwind/tailwind-utility'
import {
  CollapseHeadClasses,
  CollapseHeadLeftArrowClasses,
  CollapseHeadLeftArrowOpenClasses,
  CollapseHeadRightArrowClasses,
  CollapseHeadRightArrowOpenClasses,
  collapseHeadTestId,
  leftArrowTestId,
  rightArrowTestId,
} from '@/components/ui/data-display/Collapse/Collapse.schema'
import { Button } from '@/components/ui/core/button'
import { CollapseHeaderProps } from '@/components/ui/data-display/Collapse/Collapse.type'

export function CollapseHead({
  children,
  className,
  showLeftIcon = true,
  showRightIcon = true,
  ...props
}: CollapseHeaderProps) {
  const { open, setOpen, openPropsProvided } = React.useContext(CollapseContext)

  const shouldRenderAsDiv = openPropsProvided && !props.onClick

  const classes = getComputedClassNames(
    CollapseHeadClasses,
    {
      'cursor-default': shouldRenderAsDiv,
    },
    className,
  )
  const leftArrowClasses = getComputedClassNames(
    { [CollapseHeadLeftArrowOpenClasses]: open },
    CollapseHeadLeftArrowClasses,
  )
  const rightArrowClasses = getComputedClassNames(
    { [CollapseHeadRightArrowOpenClasses]: open },
    CollapseHeadRightArrowClasses,
  )

  const InnerElems = (
    <>
      {showLeftIcon && <Icon data-testid={leftArrowTestId} icon={CaretRight} className={leftArrowClasses} />}
      {children}
      {showRightIcon && <Icon icon={CaretUp} className={rightArrowClasses} data-testid={rightArrowTestId} />}
    </>
  )

  if (shouldRenderAsDiv) {
    return (
      <Box className={classes} data-testid={collapseHeadTestId} {...props}>
        {InnerElems}
      </Box>
    )
  }
  return (
    <Button
      variant="plain"
      className={classes}
      data-testid={collapseHeadTestId}
      {...props}
      onClick={(e) => {
        setOpen(!open)
        props.onClick?.(e)
      }}
    >
      {InnerElems}
    </Button>
  )
}

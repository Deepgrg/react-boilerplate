import { Box } from '@/components/ui/core/Box'
import { BorderClass, CollapseBaseClasses } from '@/components/ui/data-display/Collapse/Collapse.schema'
import { getComputedClassNames } from '@/utility/tailwind/tailwind-utility'
import React, { FC } from 'react'
import { CollapseComponents, CollapseProps } from '@/components/ui/data-display/Collapse/Collapse.type'
import { CollapseBody } from '@/components/ui/data-display/Collapse/CollapseBody'
import { CollapseHead } from '@/components/ui/data-display/Collapse/CollapseHead'
import { CollapseContext } from '@/components/ui/data-display/Collapse/CollapseContext'

const Collapse: FC<CollapseProps> & CollapseComponents = ({ border = false, children, open: openProp }) => {
  const [open, setOpen] = React.useState<boolean>(openProp || false)

  React.useEffect(() => {
    setOpen(openProp || false)
  }, [openProp])

  const contextValue = React.useMemo(() => {
    // click on
    let openSetter = setOpen
    if (openProp !== undefined) {
      openSetter = () => {}
    }

    return {
      open,
      setOpen: openSetter,
      openPropsProvided: openProp !== undefined,
    }
  }, [open, setOpen, openProp])

  const classes = getComputedClassNames(CollapseBaseClasses, {
    [BorderClass]: border,
  })

  return (
    <Box className={classes}>
      <CollapseContext.Provider value={contextValue}>
        {typeof children === 'function' ? children(contextValue) : children}
      </CollapseContext.Provider>
    </Box>
  )
}

Collapse.Body = CollapseBody
Collapse.Header = CollapseHead

export default Collapse

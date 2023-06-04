import React, { FC } from 'react'

export interface CollapseProps extends Omit<React.ComponentPropsWithRef<'div'>, 'children'> {
  border?: boolean
  children?:
    | React.ReactNode
    | ((context: {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
  }) => React.ReactNode)
  open?: boolean
}

export type CollapseBodyProps = React.ComponentPropsWithRef<'div'>
export type CollapseHeaderProps = React.ComponentPropsWithRef<'button'> & {
  showLeftIcon?: boolean
  showRightIcon?: boolean
}

export interface CollapseComponents {
  Body: FC<CollapseBodyProps>;
  Header: FC<CollapseHeaderProps>
}

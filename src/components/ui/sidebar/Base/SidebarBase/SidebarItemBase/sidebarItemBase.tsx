import { getComputedClassNames } from '@/utility/tailwind/tailwind-utility'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  SidebarItemActiveClass,
  SidebarItemBaseClass,
  SidebarItemOpenedClass,
} from './sidebarItemBase.schema'

type Props = {
  active?: boolean
  opened?: boolean
  to?: string
} & Omit<React.ComponentPropsWithRef<typeof Link>, 'to'>

export const SidebarItemBase = ({
  active,
  opened,
  to = '',
  ...props
}: Props) => {
  const classNames = getComputedClassNames(
    SidebarItemBaseClass,
    opened ? SidebarItemOpenedClass : '',
    active ? SidebarItemActiveClass : '',
    props.className
  )

  return (
    <NavLink to={to} {...props} className={classNames}>
      {props.children}
    </NavLink>
  )
}

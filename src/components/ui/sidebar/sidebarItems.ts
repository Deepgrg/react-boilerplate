import { IconProps, User, List, Gear, Calendar } from 'phosphor-react'
import React from 'react'

export interface ISidebarItem {
  icon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >
  name: string
  onclick: () => void
  active: boolean | (() => boolean)
  openend: boolean | (() => boolean)

  children?: ISidebarItem[]
}

export const SidebarItems: ISidebarItem[] = [
  {
    icon: User,
    name: 'Role Management',
    onclick: () => {},
    active: false,
    openend: false,
  },
  {
    icon: List,
    name: 'Master Data',
    onclick: () => {},
    active: false,
    openend: true,
    children: [
      {
        name: 'Stock Category',
        onclick: () => {},
        active: false,
        openend: true,
      },
      {
        name: 'Stock Form',
        onclick: () => {},
        active: false,
        openend: true,
      },
    ],
  },
  {
    icon: Gear,
    name: 'Settings',
    onclick: () => {},
    active: false,
    openend: false,
  },
  {
    icon: Calendar,
    name: 'Calendar',
    onclick: () => {},
    active: false,
    openend: false,
  },
]

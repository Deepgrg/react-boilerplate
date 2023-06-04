import React from 'react'
import { AppBarItemBase } from '../Base/AppBarBase/AppBarBaseItem/AppBarBase'
import Logo from './icon.svg'
import { AppBarBase } from '../Base/AppBarBase/AppBarBase'
import { ISidebarItem } from '../sidebarItems'

interface Props extends React.ComponentPropsWithRef<'button'> {
  setIsOpen: (state?: boolean) => void
  sidebarItems: ISidebarItem[]
}
export const AppBar = ({ setIsOpen, sidebarItems }: Props) => {
  return (
    <AppBarBase setIsOpen={setIsOpen}>
      <>
        <h1 className="flex justify-center mb-6">
          <img src={Logo} width={38} height={38} alt="lsd" />
        </h1>
        {sidebarItems.map((item) => {
          return (
            <AppBarItemBase
              active={
                typeof item.openend === 'boolean'
                  ? item.openend
                  : item.openend()
              }
              key={item.name}
              to=""
              className="mb-2"
            >
              {item.icon && <item.icon size={20} />}
            </AppBarItemBase>
          )
        })}
      </>
    </AppBarBase>
  )
}

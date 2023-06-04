import React from 'react'
import { SidebarContext } from '@/providers/SidebarProvider'
import { Icon } from '../core/Icon'
import { AppBar } from './AppBar'
import { SidebarItemBase } from './Base/SidebarBase/SidebarItemBase/sidebarItemBase'
import Logo from './AppBar/icon.svg'
import { SidebarItems } from './sidebarItems'
import { SidebarBase } from './Base'

type Props = React.PropsWithChildren

export const Sidebar = (props: Props) => {
  const sidebarContext = React.useContext(SidebarContext)

  const [active, setActive] = React.useState('')
  return (
    <div {...props}>
      <AppBar
        sidebarItems={SidebarItems}
        setIsOpen={sidebarContext.setIsOpen}
      />
      <SidebarBase>
        <div className="flex justify-between">
          <img src={Logo} alt="logo" className="mr-3" />
          <h1 className="text-sm font-bold text-blue-600">
            Antialias Design System
          </h1>
        </div>
        <div className="py-6">
          {SidebarItems.map((item) => (
            <div key={item.name} className="rounded">
              <SidebarItemBase
                opened={
                  typeof item.openend === 'boolean'
                    ? item.openend
                    : item.openend()
                }
                active={active === item.name}
                onClick={() => setActive(item.name)}
                className="flex items-center"
              >
                {item.icon && (
                  <Icon
                    icon={item.icon}
                    className="mr-3 inline"
                    size="md"
                    alt="activity"
                  />
                )}
                <span>{item.name}</span>
              </SidebarItemBase>
              {item.children &&
                item.children.map((child) => (
                  <SidebarItemBase
                    key={child.name}
                    opened={
                      typeof child.openend === 'boolean'
                        ? child.openend
                        : child.openend()
                    }
                    active={
                      typeof child.active === 'boolean'
                        ? child.active
                        : child.active()
                    }
                    to="sldj"
                  >
                    <span className="ml-9">{child.name}</span>
                  </SidebarItemBase>
                ))}

              {/* <SidebarItem to="sldj" className="bg-white  ">
                <span className="ml-9 text-gray-700">Stock Form</span>
              </SidebarItem> */}
            </div>
          ))}
        </div>

        <hr />
        {/* <div className="py-6">
          <SidebarItem to="jls" className="font-semibold" >
            Project
          </SidebarItem>
          <SidebarItem to="jls">
            Website Design
          </SidebarItem>
          <SidebarItem to="jls" >
            Customer migration guides
          </SidebarItem>
          <SidebarItem to="jls" >
            Profit sharing program
          </SidebarItem>
        </div> */}
      </SidebarBase>
    </div>
  )
}

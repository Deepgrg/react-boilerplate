import { Button } from '@/components/ui/core/button'
import { Sidebar } from '@/components/ui/sidebar'
import { SidebarContext } from '@/providers/SidebarProvider'
import React from 'react'

export const ButtonAndSidebar = () => {
  const sidebarContext = React.useContext(SidebarContext)

  return (
    <div className="flex h-screen">
      <Sidebar />
      {/** todo put 3.5 in a variable */}
      <main
        className={`flex-1 px-3 ${sidebarContext.isOpen ? '' : 'ml-[3.5rem]'}`}
      >
        <h1 className="text-3xl mb-1">Button Sizes</h1>
        <div className="mb-5">
          <Button variant="primary" size="large" className="mr-3">
            Large Button
          </Button>
          <Button variant="primary" className="mr-3">
            Regular Button
          </Button>
          <Button variant="primary" size="small">
            Small Button
          </Button>
        </div>
        <h1 className="text-3xl mb-1">Button Display</h1>
        <div className="mb-5">
          <Button className="mb-1">Inline</Button>
          <br />
          <Button display="block">Block</Button>
        </div>

        <h1 className="text-3xl mb-3">Button State</h1>
        <div className="mb-2">
          <Button className="mr-3">Default</Button>
          <Button className="mr-3">Hovered</Button>
          <Button autoFocus className="mr-3">
            Focused
          </Button>
          <Button className="mr-3">Clicked (Click to activate)</Button>
          <Button disabled variant="primary">
            Disabled (todo)
          </Button>
        </div>
        <h2 className="mb-2 ml-3 text-1xl">Disabled</h2>
        <div className="mb-2">
          <Button className="mr-3" disabled variant="primary">
            Primary
          </Button>
          <Button className="mr-3" disabled variant="info">
            Info
          </Button>
          <Button autoFocus className="mr-3" disabled variant="success">
            Success
          </Button>
          <Button className="mr-3" disabled variant="warning">
            Warning
          </Button>
          <Button disabled variant="gray">
            Gray
          </Button>
        </div>
        <h2 className="mb-2 ml-3 text-1xl">Disabled Outline</h2>
        <div className="mb-2">
          <Button
            className="mr-3"
            disabled
            btnType="outlined"
            variant="primary"
          >
            Primary
          </Button>
          <Button className="mr-3" disabled btnType="outlined" variant="info">
            Info
          </Button>
          <Button
            autoFocus
            className="mr-3"
            btnType="outlined"
            disabled
            variant="success"
          >
            Success
          </Button>
          <Button
            className="mr-3"
            disabled
            btnType="outlined"
            variant="warning"
          >
            Warning
          </Button>
          <Button disabled btnType="outlined" variant="gray">
            Gray
          </Button>
        </div>
        <h2 className="mb-2 ml-3 text-1xl">Disabled Ghost</h2>
        <div className="mb-2">
          <Button className="mr-3" disabled btnType="ghost" variant="primary">
            Primary
          </Button>
          <Button className="mr-3" disabled btnType="ghost" variant="info">
            Info
          </Button>
          <Button
            autoFocus
            className="mr-3"
            btnType="ghost"
            disabled
            variant="success"
          >
            Success
          </Button>
          <Button className="mr-3" disabled btnType="ghost" variant="warning">
            Warning
          </Button>
          <Button disabled btnType="ghost" variant="gray">
            Gray
          </Button>
        </div>

        <h1 className="text-3xl mb-3">Button Types</h1>
        <div className="mb-5">
          <h1 className="text-2xl ml-3 mb-1">Solid</h1>
          <Button className="mr-3   mb-1">Solid</Button>
          <h1 className="text-2xl ml-3 mb-1">Outline</h1>
          <Button btnType="outlined" className="mr-3">
            Outlined
          </Button>
          <Button btnType="outlined" variant="primary" className="mr-3">
            Outlined Primary
          </Button>
          <Button btnType="outlined" variant="info" className="mr-3 mb-1">
            Outlined Info
          </Button>
          <Button btnType="outlined" variant="warning" className="mr-3 mb-1">
            Outlined Warning
          </Button>
          <Button btnType="outlined" variant="gray" className="mr-3 mb-1">
            Outlined Gray
          </Button>
          <br />
          <h1 className="text-2xl ml-3 mb-1">Ghost</h1>
          <Button btnType="ghost" className="mr-3" variant="primary">
            Ghost Primary
          </Button>
          <Button btnType="ghost" className="mr-3">
            Ghost Primary
          </Button>
          <Button btnType="ghost" variant="info" className="mr-3">
            Ghost Info
          </Button>
          <Button btnType="ghost" variant="danger" className="mr-3 mb-2">
            Ghost Danger
          </Button>
          <br />
          <Button btnType="ghost" variant="warning" className="mr-3 mb-1">
            Ghost Warning
          </Button>
          <Button btnType="ghost" variant="gray" className="mr-3">
            Ghost Gray
          </Button>
        </div>
      </main>
    </div>
  )
}

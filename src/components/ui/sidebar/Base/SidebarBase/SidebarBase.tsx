import { getComputedClassNames } from '@/utility/tailwind/tailwind-utility'
import React from 'react'
import { ArrowLeft } from 'phosphor-react'
import { SidebarContext } from '@/providers/SidebarProvider'
import {
  SidebarBaseStyles,
  SidebarCloseClass,
  SidebarTransitionClass,
} from './sidebar.schema'
import {
  SidebarArrowBaseClasses,
  SidebarArrowClassOnCloseAndOpen,
} from './SidebarItemBase/sidebarItemBase.schema'
import { Icon } from '../../../core/Icon'

type Props = React.ComponentPropsWithRef<'button'>
export const SidebarBase = ({ ...props }: Props) => {
  const sidebarContext = React.useContext(SidebarContext)

  const classNames = getComputedClassNames(
    SidebarBaseStyles,
    props.className,
    SidebarTransitionClass,
    sidebarContext.isOpen ? '' : SidebarCloseClass
  )

  const sidebarArrowClasses = getComputedClassNames(
    SidebarArrowBaseClasses,
    SidebarArrowClassOnCloseAndOpen[
      (sidebarContext.isOpen ? 'open' : 'close') as 'open' | 'close'
    ]
  )
  return (
    <aside className={classNames}>
      <button
        type="button"
        onClick={() => sidebarContext.setIsOpen(false)}
        className={sidebarArrowClasses}
      >
        <Icon icon={ArrowLeft} size="md" alt="activity" />
      </button>
      {props.children}
    </aside>
  )
}

import { getComputedClassNames } from '@/utility/tailwind/tailwind-utility'
import React from 'react'
import { ArrowRight } from 'phosphor-react'
import { Icon } from '../../../core/Icon'
import { SidebarArrowBaseClasses } from '../SidebarBase/SidebarItemBase/sidebarItemBase.schema'
import { AppBarBaseClass } from './appBarBase.schema'

interface Props extends React.ComponentPropsWithRef<'button'> {
  setIsOpen: (state?: boolean) => void
}
export const AppBarBase = ({ ...props }: Props) => {
  const classNames = getComputedClassNames(AppBarBaseClass, props.className)
  return (
    <nav className={classNames}>
      <button
        type="button"
        onClick={() => props.setIsOpen(true)}
        className={SidebarArrowBaseClasses}
      >
        <Icon icon={ArrowRight} size="md" alt="activity" />
      </button>
      {props.children}
    </nav>
  )
}

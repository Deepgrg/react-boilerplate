import { getComputedClassNames } from '@/utility/tailwind/tailwind-utility'
import React from 'react'
import { Link } from 'react-router-dom'
import { AppBarItemBaseClass } from './AppBarBaseItem.schema'

interface Props extends React.ComponentPropsWithRef<typeof Link> {
  active?: boolean
}
export const AppBarItemBase = ({ ...props }: Props) => {
  const classNames = getComputedClassNames(
    AppBarItemBaseClass,
    props.className,
    props.active ? 'bg-gray-300' : ''
  )

  return (
    <a {...props} className={classNames}>
      {props.children}
    </a>
  )
}

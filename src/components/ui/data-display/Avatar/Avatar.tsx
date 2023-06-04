import { getComputedClassNames } from '@/utility/tailwind/tailwind-utility'
import { User } from 'phosphor-react'
import React from 'react'
import {
  IconSizeClassMapping,
  IconSizeMapping,
  InitialsSizeClassMapping,
  SizeClassMapping,
  SubVarientSizeClassMapping,
  VariantClassMapping,
} from './Avatar.schema'
import { AvatarProps } from './Avatar.types'

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const {
    as,
    variant = 'icon',
    size = 'lg',
    alt = 'profile-image',
    imageSrc,
    subVarient = 'normal',
    icon = <User />,
    color = 'text-blue-900',
    backgroundColor = 'bg-blue-100',
    iconBackgroundColor = 'bg-blue-800',
    statusColor = 'bg-green-600',
    iconColor = 'text-white',
    initials,
    className,
    ...restProps
  } = props

  const computedClasses = getComputedClassNames(
    'relative rounded-full flex justify-center items-center select-none',
    VariantClassMapping[variant],
    className,
    SizeClassMapping[size],
    InitialsSizeClassMapping[size],
    color,
    backgroundColor
  )

  const computedStatusClasses = getComputedClassNames(
    'absolute bottom-0 right-0 rounded-full ring-2 ring-white',
    SubVarientSizeClassMapping[size],
    statusColor
  )

  const computedIconClasses = getComputedClassNames(
    'absolute bottom-0 right-0 rounded-full ring-2 ring-white flex justify-center items-center',
    IconSizeClassMapping[size],
    SubVarientSizeClassMapping[size],
    iconBackgroundColor,
    iconColor
  )

  const renderElement = () => {
    if (variant === 'initials' && initials)
      return <span>{initials.toUpperCase()}</span>
    if (variant === 'image' && imageSrc) return null
    return <User size={IconSizeMapping[size]} />
  }

  return React.createElement(
    as || 'div',
    { ...restProps, ref, className: computedClasses },

    // this is main avatar icon with position relative
    variant === 'image' && imageSrc ? (
      <img className="rounded-full" src={imageSrc} alt={alt} />
    ) : (
      renderElement()
    ),

    // these are for avatar status/indicator with position absolute
    subVarient === 'status' && <span className={computedStatusClasses} />,
    subVarient === 'icon' && <span className={computedIconClasses}>{icon}</span>
  )
})

Avatar.displayName = 'Avatar'

export default Avatar

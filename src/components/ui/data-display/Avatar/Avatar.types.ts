import { ReactNode } from 'react'
import { Color, DefaultSizes } from '../../types'

export type Variant = 'image' | 'initials' | 'icon'
export type SubVariant = 'normal' | 'status' | 'icon'

interface AvatarCommonProps {
  variant?: Variant // type of avatar
  as?: React.ElementType // eg: h1, h2, p, small
  size?: DefaultSizes
  color?: Color<'text'> // tailwind text color class
  backgroundColor?: Color<'bg'> // tailwind background color class
  className?: string
  subVarient?: SubVariant
}

interface AvatarSubVarientProps {
  icon?: ReactNode
  iconColor?: Color<'text'>
  iconBackgroundColor?: Color<'bg'> // tailwind background color class
  statusColor?: Color<'bg'>
}

interface AvatarImageVariantProps extends AvatarSubVarientProps {
  variant: 'image'
  imageSrc: string
  alt?: string
  initials?: string
}

interface AvatarInitialsVariantProps extends AvatarSubVarientProps {
  variant: 'initials'
  initials: string
  alt?: string
  imageSrc?: string
}

interface AvatarIconVariantProps extends AvatarSubVarientProps {
  variant: 'icon'
  initials?: string
  alt?: string
  imageSrc?: string
}

export type AvatarProps = (
  | AvatarImageVariantProps
  | AvatarInitialsVariantProps
  | AvatarIconVariantProps
) &
  AvatarCommonProps

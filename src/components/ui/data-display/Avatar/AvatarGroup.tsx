import { getComputedClassNames } from '@/utility/tailwind/tailwind-utility'
import { Plus, User } from 'phosphor-react'
import React from 'react'
import { Color, DefaultSizes } from '../../types'
import {
  IconSizeMapping,
  InitialsSizeClassMapping,
  SizeClassMapping,
} from './Avatar.schema'

interface AvatarGroupProps {
  alt?: string
  imageSrc?: string
  initials?: string
}

interface Props {
  size?: DefaultSizes
  className?: string
  as?: React.ElementType // eg: h1, h2, p, small
  color?: Color<'text'> // tailwind text color class
  backgroundColor?: Color<'bg'> // tailwind background color class
  displayLength?: number
  avatarGroup: Array<AvatarGroupProps>
  handleActionButton?: () => void
}

const AvatarGroup = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    as,
    size = 'lg',
    color = 'text-blue-900',
    backgroundColor = 'bg-blue-100',
    className,
    avatarGroup,
    displayLength = avatarGroup.length > 5 ? 5 : avatarGroup.length,
    handleActionButton,
    ...restProps
  } = props

  const computedWrapperClasses = getComputedClassNames('flex gap-3', className)

  const avatarGroupWrapperClass = getComputedClassNames('flex')

  const computedAvatarClasses = getComputedClassNames(
    'relative rounded-full flex justify-center items-center first:ml-1 last:mr-1 -ml-1 outline-white ring-2 ring-white hover:ring-1 hover:ring-offset-2 hover:ring-purple-600 select-none',
    SizeClassMapping[size],
    InitialsSizeClassMapping[size],
    color,
    backgroundColor
  )

  const computedActionButtonClasses = getComputedClassNames(
    'relative rounded-full flex justify-center items-center text-slate-400 bg-slate-50 hover:bg-slate-100 border border-slate-300 border-dashed ',
    SizeClassMapping[size],
    InitialsSizeClassMapping[size]
  )

  const renderElement = (avatar: AvatarGroupProps) => {
    if (avatar.initials) return <span>{avatar.initials.toUpperCase()}</span>
    if (avatar.imageSrc) return null
    return <User size={IconSizeMapping[size]} />
  }

  return React.createElement(
    as || 'div',
    { ...restProps, ref, className: computedWrapperClasses },
    <div className={avatarGroupWrapperClass}>
      {avatarGroup.length &&
        avatarGroup.map(
          (avatar, index) =>
            index < displayLength && (
              // eslint-disable-next-line
              <div key={index} className={computedAvatarClasses}>
                {avatar.imageSrc ? (
                  <img
                    className="rounded-full"
                    src={avatar.imageSrc}
                    alt={avatar.alt || 'profile-image'}
                  />
                ) : (
                  renderElement(avatar)
                )}
              </div>
            )
        )}
      {avatarGroup.length - displayLength > 0 && (
        <div className={computedAvatarClasses}>
          <span>+{avatarGroup.length - displayLength}</span>
        </div>
      )}
    </div>,
    handleActionButton && (
      <button
        type="button"
        onClick={handleActionButton}
        className={computedActionButtonClasses}
      >
        <Plus />
      </button>
    )
  )
})

AvatarGroup.displayName = 'AvatarGroup'

export default AvatarGroup

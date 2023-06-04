import React, { PropsWithChildren } from 'react'
import { getComputedClassNames } from '@/utility/tailwind/tailwind-utility'
import { Flexbox } from '../../core/Flexbox'
import { Button } from '../../core/button/index'
import { VariantClassMapping } from './Pageaction.schema'

interface Props extends PropsWithChildren {
  shadow?: boolean
  className?: string
  ghostButtonLabel?: string
  regularButtonLabel: string
  testid?: string
  variant?: string
}
export type PageactionProps = React.PropsWithChildren & Props

const Pageaction: React.FunctionComponent<PageactionProps> = (props) => {
  const {
    className,
    ghostButtonLabel,
    regularButtonLabel,
    shadow,
    testid = 'pageaction',
  } = props

  const variant = shadow ? 'withshadow' : 'withoutshadow'

  const computedClasses = getComputedClassNames(
    VariantClassMapping[variant],
    className
  )
  return (
    <Flexbox
      as="div"
      className={computedClasses}
      justify="flex-end"
      data-testid={testid}
    >
      {ghostButtonLabel && (
        <Button
          btnType="ghost"
          variant="info"
          size="regular"
          className="mr-3 px-4 py-2"
        >
          {ghostButtonLabel}
        </Button>
      )}
      <Button variant="info" size="regular" className="mr-3 px-4 py-2">
        {regularButtonLabel}
      </Button>
    </Flexbox>
  )
}

export default Pageaction

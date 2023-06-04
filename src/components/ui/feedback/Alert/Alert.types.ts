import { IconProps } from 'phosphor-react'
import { Theme, Variant } from './Alert.schema'

export type AlertCommonProps = {
  theme?: Theme
  variant?: Variant
  isDismissible?: boolean
  className?: string
  icon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >
  timeout?: number
  autoClose?: boolean
} & (
  | {
      timeout?: never
      autoClose?: false
    }
  | {
      timeout?: number
      autoClose?: true | undefined
    }
)

export interface AlertStripProps {
  variant?: 'strip'
  description: string
  title?: never
}

export type AlertDefaultProps = {
  variant?: 'toaster' | 'default' | undefined
  title?: string
  description?: string
} & (
  | {
      description: string
    }
  | {
      title: string
    }
)

export type AlertProps = (AlertDefaultProps | AlertStripProps) &
  AlertCommonProps

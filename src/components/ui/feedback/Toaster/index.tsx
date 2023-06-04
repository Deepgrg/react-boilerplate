import { IconProps, IconWeight, Info, X } from 'phosphor-react'
import { toast } from 'react-toastify'
import { Icon } from '../../core/Icon'
import { Color } from '../../types'
import { Variant } from '../../core/Icon/Icon.schema'
import {
  DrawLine,
  ToastBorderColorClassMapping,
  ToastIconColorClassMapping,
  TOASTTYPE,
  ToastVariant,
  ToastVariantMessageMapping,
} from './Toaster.schema'

export interface IToasterProps {
  message?: string
  type?: ToastVariant
  showIcon?: boolean
  icon?: {
    icon: React.ForwardRefExoticComponent<
      IconProps & React.RefAttributes<SVGSVGElement>
    >
    alt?: string
    color?: Color<'text'>
    weight?: IconWeight
    size?: Variant
  }
  isUndo?: boolean
  showCloseButton?: boolean
}

const initToaster = (props: IToasterProps) => {
  const {
    type = TOASTTYPE.DEFAULT,
    message,
    icon,
    showIcon = true,
    showCloseButton = true,
    isUndo = false,
  } = props

  const toastMsg = message || ToastVariantMessageMapping[type]

  return toast(
    <div className="flex">
      <div className="flex grow items-center">
        {showIcon && (
          <div className="mr-2">
            <Icon
              icon={icon?.icon || Info}
              alt={icon?.alt || type}
              name={`${type}-toast-${toastMsg}`}
              aria-label={`aria-${type}`}
              color={icon?.color || ToastIconColorClassMapping[type]}
              weight={icon?.weight || 'bold'}
              size={icon?.size || 'lg'}
            />
          </div>
        )}
        <div
          className={`text-cool-gray-900 text-sm font-normal leading-4 ${
            isUndo ? 'w-[180px]' : 'w-[200px]'
          }`}
        >
          <p className="truncate">{toastMsg}</p>
        </div>
      </div>
      <div className="flex items-center">
        {isUndo && (
          <button type="button" className="flex text-xs mx-1 whitespace-nowrap">
            Undo
          </button>
        )}
        <div className={DrawLine.verticalLine}>&nbsp;</div>
      </div>
    </div>,
    {
      toastId: toastMsg,
      className: `place-items-center border border-l-4 rounded ${ToastBorderColorClassMapping[type]}`,
      closeButton: showCloseButton && (
        <Icon
          icon={X}
          alt="close"
          aria-label="aria-close"
          size="md"
          color="text-cool-gray-700"
        />
      ),
      hideProgressBar: true,
      bodyClassName: '!p-0',
    }
  )
}

const successToast = (props: Omit<IToasterProps, 'type'> = {}) => {
  initToaster({
    type: TOASTTYPE.SUCCESS,
    ...props,
  })
}

const warnToast = (props: Omit<IToasterProps, 'type'> = {}) => {
  initToaster({
    type: TOASTTYPE.WARNING,
    ...props,
  })
}

const infoToast = (props: Omit<IToasterProps, 'type'> = {}) => {
  initToaster({
    type: TOASTTYPE.INFO,
    ...props,
  })
}

const failedToast = (props: Omit<IToasterProps, 'type'> = {}) => {
  initToaster({
    type: TOASTTYPE.ERROR,
    ...props,
  })
}

const Toast = {
  default: initToaster,
  info: infoToast,
  error: failedToast,
  success: successToast,
  warning: warnToast,
}

export default Toast

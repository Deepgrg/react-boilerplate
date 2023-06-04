import { TypeOptions } from 'react-toastify'
import { Color } from '../../types'

type ToastVariant = TypeOptions

enum TOASTTYPE {
  ERROR = 'error',
  SUCCESS = 'success',
  WARNING = 'warning',
  INFO = 'info',
  DEFAULT = "default"
}

const ToastVariantMessageMapping: Record<ToastVariant, string> = {
  error: 'Something Went Wrong!',
  info: 'info',
  warning: 'warning',
  success: 'The Operation is successfully Executed',
  default: "Operation successful"
}

const ToastIconColorClassMapping: Record<ToastVariant, Color<'text'>> = {
  error: 'text-red-550',
  info: 'text-blue-600',
  warning: 'text-yellow-600',
  success: 'text-green-700',
  default: "text-black"
}

const ToastBorderColorClassMapping: Record<ToastVariant, Color<'border'>> = {
  error: 'border-red-550',
  info: 'border-blue-600',
  warning: 'border-yellow-600',
  success: 'border-green-700',
  default: "border-black"
}

const DrawLine = {
  verticalLine: 'border-r-2 border-cool-gray-300 h-full mr-2',
}

export type { ToastVariant }

export {
  TOASTTYPE,
  ToastVariantMessageMapping,
  ToastIconColorClassMapping,
  ToastBorderColorClassMapping,
  DrawLine,
}

import Toast, { IToasterProps } from '@/components/ui/feedback/Toaster'
import { ToastVariant } from '@/components/ui/feedback/Toaster/Toaster.schema'

interface IToasterStory extends IToasterProps {
  name?: string
  type: ToastVariant
  Component?: JSX.Element
}

export const ToastTypeStory: typeof Toast = {
  success: Toast.success,
  warning: Toast.warning,
  error: Toast.error,
  info: Toast.info,
  default: Toast.default,
}

const ToastTypeClassMapping = {
  success: 'bg-green-500 hover:bg-green-700',
  warning: 'bg-yellow-500 hover:bg-yellow-700',
  error: 'bg-red-500 hover:bg-red-700',
  info: 'bg-blue-500 hover:bg-blue-700',
  default: 'bg-black',
}

const ToasterStory = (props: IToasterStory) => {
  const { name, type, Component, ...restProps } = props
  return (
    <>
      <button
        type="button"
        className={`text-white font-bold py-2 px-4 rounded ${ToastTypeClassMapping[type]}`}
        onClick={() => ToastTypeStory[type]?.({ ...restProps })}
      >
        {name || type}
      </button>
      {Component && Component}
    </>
  )
}

export default ToasterStory

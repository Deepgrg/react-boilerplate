import Toast, { IToasterProps } from '@/components/ui/feedback/Toaster'
import { ToastContainer } from 'react-toastify'

const ToasterButton = (props: IToasterProps) => {
  const { type, message, ...restProps } = props
  return (
    <>
      <ToastContainer />
      <button
        type="button"
        onClick={() => Toast.default({ type, message, ...restProps })}
      >
        ShowToast
      </button>
    </>
  )
}

export default ToasterButton

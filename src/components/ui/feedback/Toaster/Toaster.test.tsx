import { fireEvent, render, screen, waitFor } from '@/lib/__test__'
import ToasterButton from '@/components/ui/feedback/Toaster/ToasterButton'
import { IToasterProps } from '@/components/ui/feedback/Toaster'

const toastProps: Partial<IToasterProps> = {
  type: 'error',
  message: 'Hello, world!',
}

describe('ToasterButton', () => {
  const { type, message } = toastProps
  it('should show a toast with icon and all buttons, when the button is clicked', async () => {
    render(
      <ToasterButton
        message={message}
        type={type}
        isUndo
        showIcon
        showCloseButton
      />
    )

    fireEvent.click(screen.getByRole('button', { name: 'ShowToast' }))

    // You can check if the toast is displayed by searching for the toast message
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    message && expect(await screen.findByText(message)).toBeInTheDocument()
    expect(await waitFor(() => screen.queryByText('Undo'))).toBeInTheDocument()
    expect(await screen.findByLabelText(`aria-${type}`)).toBeInTheDocument()
    expect(await screen.findByLabelText('aria-close')).toBeInTheDocument()
  })

  it('should not show any button or icon in toast', async () => {
    render(
      <ToasterButton
        message={message}
        type={type}
        isUndo={false}
        showIcon={false}
        showCloseButton={false}
      />
    )

    fireEvent.click(screen.getByRole('button', { name: 'ShowToast' }))

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    message && expect(await screen.findByText(message)).toBeInTheDocument()
    expect(
      await waitFor(() => screen.queryByText('Undo'))
    ).not.toBeInTheDocument()
    expect(
      await waitFor(() => screen.queryByLabelText(`aria-${type}`))
    ).not.toBeInTheDocument()

    expect(
      await waitFor(() => screen.queryByLabelText('aria-close'))
    ).not.toBeInTheDocument()
  })
})

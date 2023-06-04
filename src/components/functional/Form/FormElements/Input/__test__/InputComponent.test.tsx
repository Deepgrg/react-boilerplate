import { act, render, screen, waitFor } from '@/lib/__test__'
import { IFormInput } from '@/components/functional/Form/FormElements/form-elemets.types'
import InputComponent from '@/components/functional/Form/FormElements/Input/InputComponent'
import userEvent from '@testing-library/user-event'

const renderPage = async (props: IFormInput) => {
  await act(async () => render(<InputComponent formProps={{ ...props }} />))
}

describe('Input Component', () => {
  it('input render', async () => {
    await renderPage({
      type: 'text',
      name: 'label',
      placeholder: 'Add Label...',
    })
    const input = screen.getByPlaceholderText(/Add Label.../i)
    await waitFor(() => expect(input).toBeInTheDocument())
  })
  it('input disabled', async () => {
    await renderPage({
      type: 'text',
      name: 'label',
      placeholder: 'Add Label...',
      disabled: true,
    })
    const input = screen.getByPlaceholderText(/Add Label.../i)
    await waitFor(() => expect(input).toBeDisabled())
  })
  it('input type', async () => {
    await renderPage({
      type: 'text',
      name: 'label',
      placeholder: 'Add Label...',
    })
    const input = screen.getByPlaceholderText('Add Label...')
    userEvent.type(input, 'test content')
    await waitFor(() => expect(input).toHaveValue('test content'))
  })
})

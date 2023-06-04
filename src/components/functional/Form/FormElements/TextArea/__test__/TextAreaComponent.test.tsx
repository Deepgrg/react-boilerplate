import { describe, it } from 'vitest'
import { render, act, screen, waitFor } from '@/lib/__test__'
import { ITextArea } from '@/components/functional/Form/FormElements/form-elemets.types'
import TextAreaComponent from '@/components/functional/Form/FormElements/TextArea/TextAreaComponent'
import userEvent from '@testing-library/user-event'

const renderPage = async (props: ITextArea) => {
  await act(async () => render(<TextAreaComponent {...props} />))
}

describe('Text Area Component', () => {
  it('text area render', async () => {
    await renderPage({
      name: 'text-area-label',
      placeholder: 'Add Description...',
    })
    const textarea = screen.getByPlaceholderText(/add description.../i)
    await waitFor(() => expect(textarea).toBeInTheDocument())
  })
  it('text area disabled', async () => {
    await renderPage({
      name: 'text-area-label',
      placeholder: 'Add Description...',
      disabled: true,
    })
    const textarea = screen.getByPlaceholderText(/add description.../i)
    await waitFor(() => expect(textarea).toBeDisabled())
  })
  it('text area type', async () => {
    await renderPage({
      name: 'text-area-label',
      placeholder: 'Add Description...',
    })
    const textarea = screen.getByPlaceholderText(/add description.../i)
    userEvent.type(textarea, 'test content')
    await waitFor(() => expect(textarea).toHaveValue('test content'))
  })
})

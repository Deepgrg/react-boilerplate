import { describe, it } from 'vitest'
import { render, act, screen, waitFor } from '@/lib/__test__'
import { IFormRadio } from '@/components/functional/Form/FormElements/form-elemets.types'
import userEvent from '@testing-library/user-event'
import RadioComponent from '@/components/functional/Form/FormElements/Radio/RadioComponent'

const renderPage = async (props: IFormRadio) => {
  await act(async () => render(<RadioComponent {...props} />))
}

describe('Radio Component', () => {
  it('radio render', async () => {
    await renderPage({
      name: 'radio',
      options: [
        {
          label: 'Option 1',
          value: 'option1',
        },
        {
          label: 'Option 2',
          value: 'option2',
        },
      ],
    })
    const radioInput = screen.getByLabelText(/option 1/i)
    await waitFor(() => expect(radioInput).toBeInTheDocument())
  })
  it('input disabled', async () => {
    await renderPage({
      name: 'radio',
      options: [
        {
          label: 'Option 1',
          value: 'option1',
        },
      ],
      disabled: true,
    })
    const radioInputOption1 = screen.getByLabelText(/option 1/i)
    await waitFor(() => expect(radioInputOption1).toBeDisabled())
    expect(radioInputOption1).not.toBeChecked()
    await act(async () => {
      await userEvent.click(radioInputOption1)
    })
    expect(radioInputOption1).not.toBeChecked()
  })
  it('radio check uncheck', async () => {
    await renderPage({
      name: 'radio label',
      options: [
        {
          label: 'Option 1',
          value: 'option1',
        },
        {
          label: 'Option 2',
          value: 'option2',
        },
      ],
    })
    const radioInputOption1 = screen.getByLabelText(/option 1/i)
    const radioInputOption2 = screen.getByLabelText(/option 2/i)
    expect(radioInputOption1).not.toBeChecked()
    await act(async () => {
      await userEvent.click(radioInputOption1)
    })
    expect(radioInputOption1).toBeChecked()
    await act(async () => {
      await userEvent.click(radioInputOption2)
    })
    expect(radioInputOption1).not.toBeChecked()
    expect(radioInputOption2).toBeChecked()
  })
})

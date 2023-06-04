import { describe, it } from 'vitest'
import { render, act, screen, waitFor } from '@/lib/__test__'
import { IFormCheckbox } from '@/components/functional/Form/FormElements/form-elemets.types'
import CheckboxComponent from '@/components/functional/Form/FormElements/Checkbox/CheckboxComponent'
import userEvent from '@testing-library/user-event'

const renderPage = async (props: IFormCheckbox) => {
  await act(async () => render(<CheckboxComponent {...props} />))
}

describe('Checkbox Component', () => {
  it('checkbox render', async () => {
    await renderPage({
      name: 'checkbox',
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
    const checkboxInput = screen.getByLabelText(/option 1/i)
    await waitFor(() => expect(checkboxInput).toBeInTheDocument())
  })
  it('input disabled', async () => {
    await renderPage({
      name: 'checkbox',
      options: [
        {
          label: 'Option 1',
          value: 'option1',
        },
      ],
      disabled: true,
    })
    const checkboxInputOption1 = screen.getByLabelText(/option 1/i)
    await waitFor(() => expect(checkboxInputOption1).toBeDisabled())
    expect(checkboxInputOption1).not.toBeChecked()
    await act(async () => {
      await userEvent.click(checkboxInputOption1)
    })
    expect(checkboxInputOption1).not.toBeChecked()
  })
  it('checkbox check uncheck', async () => {
    await renderPage({
      name: 'checkbox label',
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
    const checkboxInputOption1 = screen.getByLabelText(/option 1/i)
    const checkboxInputOption2 = screen.getByLabelText(/option 2/i)
    expect(checkboxInputOption1).not.toBeChecked()
    await act(async () => {
      await userEvent.click(checkboxInputOption1)
    })
    expect(checkboxInputOption1).toBeChecked()
    await act(async () => {
      await userEvent.click(checkboxInputOption1)
    })
    expect(checkboxInputOption1).not.toBeChecked()
    expect(checkboxInputOption2).not.toBeChecked()
  })
})

import { describe, it } from 'vitest'
import { render, act, screen, waitFor } from '@/lib/__test__'
import Example from '@/components/functional/Form/FormExample/Example'
import userEvent from '@testing-library/user-event'

const renderPage = async () => {
  return act(async () => render(<Example />))
}

describe('Form Example', () => {
  it('get by label text', async () => {
    await renderPage()
    const firstNameInput = screen.getByLabelText(/first name/i)
    await waitFor(() => expect(firstNameInput).toBeInTheDocument())
    const lastNameInput = screen.getByLabelText(/last name/i)
    await waitFor(() => expect(lastNameInput).toBeInTheDocument())
    await waitFor(() => expect(firstNameInput).toBeInTheDocument())
    const descriptionInput = screen.getByLabelText(/description/i)
    await waitFor(() => expect(descriptionInput).toBeInTheDocument())

    const checkboxReact = screen.getByLabelText(/react/i)
    await waitFor(() => expect(checkboxReact).toBeInTheDocument())
    const checkboxAngular = screen.getByLabelText(/angular/i)
    await waitFor(() => expect(checkboxAngular).toBeInTheDocument())

    const radioMale = screen.getByLabelText('Male')
    await waitFor(() => expect(radioMale).toBeInTheDocument())
    const radioFemale = screen.getByLabelText('Female')
    await waitFor(() => expect(radioFemale).toBeInTheDocument())
  })
  it('enter value', async () => {
    await renderPage()
    const firstNameInput = screen.getByLabelText(/first name/i)
    await userEvent.type(firstNameInput, 'sabin')
    await waitFor(() => expect(firstNameInput).toHaveValue('sabin'))
    const lastNameInput = screen.getByLabelText(/last name/i)
    await userEvent.type(lastNameInput, 'ghimire')
    await waitFor(() => expect(lastNameInput).toHaveValue('ghimire'))
    const descriptionInput = screen.getByLabelText(/description/i)
    await userEvent.type(descriptionInput, 'this is test description')
    await waitFor(() =>
      expect(descriptionInput).toHaveValue('this is test description')
    )

    const checkboxReact = screen.getByLabelText(/react/i)
    await userEvent.click(checkboxReact)
    expect(checkboxReact).toBeChecked()
    const checkboxAngular = screen.getByLabelText(/angular/i)
    await userEvent.click(checkboxAngular)
    expect(checkboxAngular).toBeChecked()

    const radioMale = screen.getByLabelText('Male')
    const radioFemale = screen.getByLabelText('Female')
    await userEvent.click(radioMale)
    expect(radioMale).toBeChecked()
    expect(radioFemale).not.toBeChecked()
    await userEvent.click(radioFemale)
    expect(radioFemale).toBeChecked()
    expect(radioMale).not.toBeChecked()
  })
  it('validation on submit', async () => {
    await renderPage()
    const button = screen.getByRole('button', { name: /submit/i })
    await userEvent.click(button)
    await waitFor(() =>
      expect(screen.queryByText(/first name is required/i)).toBeInTheDocument()
    )
    await waitFor(() =>
      expect(screen.queryByText(/last name is required/i)).toBeInTheDocument()
    )
    await waitFor(() =>
      expect(screen.queryByText(/description is required/i)).toBeInTheDocument()
    )
    await waitFor(() =>
      expect(
        screen.queryByText(/at least 1 language must be selected/i)
      ).toBeInTheDocument()
    )
    await waitFor(() =>
      expect(screen.queryByText(/gender is required/i)).toBeInTheDocument()
    )
  })
  it('check length validation', async () => {
    await renderPage()
    const firstNameInput = screen.getByLabelText(/first name/i)
    await userEvent.type(firstNameInput, 's')
    await waitFor(() =>
      expect(
        screen.queryByText(/first name must be of atleast 3 characters/i)
      ).toBeInTheDocument()
    )
    const lastNameInput = screen.getByLabelText(/last name/i)
    await userEvent.type(
      lastNameInput,
      'sssssssssssssssssssssssssssssssssssssssssssssssssss'
    )
    await waitFor(() =>
      expect(
        screen.queryByText(/last name can be of maximum 50 characters/i)
      ).toBeInTheDocument()
    )
    const descriptionInput = screen.getByLabelText(/description/i)
    await userEvent.type(descriptionInput, 'ss')
    await waitFor(() =>
      expect(
        screen.queryByText(/description must be of atleast 10 characters/i)
      ).toBeInTheDocument()
    )
  })
  it('validation removal', async () => {
    await renderPage()
    const button = screen.getByRole('button', { name: /submit/i })
    await userEvent.click(button)
    const firstNameInput = screen.getByLabelText(/first name/i)
    await userEvent.type(firstNameInput, 'sabin')
    const lastNameInput = screen.getByLabelText(/last name/i)
    await userEvent.type(lastNameInput, 'ghimire')
    const descriptionInput = screen.getByLabelText(/description/i)
    await userEvent.type(descriptionInput, 'this is test description')

    const checkboxReact = screen.getByLabelText(/react/i)
    await userEvent.click(checkboxReact)

    const radioMale = screen.getByLabelText('Male')
    await userEvent.click(radioMale)

    await waitFor(() =>
      expect(
        screen.queryByText(/first name is required/i)
      ).not.toBeInTheDocument()
    )
    await waitFor(() =>
      expect(
        screen.queryByText(/last name is required/i)
      ).not.toBeInTheDocument()
    )
    await waitFor(() =>
      expect(
        screen.queryByText(/description is required/i)
      ).not.toBeInTheDocument()
    )
    await waitFor(() =>
      expect(
        screen.queryByText(/at least 1 language must be selected/i)
      ).not.toBeInTheDocument()
    )
    await waitFor(() =>
      expect(screen.queryByText(/gender is required/i)).not.toBeInTheDocument()
    )
  })
})

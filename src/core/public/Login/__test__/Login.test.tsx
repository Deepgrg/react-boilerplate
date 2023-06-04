import { describe, it } from 'vitest'
import { act, render, screen, waitFor } from '@/lib/__test__'
import userEvent from '@testing-library/user-event'
import Login from '../Login'

const renderPage = async () => {
  await act(async () => render(<Login />))
}

describe('Login', () => {
  it('login route test', async () => {
    await renderPage()
    await waitFor(() =>
      expect(
        screen.getByRole('heading', {
          level: 1,
        })
      ).toHaveTextContent(/login/i)
    )
  })

  it('renders Login', async () => {
    await renderPage()
    await waitFor(() =>
      expect(
        screen.getByRole('heading', {
          level: 1,
        })
      ).toHaveTextContent(/login/i)
    )
  })

  it('test required validation', async () => {
    await renderPage()
    const button = screen.getByRole('button')
    await act(async () => {
      await userEvent.click(button)
    })
    expect(screen.getByText(/email is required/i)).toBeInTheDocument()
    expect(screen.getByText(/password is required/i)).toBeInTheDocument()
  })

  it('test validation on change', async () => {
    await renderPage()
    const button = screen.getByRole('button')
    const emailInput = screen.getByLabelText(/email/i)
    const passwordInput = screen.getByLabelText(/password/i)

    await act(async () => {
      await userEvent.click(button)
      await userEvent.type(emailInput, 'sabin.infode@gmail.com')
      await userEvent.type(passwordInput, 'test@123')
    })

    expect(screen.queryByText(/email is required/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/password is required/i)).not.toBeInTheDocument()
  })
})

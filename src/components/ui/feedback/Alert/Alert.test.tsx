import { act, expect, render, screen, waitFor, waitForElementToBeRemoved } from '@/lib/__test__'
import userEvent from '@testing-library/user-event'
import { Alert } from './Alert'

describe('Alert', () => {
  test('View Alert Test', async () => {
    await act(() => render(<Alert description="description" />))
    await waitFor(() => expect(screen.getByText('description')).toBeInTheDocument())
  })

  test('Alert Transition Test', async () => {
    await act(() => render(<Alert title="Alert" description="Alert Description" timeout={8000} />))

    await waitFor(() => expect(screen.getByText('Alert Description')).toBeInTheDocument())
    await waitForElementToBeRemoved(() => screen.queryAllByText('Alert'), {
      timeout: 8000,
    })
  }, 10000)

  test.todo('Dismissible Test', async () => {
    const user = userEvent.setup()
    await act(() => render(<Alert title="Alert" description="Alert Description" isDismissible />))
    await waitFor(() => {
      expect(screen.getByText('Alert')).toBeInTheDocument()
    })

    await user.click(screen.getByRole('button'))
    expect(screen.queryByText('Alert')).toBeNull()
  })

  test('Alert to stay on dom', async () => {
    await act(() => render(<Alert title="Alert" description="Alert Description" isDismissible autoClose={false} />))
    await waitFor(() => {
      expect(screen.getByText('Alert')).toBeInTheDocument()
    })
    expect(screen.queryByText('Alert')).toBeInTheDocument()
  }, 5000)
})

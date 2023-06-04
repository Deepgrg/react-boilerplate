import { renderHook, waitFor } from '@/lib/__test__'
import { useToggle } from '@/hooks/useToggle'

describe('useToggle', () => {
  test.todo('invoking the toggle function to change state', async () => {
    const { result } = renderHook(useToggle)

    await waitFor(() => result.current[1]())

    expect(result.current[0]).toBeTruthy()
  })
})

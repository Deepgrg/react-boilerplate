import { describe, it } from 'vitest'
import { render, act, screen, waitFor } from '@/lib/__test__'
import FooterText from '@/components/functional/Form/FormWrapper/FooterText'

const renderPage = async () => {
  await act(async () => render(<FooterText text="testing footer text" />))
}

describe('FooterText', () => {
  it('render test', async () => {
    await renderPage()
    await waitFor(() => expect(screen.getByText(/testing footer text/i)))
  })
})

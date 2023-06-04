import { act, render, screen } from '@/lib/__test__'
import FormLabel, { IFormLabel } from '@/components/functional/Form/FormWrapper/FormLabel'

const renderPage = async (props: IFormLabel) => {
  await act(() => render(<FormLabel {...props} />))
}

describe('Form Label', () => {
  it('render label text & optional', async () => {
    await renderPage({
      label: 'Label Text',
      name: 'label',
      optional: true,
    })

    expect(screen.getByText(/( optional )/i))
    expect(screen.getByText(/Label Text/i))
  })

  it('render label text', async () => {
    await renderPage({
      label: 'Label Text',
      name: 'label',
    })
    expect(screen.getByText(/label text/i))
    expect(() => screen.getByText(/( optional )/i)).toThrow()
  })
})

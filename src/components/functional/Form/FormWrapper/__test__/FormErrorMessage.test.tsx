import { describe, it } from 'vitest'
import { render, act, waitFor } from '@/lib/__test__'
import FormErrorMessage, {
  IErrorMessage,
} from '@/components/functional/Form/FormWrapper/FormErrorMessage'

const renderPage = async (props: IErrorMessage) => {
  return act(async () => render(<FormErrorMessage {...props} />))
}

describe('Form Error Message', () => {
  it('does not render error - empty errors', async () => {
    const { container } = await renderPage({
      name: 'test',
      errors: {},
    })
    await waitFor(() =>
      expect(container.getElementsByClassName('error').length).toBe(0)
    )
  })
  it('render error', async () => {
    const { container } = await renderPage({
      name: 'test',
      errors: {
        test: {
          type: 'string',
          message: 'Text is Required',
        },
      },
    })
    await waitFor(() =>
      expect(container.getElementsByClassName('error').length).toBe(1)
    )
  })
})

import * as Yup from 'yup'
import { describe, it } from 'vitest'
import { render, act, screen, waitFor } from '@/lib/__test__'
import userEvent from '@testing-library/user-event'
import FormComponent from '@/components/functional/Form/FormComponent'
import { FormInput } from '@/components/functional/Form/FormElements/Input'

interface TTestInitValue {
  test: string
}

export const validationSchema = Yup.object().shape({
  test: Yup.string().required('test is required'),
})

const renderPage = async () => {
  return act(async () =>
    render(
      <FormComponent<TTestInitValue>
        onSubmit={() => {}}
        initialValues={{ test: '' }}
        validationSchema={validationSchema}
      >
        {() => {
          return (
            <>
              <FormInput label="Test" type="text" name="test" />
              <button type="submit">Submit</button>
            </>
          )
        }}
      </FormComponent>
    )
  )
}

describe('Form Component', () => {
  it('get label text', async () => {
    await renderPage()
    const input = screen.getByLabelText(/test/i)
    await userEvent.type(input, 'test content')
    await waitFor(() => expect(input).toHaveValue('test content'))
  })
  it('check validation on submit action', async () => {
    await renderPage()
    const button = screen.getByRole('button', { name: /submit/i })
    await userEvent.click(button)
    await waitFor(() =>
      expect(screen.queryByText(/test is required/i)).toBeInTheDocument()
    )
  })
  it('check validation on change', async () => {
    await renderPage()
    const button = screen.getByRole('button', { name: /submit/i })
    await userEvent.click(button)
    await waitFor(() =>
      expect(screen.queryByText(/test is required/i)).toBeInTheDocument()
    )
    const input = screen.getByLabelText(/test/i)
    await userEvent.type(input, 'test content')
    await waitFor(() => expect(input).toHaveValue('test content'))
    await waitFor(() =>
      expect(screen.queryByText(/test is required/i)).not.toBeInTheDocument()
    )
    await userEvent.clear(input)
    await waitFor(() =>
      expect(screen.queryByText(/test is required/i)).toBeInTheDocument()
    )
  })
})

import { describe, it } from 'vitest'
import { act, render, screen, waitFor } from '@/lib/__test__'
import { Input } from '@/components/functional/Form/FormElements/Input'
import FormElementWrapper from '@/components/functional/Form/FormWrapper/FormElementWrapper'
import { HookFormWrapper } from '@/components/functional/Form/test-util'
import { IFormElementWrapper } from '@/components/functional/Form/form.types'

const renderPage = async (props: IFormElementWrapper) => {
  return act(async () =>
    render(
      <HookFormWrapper>
        <FormElementWrapper {...props}>
          <Input
            formProps={{
              name: 'label',
              type: 'text',
            }}
          />
        </FormElementWrapper>
      </HookFormWrapper>,
    ),
  )
}

describe('Form Wrapper', () => {
  it('get label text', async () => {
    await renderPage({
      name: 'label',
      label: 'Label Text',
    })
    await waitFor(() => expect(screen.getByText(/label text/i)))
  })
  it('get label', async () => {
    await renderPage({
      name: 'label',
      label: 'Label Text',
    })
    await waitFor(() => expect(screen.getByLabelText(/label text/i)))
  })
  it('get footer text', async () => {
    await renderPage({
      name: 'label',
      footerText: 'label footer',
    })
    await waitFor(() => expect(screen.getByText(/label footer/i)))
  })
  it('error message', async () => {
    const { container } = await renderPage({
      name: 'label',
      errors: {
        label: {
          type: 'string',
          message: 'label error message',
        },
      },
    })
    await waitFor(() => expect(container.getElementsByClassName('ic-error').length).toBe(1))
    await waitFor(() => expect(screen.getByText(/label error message/i)))
  })
  it.todo('icon visibility', async () => {
    const { container } = await renderPage({
      name: 'label',
      icon: {
        position: 'left',
        component: <i className="ic ic-visible" />,
      },
    })
    await waitFor(() => expect(container.getElementsByClassName('ic-visible').length).toBe(1))
    await waitFor(() => expect(container.getElementsByClassName('form-group')[0].childNodes.length).toBe(2))
  })
  it.todo('icon left position', async () => {
    const { container } = await renderPage({
      name: 'label',
      icon: {
        position: 'left',
        component: <i className="ic ic-visible" />,
      },
    })
    await waitFor(() => expect(container.getElementsByClassName('form-group')[0].firstChild).toHaveClass('ic-visible'))
    await waitFor(() => expect(container.getElementsByClassName('form-group')[0].lastChild).toHaveClass('form-control'))
  })
  it.todo('icon right position', async () => {
    const { container } = await renderPage({
      name: 'label',
      icon: {
        position: 'right',
        component: <i className="ic ic-visible" />,
      },
    })
    await waitFor(() =>
      expect(container.getElementsByClassName('form-group')[0].firstChild).toHaveClass('form-control'),
    )
    await waitFor(() => expect(container.getElementsByClassName('form-group')[0].lastChild).toHaveClass('ic-visible'))
  })
})

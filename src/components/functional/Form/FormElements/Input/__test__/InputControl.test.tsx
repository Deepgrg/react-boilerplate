import { describe, it } from 'vitest'
import { render, act, screen, waitFor } from '@/lib/__test__'
import { IFormInput } from '@/components/functional/Form/FormElements/form-elemets.types'
import InputControl from '@/components/functional/Form/FormElements/Input/InputControl'
import { HookFormWrapper } from '@/components/functional/Form/test-util'

const renderPage = async (props: IFormInput) => {
  await act(async () =>
    render(
      <HookFormWrapper>
        <InputControl {...props} />
      </HookFormWrapper>
    )
  )
}

describe('Input Control', () => {
  it('input render', async () => {
    await renderPage({
      type: 'text',
      name: 'label',
      label: 'Label Text',
    })
    const input = screen.getByLabelText(/label text/i)
    await waitFor(() => expect(input).toBeInTheDocument())
  })
})

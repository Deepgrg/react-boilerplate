import { describe, it } from 'vitest'
import { render, act, screen, waitFor } from '@/lib/__test__'
import { IFormCheckbox } from '@/components/functional/Form/FormElements/form-elemets.types'
import { HookFormWrapper } from '@/components/functional/Form/test-util'
import CheckboxControl from '@/components/functional/Form/FormElements/Checkbox/CheckboxControl'

const renderPage = async (props: IFormCheckbox) => {
  await act(async () =>
    render(
      <HookFormWrapper>
        <CheckboxControl {...props} />
      </HookFormWrapper>
    )
  )
}

describe('Checkbox Control', () => {
  it('checkbox render', async () => {
    await renderPage({
      name: 'checkbox label',
      options: [
        {
          label: 'Option 1',
          value: 'option1',
        },
      ],
    })
    const input = screen.getByLabelText(/option 1/i)
    await waitFor(() => expect(input).toBeInTheDocument())
  })
})

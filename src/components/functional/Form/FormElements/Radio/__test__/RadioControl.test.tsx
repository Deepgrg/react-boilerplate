import { describe, it } from 'vitest'
import { render, act, screen, waitFor } from '@/lib/__test__'
import { IFormRadio } from '@/components/functional/Form/FormElements/form-elemets.types'
import { HookFormWrapper } from '@/components/functional/Form/test-util'
import RadioControl from '@/components/functional/Form/FormElements/Radio/RadioControl'

const renderPage = async (props: IFormRadio) => {
  await act(async () =>
    render(
      <HookFormWrapper>
        <RadioControl {...props} />
      </HookFormWrapper>
    )
  )
}

describe('Radio Control', () => {
  it('radio render', async () => {
    await renderPage({
      name: 'radio label',
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

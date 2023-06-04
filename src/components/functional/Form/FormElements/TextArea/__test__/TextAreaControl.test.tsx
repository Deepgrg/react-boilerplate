import { describe, it } from 'vitest'
import { render, act, screen, waitFor } from '@/lib/__test__'
import { ITextArea } from '@/components/functional/Form/FormElements/form-elemets.types'
import TextAreaControl from '@/components/functional/Form/FormElements/TextArea/TextAreaControl'
import { HookFormWrapper } from '@/components/functional/Form/test-util'

const renderPage = async (props: ITextArea) => {
  await act(async () =>
    render(
      <HookFormWrapper>
        <TextAreaControl {...props} />
      </HookFormWrapper>
    )
  )
}

describe('Text Area Control', () => {
  it('text area render', async () => {
    await renderPage({
      label: 'Label Text',
      name: 'label',
    })
    const textarea = screen.getByLabelText(/label text/i)
    await waitFor(() => expect(textarea).toBeInTheDocument())
  })
})

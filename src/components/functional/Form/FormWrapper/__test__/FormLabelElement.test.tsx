import { act, render, screen, waitFor } from '@/lib/__test__'
import FormLabel, { IFormLabel } from '@/components/functional/Form/FormWrapper/FormLabel'
import { IFormInput } from '@/components/functional/Form/FormElements/form-elemets.types'
import { Input } from '@/components/functional/Form/FormElements/Input'

const renderPage = async (props: { labelProps: IFormLabel; inputProps: IFormInput }) => {
  await act(async () =>
    render(
      <>
        <FormLabel {...props.labelProps} />
        <Input formProps={{ ...props.inputProps }} />
      </>,
    ),
  )
}

describe('Form Label & Element', () => {
  it('get by label text', async () => {
    await renderPage({
      labelProps: {
        label: 'Label Text',
        name: 'label',
      },
      inputProps: {
        type: 'text',
        name: 'label',
      },
    })
    await waitFor(() => expect(screen.getByLabelText('Label Text')))
  })
})

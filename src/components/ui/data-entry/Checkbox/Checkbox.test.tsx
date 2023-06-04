import { render, screen } from '@/lib/__test__'
import { Checkbox } from '.'

const CHECKBOX_ID = 'my-checkbox'
describe('Checkbox', () => {
  it('Checkbox to rendered on the dom', () => {
    render(<Checkbox variant="active" color="text-cool-gray-400" />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })
  it('changes style of checkbox as checkbox is checked/unchecked', () => {
    const { getByTestId } = render(
      <Checkbox variant="active" color="text-cool-gray-400" id="id" />
    )
    const checkbox = getByTestId(CHECKBOX_ID)
    expect(checkbox).toHaveStyle({ backgroundColor: 'cool-gray-400' })
  })
})

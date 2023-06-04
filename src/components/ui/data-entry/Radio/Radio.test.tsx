import { render, screen } from '@/lib/__test__'
import { Radio } from './index'

const RADIO_ID = 'my-radio'
describe('Radio', () => {
  it('Radio to rendered on the dom', () => {
    render(<Radio variant="active" label="Active" id="male" />)
    expect(screen.getByTestId(RADIO_ID)).toBeInTheDocument()
  })
  it('changes style of radio as radio is checked/unchecked', () => {
    const { getByTestId } = render(
      <Radio variant="active" label="Active" id="male" />
    )
    const radio = getByTestId(RADIO_ID)
    expect(radio).toHaveStyle({ backgroundColor: 'cool-gray-400' })
  })
})

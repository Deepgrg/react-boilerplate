import { render, screen } from '@/lib/__test__'
import { Box } from '.'

test('Expect Box to be in the DOM', () => {
  render(<Box>Expect Box to be in the DOM</Box>)

  expect(screen.getByText(/Expect Box to be in the DOM/i)).toBeInTheDocument()
})

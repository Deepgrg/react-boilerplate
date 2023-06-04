import { render, screen } from '@/lib/__test__'
import { Flexbox } from '.'
import { Box } from '../Box'

test('Expect Image in DOM', () => {
  render(
    <Flexbox as="section">
      <Box as="span">Hello Flexbox</Box>
    </Flexbox>
  )

  expect(screen.getByText(/Hello Flexbox/i)).toBeInTheDocument()
})

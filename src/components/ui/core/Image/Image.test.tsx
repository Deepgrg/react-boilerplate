import { render, screen } from '@/lib/__test__'
import { Image } from '.'

test('Expect Image in DOM', () => {
  render(<Image src="" alt="Expect Image in DOM" />)
  expect(screen.getByAltText(/Expect Image in DOM/i)).toBeInTheDocument()
})

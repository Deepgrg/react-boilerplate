import { render, screen } from '@/lib/__test__'
import { FileView } from '.'

test('Expect Image in DOM', () => {
  render(<FileView fileName="Image.png" fileDetails="File Details" />)

  expect(screen.getByText('Image.png')).toBeInTheDocument()
})

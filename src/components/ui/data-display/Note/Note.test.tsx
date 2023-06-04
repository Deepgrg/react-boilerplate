import { render, screen } from '@/lib/__test__'
import { Note } from '.'

describe('Note', () => {
  it('Note to rendered on the dom', () => {
    render(<Note title="Note" description="This is a description" />)
    expect(screen.getByText('Note')).toBeInTheDocument()
    expect(screen.getByText('This is a description')).toBeInTheDocument()
  })
})

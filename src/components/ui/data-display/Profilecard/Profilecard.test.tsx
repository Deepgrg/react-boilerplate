import { render, screen } from '@/lib/__test__'
import Profilecard from './Profilecard'

describe('Profilecard', () => {
  it('renders the correct content', () => {
    const props = {
      name: 'John Doe',
      department: 'Marketing',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      designation: 'Manager',
    }
    render(<Profilecard {...props} />)

    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Marketing')).toBeInTheDocument()
    expect(screen.getByText('john.doe@example.com')).toBeInTheDocument()
    expect(screen.getByText('123-456-7890')).toBeInTheDocument()
    expect(screen.getByText('Manager')).toBeInTheDocument()
  })
})

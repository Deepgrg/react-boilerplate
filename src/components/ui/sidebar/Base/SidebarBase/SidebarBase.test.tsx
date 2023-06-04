import { describe } from 'vitest'
import { fireEvent, render, screen } from '@/lib/__test__'
import { SidebarCloseClass } from './sidebar.schema'
import { SidebarBase } from './SidebarBase'

describe('Sidebar Base', () => {
  it('contains sidebar close class when sidebar toggler is clicked', async () => {
    render(<SidebarBase />)
    const sidebar = screen.getByRole('complementary')
    fireEvent.click(screen.getByRole('button'))
    SidebarCloseClass.split(' ')
      .filter((c) => !!c.trim())
      .forEach((c) => {
        expect(sidebar).toHaveClass(c)
      })
  })
})

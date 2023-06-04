import Switch from '@/components/ui/data-entry/Switch/Switch'
import {  act,render, screen } from '@/lib/__test__'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'

const TOGGLE_ID = 'my-toggle'
describe('Switch', () => {
  it('Switch to be rendered on the dom', () => {
    render(<Switch variant='Rounded'/>)
    expect(screen.getByTestId(TOGGLE_ID)).toBeInTheDocument()
  })
  it('Switch to have label rendered on the dom', () => {
    render(<Switch variant='Rounded' label='Toggle'/>)
    expect(screen.getByTestId(TOGGLE_ID).textContent === 'Toggle').toBeTruthy()
  })
  it('Switch to render true or flase on label on click', async() => {
    const Toggle = ()=>{
      const [tog,setTog] = useState(false)
      return (<Switch variant='Rounded' label={String(tog)} checked={false} onChange={()=>setTog(!tog)}/>)
    }
    render(<Toggle/>)
    const button = screen.getByTestId(TOGGLE_ID)
    expect(button.textContent === 'false').toBeTruthy()

    await act(async () => {
      await userEvent.click(button)
    })
    expect(button.textContent === 'true').toBeTruthy()
  })
})

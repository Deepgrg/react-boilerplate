import { render, screen } from '@/lib/__test__'
import { Activity } from 'phosphor-react'
import { Icon } from './Icon'

test('Expect Icon to be in the DOM', () => {
  render(<Icon icon={Activity} alt="activity" />)
  expect(
    screen.getByTitle('activity').parentNode?.nodeName === 'svg'
  ).toBeTruthy()
})

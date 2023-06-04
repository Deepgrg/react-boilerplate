import React from 'react'
import { render, screen } from '@/lib/__test__'
import { Divider } from '.'

describe('Divider', () => {
  it('Fullbleed divider to rendered on the dom', () => {
    render(
      <Divider variant="fullbleed" as="div" color="border-cool-gray-400" />
    )
    expect(screen.getByRole('divider')).toBeInTheDocument()
  })
})

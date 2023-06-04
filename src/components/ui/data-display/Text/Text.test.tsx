import React from 'react'
import { render, screen } from '@/lib/__test__'
import { Text } from '.'

describe('Text', () => {
  const text = 'Text to rendered on the dom'
  it('Text H1 to rendered on the dom', () => {
    render(
      <Text variant="h1" as="h2" color="text-cool-gray-200">
        {text}
      </Text>
    )
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })

  it('Text to have forwarded Ref', () => {
    const ref = React.createRef<HTMLHeadingElement>()

    render(<Text ref={ref}>{text}</Text>)
    expect(ref.current?.textContent).toBe(text)
  })
})

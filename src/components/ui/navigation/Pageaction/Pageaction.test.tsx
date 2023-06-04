import { render, screen } from '@testing-library/react'
import { describe } from 'vitest'
import Pageaction from './Pageaction'

const PAGEACTION_ID = 'pageaction'

describe('Pageaction', () => {
  it('Page action rendered on DOM', () => {
    render(
      <Pageaction
        ghostButtonLabel="Button"
        regularButtonLabel="Button"
        variant="withshadow"
      />
    )
    expect(screen.getByTestId(PAGEACTION_ID)).toBeInTheDocument()
  })
  it('changes style of page action as variant is withshadow', () => {
    const { getByTestId } = render(
      <Pageaction
        ghostButtonLabel="Button"
        regularButtonLabel="Button"
        variant="withshadow"
      />
    )
    const checkbox = getByTestId(PAGEACTION_ID)
    expect(checkbox).toHaveClass('justify-end')
  })
})

import Collapse from '@/components/ui/data-display/Collapse/Collapse'
import { CollapseBodyClasses, CollapseBodyCloseClass, CollapseBodyOpenClass, collapseBodyTestId, CollapseHeadLeftArrowClasses, CollapseHeadLeftArrowOpenClasses, CollapseHeadRightArrowClasses, CollapseHeadRightArrowOpenClasses, collapseHeadTestId, leftArrowTestId, rightArrowTestId } from '@/components/ui/data-display/Collapse/Collapse.schema'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe } from 'vitest'

describe('Collapse Head', () => {
  beforeEach(() => {
    render(
      <Collapse>
        <Collapse.Header>Hello</Collapse.Header>
      </Collapse>,
    )
  })

  it('renders itself', () => {
    expect(screen.getByTestId(collapseHeadTestId)).toBeInTheDocument()
  })

  it('renders children', () => {
    expect(screen.getByText(/hello/i)).toBeInTheDocument()
  })

  describe('Left caret', () => {
    it('has the default classes', () => {
      expect(screen.getByTestId(leftArrowTestId)).toHaveClass(
        CollapseHeadLeftArrowClasses,
      )
    })
    it('has the appropriate classes when collapse is opened', async () => {
      const leftCaret = screen.getByTestId(leftArrowTestId)
      await userEvent.click(leftCaret)
      expect(leftCaret).toHaveClass(CollapseHeadLeftArrowOpenClasses)
    })
    it('has the appropriate classes when collapse is clased', async () => {
      const leftCaret = screen.getByTestId(leftArrowTestId)
      await userEvent.click(leftCaret)
      await userEvent.click(leftCaret)
      // close doesn't have any class yet (change this if it has class)
      expect(leftCaret).toBeInTheDocument()
    })
  })

  describe('Right caret', () => {
    it('has the default classes', () => {
      expect(screen.getByTestId(rightArrowTestId)).toHaveClass(
        CollapseHeadRightArrowClasses,
      )
    })
    it('has the appropriate classes when collapse is opened', async () => {
      const collapseHead = screen.getByTestId(collapseHeadTestId)
      const rightArrow = screen.getByTestId(rightArrowTestId)
      await userEvent.click(collapseHead)
      expect(rightArrow).toHaveClass(CollapseHeadRightArrowOpenClasses)
    })
    it('has the appropriate classes when collapse is closed', async () => {
      const collapseHead = screen.getByTestId(collapseHeadTestId)
      const rightArrow = screen.getByTestId(rightArrowTestId)
      await userEvent.click(collapseHead)
      await userEvent.click(collapseHead)
      // change this if there is any closed class
      expect(rightArrow).toBeInTheDocument()
    })
  })
})

describe('Collapse Body', () => {
  beforeEach(() => {
    render(
      <Collapse>
        <Collapse.Body>helloworld</Collapse.Body>
      </Collapse>,
    )
  })
  it('renders itself', () => {
    expect(screen.getByTestId(collapseBodyTestId)).toBeInTheDocument()
  })

  it('renders children', () => {
    expect(screen.getByText(/helloworld/i)).toBeInTheDocument()
  })

  it('has the default classes', () => {
    expect(screen.getByTestId(collapseBodyTestId)).toHaveClass(
      CollapseBodyClasses,
    )
  })
})

describe('Collapse', () => {
  beforeEach(() => {
    render(
      <Collapse>
        <Collapse.Header>head</Collapse.Header>
        <Collapse.Body>Body</Collapse.Body>
      </Collapse>,
    )
  })

  it('body has approriate classes when collapse is opened by clicking header', async () => {
    const header = screen.getByTestId(collapseHeadTestId)
    await userEvent.click(header)

    expect(screen.getByTestId(collapseBodyTestId)).toHaveClass(
      CollapseBodyOpenClass,
    )
  })
  it('head has approriate classes when collapse is closed by clicking header', async () => {
    const header = screen.getByTestId(collapseHeadTestId)
    await userEvent.click(header)
    await userEvent.click(header)

    expect(screen.getByTestId(collapseBodyTestId)).toHaveClass(
      CollapseBodyCloseClass,
    )
  })
})

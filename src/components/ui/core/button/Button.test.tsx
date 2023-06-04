import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, vi } from 'vitest'
import { Button } from './Button'
import {
  ButtonBaseClasses,
  DisabledMapping,
  ClickedMapping,
  ButtonDisplays,
  ButtonSizes,
  ButtonTypes,
  ButtonVariants,
  DefaultClassesMapping,
  DisplayMapping,
  FocusedClassesMapping,
  HoverClassesMapping,
  SizeMappings,
} from './Button.schema'

describe('Button', () => {
  it('renders itself', () => {
    render(<Button />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('renders the supplied children', () => {
    render(<Button>Hello world</Button>)
    expect(screen.getByText(/hello world/i)).toBeInTheDocument()
  })

  describe('has the associated class mappings according to props', () => {
    it('has base styles', () => {
      render(<Button>Hello world</Button>)
      expect(Array.from(screen.getByRole('button').classList)).toEqual(
        expect.arrayContaining(
          ButtonBaseClasses.split(' ').filter((c) => !!c.trim())
        )
      )
    })

    it('has correct size mapping classes', () => {
      Object.entries(SizeMappings).forEach(([size, classes]) => {
        const { unmount } = render(<Button size={size as ButtonSizes} />)
        expect(screen.getByRole('button').className.split(' ')).toEqual(
          expect.arrayContaining(classes.split(' ').filter((c) => !!c.trim()))
        )
        unmount()
      })
    })

    it('has correct display classes mapping  ', () => {
      Object.entries(DisplayMapping).forEach(([display, classes]) => {
        const { unmount } = render(
          <Button display={display as ButtonDisplays}>Helo</Button>
        )
        expect(screen.getByRole('button').className.split(' ')).toEqual(
          expect.arrayContaining(classes.split(' ').filter((c) => !!c.trim()))
        )
        unmount()
      })
    })

    it('has correct default classes mapping', () => {
      Object.entries(DefaultClassesMapping).forEach(
        ([variant, btnTypeMapping]) => {
          Object.entries(btnTypeMapping).forEach(([btnType, classes]) => {
            const { unmount } = render(
              <Button
                variant={variant as ButtonVariants}
                btnType={btnType as ButtonTypes}
              />
            )
            expect(screen.getByRole('button').className.split(' ')).toEqual(
              expect.arrayContaining(
                classes.split(' ').filter((c) => !!c.trim())
              )
            )
            unmount()
          })
        }
      )
    })

    it('has correct hover classes mapping', () => {
      Object.entries(HoverClassesMapping).forEach(
        ([variant, btnTypeMapping]) => {
          Object.entries(btnTypeMapping).forEach(([btnType, classes]) => {
            const { unmount } = render(
              <Button
                variant={variant as ButtonVariants}
                btnType={btnType as ButtonTypes}
              />
            )
            expect(screen.getByRole('button').className.split(' ')).toEqual(
              expect.arrayContaining(
                classes.split(' ').filter((c) => !!c.trim())
              )
            )
            unmount()
          })
        }
      )
    })

    it('has correct focus classes mapping', () => {
      Object.entries(FocusedClassesMapping).forEach(
        ([variant, btnTypeMapping]) => {
          Object.entries(btnTypeMapping).forEach(([btnType, classes]) => {
            const { unmount } = render(
              <Button
                variant={variant as ButtonVariants}
                btnType={btnType as ButtonTypes}
              />
            )
            expect(screen.getByRole('button').className.split(' ')).toEqual(
              expect.arrayContaining(
                classes.split(' ').filter((c) => !!c.trim())
              )
            )
            unmount()
          })
        }
      )
    })

    it('has correct clicked classes mapping', () => {
      Object.entries(ClickedMapping).forEach(([variant, btnTypeMapping]) => {
        Object.entries(btnTypeMapping).forEach(([btnType, classes]) => {
          const { unmount } = render(
            <Button
              variant={variant as ButtonVariants}
              btnType={btnType as ButtonTypes}
            />
          )
          expect(screen.getByRole('button').className.split(' ')).toEqual(
            expect.arrayContaining(classes.split(' ').filter((c) => !!c.trim()))
          )
          unmount()
        })
      })
    })

    it('has correct disabled classes mapping', () => {
      Object.entries(DisabledMapping).forEach(([variant, btnTypeMapping]) => {
        Object.entries(btnTypeMapping).forEach(([btnType, classes]) => {
          const { unmount } = render(
            <Button
              variant={variant as ButtonVariants}
              btnType={btnType as ButtonTypes}
            />
          )
          expect(screen.getByRole('button').className.split(' ')).toEqual(
            expect.arrayContaining(classes.split(' ').filter((c) => !!c.trim()))
          )
          unmount()
        })
      })
    })
  })

  it('calls the onClick callback', async () => {
    const fn = vi.fn()
    render(
      <Button
        onClick={() => {
          fn()
        }}
      />
    )
    await userEvent.click(screen.getByRole('button'))
    expect(fn).toHaveBeenCalledOnce()
  })
})

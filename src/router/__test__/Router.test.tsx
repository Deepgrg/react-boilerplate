import { describe, it } from 'vitest'

import { render, screen, waitFor } from '@testing-library/react'

import userEvent from '@testing-library/user-event'

import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { privateRoutes } from '@/router/routes/private/private.routes'

export function createTestRouter(initialPath: string) {
  const router = createMemoryRouter(privateRoutes, {
    initialEntries: [initialPath],
  })

  render(<RouterProvider router={router} />)
}

async function expectByRoleHeading(level: number, text: string) {
  await waitFor(() =>
    expect(
      screen.getByRole('heading', {
        level,
      })
    ).toHaveTextContent(text)
  )
}

async function clickByText(text: RegExp | string) {
  const user = userEvent.setup()

  user.click(await waitFor(() => screen.getByText(text)))
}

describe('App', () => {
  it('renders Home', async () => {
    createTestRouter('/')

    expectByRoleHeading(1, 'Root')
  })

  it('renders not found in invalid path', async () => {
    const badRoute = '/not-found'

    createTestRouter(badRoute)

    expectByRoleHeading(1, 'Not Found')
  })

  it('tests for nested route', async () => {
    const badRoute = '/home/child1'

    createTestRouter(badRoute)

    expectByRoleHeading(3, 'Child1')
  })

  it('tests navigation', async () => {
    const initalRoute = '/'

    createTestRouter(initalRoute)

    clickByText(/home/i)

    expectByRoleHeading(2, 'Home')

    clickByText(/child1/i)

    expectByRoleHeading(3, 'Child1')
  })
})

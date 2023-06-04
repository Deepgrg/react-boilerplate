import '@testing-library/jest-dom/extend-expect'
import { afterEach, expect } from 'vitest'
import { cleanup } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import '@/lib/testServer/index'
import { AbortSignal } from 'node-abort-controller'

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers)
// eslint-disable-next-line
window['__DEV__'] = false

beforeEach(async () => {})

// runs a cleanup after each __test__ case (e.g. clearing jsdom)
afterEach(() => {
  cleanup()
})

// AbortSignal is not defined in vitest
window.AbortSignal = AbortSignal as typeof window.AbortSignal

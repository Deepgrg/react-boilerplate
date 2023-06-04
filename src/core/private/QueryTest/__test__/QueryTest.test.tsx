// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useTestQuery } from '@/core/private/QueryTest/QueryTest.queries'

describe('Query Test Component ', () => {
  it('Query Test Tod', () => {
    expect(1 + 1).toEqual(2)
  })
  // beforeEach(async () => {
  //   await JSDomLogin({
  //     email: 'diwasbaral10@hotmail.com',
  //     password: 'test@123',
  //   })
  // })
  // it('useTestQuery', async () => {
  //   if (window.navigator.onLine) {
  //     const { result, waitFor } = renderHook(useTestQuery)

  //     await waitFor(() => result.current.isSuccess)
  //     expect(result.current.data).toBeDefined()
  //   }
  // })
})

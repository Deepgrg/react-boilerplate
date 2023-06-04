import TokenService from '@/service/token/token.service'

describe('token.service.ts', () => {
  it('Since user is not logged in, Access token must be null', () => {
    expect(TokenService.getAccess()).toBeUndefined()
  })
})

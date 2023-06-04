import { ILoginResponse } from '@/core/public/Login/schema/login.interface'
import { StorageService } from '@/service/storage/storage.service'
import { STORAGE_KEY } from '@/constants/storageKey'

export type TokenData = ILoginResponse | undefined

const storage = new StorageService('local')

const TokenService = {
  tokenKey: STORAGE_KEY.TOKEN,
  getAccess() {
    return this.getUserData()?.accessToken
  },
  getRefresh() {
    return this.getUserData()?.refreshToken
  },
  clear() {
    storage.remove(this.tokenKey)
  },
  getUserData() {
    return storage.get<TokenData>(this.tokenKey)
  },
  set(data: TokenData) {
    storage.set(this.tokenKey, JSON.stringify(data))
  },
}

export default TokenService

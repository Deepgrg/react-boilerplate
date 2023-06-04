interface IUserInfo {
  id: string
  firstName: string
  middleName: string
  lastName: string
  email: string
  phoneNumber: string
}

interface ILoginResponse {
  user: IUserInfo
  accessToken: string
  changePassword: boolean
  refreshToken: string
  isPermanent: boolean
}

interface ILoginRequest {
  email: string
  password: string
}

export type { IUserInfo, ILoginResponse, ILoginRequest }

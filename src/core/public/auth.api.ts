import { RequestMethod } from '@/lib/api-request'

const authApi = {
  login: {
    controllerName: 'v1/auth/login',
    queryKey: 'LOGIN',
    requestMethod: RequestMethod.POST,
  },
}

export default authApi

import { apiDetails } from '@/service/api'
import { useMutation } from '@tanstack/react-query'
import { initApiRequest } from '@/lib/api-request/api-request'
import TokenService from '@/service/token/token.service'
import { useAuth } from '@/providers/AuthProvider'
import { privateRoutePath, useNavigate } from '@/router'
import { ILoginRequest, ILoginResponse } from './schema/login.interface'

const useLoginMutation = () => {
  const naviate = useNavigate()
  const { setIsAuthenticated } = useAuth()
  return useMutation(
    (requestData: ILoginRequest) => {
      return initApiRequest<BackendSuccessResponse<ILoginResponse>>({
        apiDetails: apiDetails.public.auth.login,
        requestData: { ...requestData },
      })
    },
    {
      onSuccess: (response) => {
        const responseData = response?.data?.data
        TokenService.set(responseData)
        setIsAuthenticated(true)
        naviate(privateRoutePath.home)
      },
    },
  )
}

export { useLoginMutation }

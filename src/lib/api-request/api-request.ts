import Axios, { AxiosError, AxiosResponse, RawAxiosRequestHeaders } from 'axios'
import { Primitive } from 'type-fest'

import HttpException from '@/utility/exceptions/http-exception'
import {
  getAxiosParams,
  getBasicAuthCredentials,
  handleLogout,
  manageErrorResponse,
  refreshTokenApiDetails,
  requestRefreshToken,
  sanitizeApiController,
  transformRequestData,
} from '@/lib/api-request/api-schema'
import { ApiDetailType, RequestDataType } from '@/lib/api-request/api-types'

export interface InitApiRequest {
  apiDetails: ApiDetailType
  pathVariables?: GenericObj<Primitive>
  params?: { [key: string]: Primitive | Array<GenericObj<Primitive>> }
  requestData?: RequestDataType
  signal?: AbortSignal
  headers?: RawAxiosRequestHeaders
}

Axios.interceptors.response.use(
  (value) => value,
  (error: AxiosError) => {
    if (error.config?.url === refreshTokenApiDetails.controllerName) return handleLogout()
    return requestRefreshToken(error)
  },
)

const initApiRequest = async <TData>({
  apiDetails,
  pathVariables,
  params,
  headers,
  signal,
  requestData,
}: InitApiRequest): // eslint-disable-next-line consistent-return
Promise<AxiosResponse<TData> | undefined> => {
  let sanitizedDetails = apiDetails
  if (pathVariables) sanitizedDetails = sanitizeApiController(apiDetails, pathVariables)
  const axiosParams = getAxiosParams(sanitizedDetails, headers)

  try {
    return await Axios.request<TData>({
      ...axiosParams,
      params,
      signal: signal ?? axiosParams.signal,
      data: transformRequestData(sanitizedDetails, requestData),
      auth: getBasicAuthCredentials(sanitizedDetails.requestBodyType),
    })
  } catch (error) {
    throw new HttpException(manageErrorResponse(error as AxiosError<BackendErrorResponse<GenericObj>>))
  }
}

export { initApiRequest }

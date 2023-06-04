import { Mutation, MutationMeta, Query } from '@tanstack/query-core'
import { AxiosResponse } from 'axios'
import { toast } from 'react-toastify'

import HttpException from '@/utility/exceptions/http-exception'

const message = {
  FILE_SIZE: 'Please Upload the file less than 12 MB.',
  LONG_TO_RESPOND:
    'Server is taking too long to respond, this can be caused by either poor connectivity or an error with our servers. Please try again in a while!',
  SERVER_NOT_REACHED: 'Server could not be reached',
}

let timeoutMessageCount = 0
let noServerConnectionMessageCount = 0
let longToRespondMessageCount = 0

const onError = (httpException: HttpException, disableFailureToast = false) => {
  const { error } = httpException

  if (error.status === 413) toast.error(message.FILE_SIZE)

  if (!disableFailureToast && error.data.message)
    toast.error(error.data.message)

  // Axios Timeout
  if (error.code === 'ECONNABORTED' && !timeoutMessageCount) {
    timeoutMessageCount += timeoutMessageCount
    toast.error(message.SERVER_NOT_REACHED)
  }

  if (error.noconnection) {
    // No Server Connection
    if (error.code !== 'ECONNABORTED' && !longToRespondMessageCount) {
      longToRespondMessageCount += longToRespondMessageCount
      toast.error(message.LONG_TO_RESPOND)
    }

    // No Connection
    if (
      error.message === message.SERVER_NOT_REACHED &&
      !noServerConnectionMessageCount
    ) {
      noServerConnectionMessageCount += noServerConnectionMessageCount
      toast.error(message.SERVER_NOT_REACHED)
    }
  }
}

const onQueryError = (responseError: unknown, query: Query) => {
  onError(responseError as HttpException, query.meta?.disableFailureToast)
}

const onMutationError = async (
  responseError: unknown,
  variables: unknown,
  context: unknown,
  mutation: Mutation<unknown, unknown, unknown>
) => {
  onError(responseError as HttpException, mutation.meta?.disableFailureToast)
}

const onMutationSuccess = (
  responseData: unknown,
  variables: unknown,
  context: unknown,
  query: Mutation<unknown, unknown, unknown>
) => {
  if (!(query.meta as MutationMeta)?.disableSuccessToast) return

  const data = (
    responseData as AxiosResponse<BackendSuccessResponse<GenericObj>>
  )?.data
  toast.success(data?.message)
}

export { onQueryError, onMutationError, onMutationSuccess }

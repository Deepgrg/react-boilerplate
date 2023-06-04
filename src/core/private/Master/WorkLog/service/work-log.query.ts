import { initApiRequest } from '@/lib/api-request'
import { apiDetails } from '@/service/api'
import { useMutation } from '@tanstack/react-query'
import {
  IWorkLogRequest,
  IWorkLogResponse,
} from '@/core/private/Master/WorkLog/schema/work-log.interface'

const useCreateWorkLog = () => {
  return useMutation(
    (requestData: IWorkLogRequest) => {
      return initApiRequest<BackendSuccessResponse<IWorkLogResponse>>({
        apiDetails: apiDetails.private.master.workLog.createWorkLog,
        requestData: { ...requestData },
      })
    },
    {
      onSuccess: () => {},
    }
  )
}

export { useCreateWorkLog }

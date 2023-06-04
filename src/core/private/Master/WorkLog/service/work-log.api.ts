import { RequestMethod } from '@/lib/api-request'

const workLogApi = {
  createWorkLog: {
    queryKeyName: 'CREATE_WORK_LOG',
    controllerName: `v1/work-log/add`,
    requestMethod: RequestMethod.POST,
  },
}

export default workLogApi

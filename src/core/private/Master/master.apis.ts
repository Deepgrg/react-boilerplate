import workLogApi from '@/core/private/Master/WorkLog/service/work-log.api'

const masterApi = {
  workLog: { ...workLogApi },
}

export default masterApi

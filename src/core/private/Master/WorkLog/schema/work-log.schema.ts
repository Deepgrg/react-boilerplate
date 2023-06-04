import { IWorkLogRequest } from '@/core/private/Master/WorkLog/schema/work-log.interface'

const workLogInitialValues: IWorkLogRequest = {
  name: '',
}

const workLogValidationSchema = {}

export { workLogInitialValues, workLogValidationSchema }

import { useQuery } from '@tanstack/react-query'
import { initApiRequest, RequestMethod } from '@/lib/api-request'

const apiDetails = {
  actionName: 'sadasdasd',
  controllerName: '/v1/users',
  requestMethod: RequestMethod.GET,
}

export const useTestQuery = () => {
  return useQuery({
    queryKey: ['QUERY_TEST'],
    async queryFn() {
      const response = await initApiRequest({ apiDetails })
      return response?.data
    },
  })
}

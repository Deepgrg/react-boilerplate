import { Route } from 'react-router'
import { RouteProps } from '@/router/extends/route.types'

export function CustomRoute(props: RouteProps) {
  return <Route {...props} />
}

export { CustomRoute as Route }

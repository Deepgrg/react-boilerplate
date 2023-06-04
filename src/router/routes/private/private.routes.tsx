import React from 'react'
import { _RouteObject } from 'react-router-dom'
import { createRoute } from '@/router/routes/create-route'
import { privateRoutePath } from '@/router/routes/private/private-route.path'
import { masterRoutes } from '@/core/private/Master/master.routes'

const Root = React.lazy(() => import('@/core/private/Root'))
const Home = React.lazy(() => import('@/core/private/Home'))
const Child1 = React.lazy(() => import('@/core/private/Home/Child1'))
const NotFound = React.lazy(() => import('@/core/NotFound'))
const QueryTest = React.lazy(() => import('@/core/private/QueryTest/QueryTest'))
const DropzoneTest = React.lazy(() => import('@/core/public/DropzoneTest'))

export const privateRoutes: _RouteObject<'private'>[] = [
  createRoute({
    path: privateRoutePath.base,
    element: Root,
    children: [
      createRoute({
        path: privateRoutePath.home,
        element: Home,
        children: [
          createRoute({
            path: privateRoutePath.child1,
            element: Child1,
          }),
        ],
      }),
      ...masterRoutes,
    ],
  }),
  createRoute({
    path: privateRoutePath.test,
    element: QueryTest,
  }),
  createRoute({
    path: privateRoutePath.playground,
    element: DropzoneTest,
  }),

  createRoute({
    path: '*',
    element: NotFound,
  }),
]

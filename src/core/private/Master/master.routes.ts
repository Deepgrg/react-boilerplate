import React from 'react'
import { _RouteObject } from 'react-router-dom'
import { createRoute } from '@/router/routes/create-route'
import { privateRoutePath } from '@/router/routes/private/private-route.path'

const Master = React.lazy(() => import('@/core/private/Master'))
const WorkLog = React.lazy(() => import('@/core/private/Master/WorkLog'))
const Designation = React.lazy(
  () => import('@/core/private/Master/Designation')
)

export const masterRoutes: _RouteObject<'private'>[] = [
  createRoute({
    path: privateRoutePath.master,
    element: Master,
    children: [
      createRoute({
        path: privateRoutePath.worklog,
        element: WorkLog,
      }),

      createRoute({
        path: privateRoutePath.designation,
        element: Designation,
      }),
    ],
  }),
]

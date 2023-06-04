import React from 'react'
import { _RouteObject } from 'react-router-dom'
import { publicRoutePath } from '@/router/routes/public/public-route.path'
import { createRoute } from '@/router/routes/create-route'

const Login = React.lazy(() => import('@/core/public/Login'))
const NotFound = React.lazy(() => import('@/core/NotFound'))
const Dropzone = React.lazy(() => import('@/core/public/DropzoneTest'))

export const publicRoutes: _RouteObject<'public'>[] = [
  createRoute({
    path: publicRoutePath.login,
    element: Login,
  }),
  createRoute({
    path: publicRoutePath.drop,
    element: Dropzone,
  }),
  createRoute({
    path: '*',
    element: NotFound,
  }),
]

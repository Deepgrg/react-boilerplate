import React from 'react'
import RouteWrapper from '@/providers/RouteWrapper'
import { _RouteObject } from 'react-router-dom'

import type { RouteType } from '@/router'

interface CreateRoute<Type extends RouteType>
  extends Omit<_RouteObject<Type>, 'element'> {
  element: React.LazyExoticComponent<React.FC>
}

export function createRoute<Type extends RouteType = 'private'>(
  args: CreateRoute<Type>
): _RouteObject<Type> {
  return {
    ...args,
    element: (
      <RouteWrapper>
        <args.element />
      </RouteWrapper>
    ),
    errorElement: <div>Something Went Wrong </div>,
  } as const
}

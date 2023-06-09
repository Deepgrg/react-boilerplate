import * as React from 'react'

// named imports for React.lazy: https://github.com/facebook/react/issues/14603#issuecomment-726551598
/**
 * Usage --> const { ComponentA } = lazyImport(() => import("./Component"), "ComponentA");
 * @param factory
 * @param name
 */

export function lazyNamedImport<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends React.ComponentType<any>,
  I extends { [K2 in K]: T },
  K extends keyof I
>(factory: () => Promise<I>, name: K): I {
  return Object.create({
    [name]: React.lazy(() =>
      factory().then((module) => ({ default: module[name] }))
    ),
  })
}

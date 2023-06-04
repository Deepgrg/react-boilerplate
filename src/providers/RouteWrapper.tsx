import { FC, PropsWithChildren, Suspense } from 'react'
import FallbackLoader from '@/components/functional/FallbackLoader'

const RouteWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <Suspense fallback={<FallbackLoader />}>{children}</Suspense>
}

export default RouteWrapper

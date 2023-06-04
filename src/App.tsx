import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { privateRoutes } from '@/router/routes/private/private.routes'
import { publicRoutes } from '@/router/routes/public/public.routes'
// import { useAuth } from './providers/AuthProvider'

function App() {
  // const { isAuthenticated } = useAuth()
  // eslint-disable-next-line no-constant-condition
  const router = createBrowserRouter(true ? privateRoutes : publicRoutes)
  return <RouterProvider router={router} />
}

export default App

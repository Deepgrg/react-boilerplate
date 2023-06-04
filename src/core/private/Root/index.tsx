import { useAuth } from '@/providers/AuthProvider'
import { publicRoutePath } from '@/router'
import TokenService from '@/service/token/token.service'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

function Root() {
  const { setIsAuthenticated, setUserData } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    TokenService.clear()
    setIsAuthenticated(false)
    setUserData(null)
    navigate(publicRoutePath.login)
  }

  return (
    <>
      <h1>Root</h1>
      <NavLink to="/home">Home</NavLink>
      <Outlet />

      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </>
  )
}

export default Root

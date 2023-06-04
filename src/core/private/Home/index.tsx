import { NavLink, Outlet } from 'react-router-dom'

function Root() {
  return (
    <>
      <NavLink to="/home/child1">Child1</NavLink>
      <Outlet />
    </>
  )
}

export default Root

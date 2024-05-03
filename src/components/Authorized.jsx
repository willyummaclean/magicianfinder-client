import { Navigate, Outlet } from "react-router-dom"
import { MyNavbar } from "./nav/Navbar.jsx"

export const Authorized = () => {
  if (localStorage.getItem("magic_token")) {
    return <>
      <MyNavbar />
      <main className="p-4">
        <Outlet />
      </main>
    </>
  }
  return <Navigate to='/login' replace />
}
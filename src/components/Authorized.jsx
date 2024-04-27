import { Navigate, Outlet } from "react-router-dom"
import { Navbar } from "./nav/Navbar.jsx"

export const Authorized = () => {
  if (localStorage.getItem("magic_token")) {
    return <>
      <Navbar />
      <main className="p-4">
        <Outlet />
      </main>
    </>
  }
  return <Navigate to='/login' replace />
}
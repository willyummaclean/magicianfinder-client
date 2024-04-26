import { Navigate, Outlet } from "react-router-dom"
import { Navbar } from "./nav/Navbar.jsx"

export const Authorized = () => {
  if (localStorage.getItem("magic_token")) {
    return  <Navigate to='/' replace />
  }
  else {
    return <Navigate to='login' replace />
  }
}
 
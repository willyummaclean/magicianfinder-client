import { Navigate, Outlet } from "react-router-dom"
import { MyNavbar } from "./nav/Navbar.jsx"
import './authorized.css'
export const Authorized = () => {
  if (localStorage.getItem("magic_token")) {
    return( <>
      <div>
        <div className="navdisplay">
          <MyNavbar />
        </div>
        <div className="display">
          <main className="container"> 
            <Outlet />
          </main>
        </div>
      </div>
   
    </>)
  }
  return <Navigate to='/login' replace />
}
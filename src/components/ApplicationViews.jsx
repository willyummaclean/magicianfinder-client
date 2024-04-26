import { useEffect, useState } from "react"
import { Route, Routes, Outlet } from "react-router-dom"
import { Home } from "../components/home/home.jsx"
import { Navbar } from "../components/nav/Navbar.jsx"


export const ApplicationViews = () => {

    const [currentUser, setCurrentUser] = useState({})

useEffect(() => {
    const localMagicUser = localStorage.getItem("magic_token")
    const MagicUser = JSON.parse(localMagicUser)
        setCurrentUser(MagicUser)
    }, [])
    

    return <Routes>
            <Route
                 path="/"
                 element={
            <>
                <Navbar />
                <Outlet />
            </>
            }
            >
            <Route index element={<Home currentUser={currentUser}/>}/> 
          
            </Route>
        </Routes>
}
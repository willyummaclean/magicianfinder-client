// import { useEffect, useState } from "react"
// import { Route, Routes, Outlet } from "react-router-dom"
// import { Home } from "../components/home/home.jsx"
// import { Navbar } from "../components/nav/Navbar.jsx"


// export const ApplicationViews = () => {

//     const [currentUser, setCurrentUser] = useState({})

// useEffect(() => {
//     const localMagicUser = localStorage.getItem("magic_token")
//     const MagicUser = JSON.parse(localMagicUser)
//         setCurrentUser(MagicUser)
//     }, [])
    

//     return <Routes>
//             <Route
//                  path="/"
//                  element={
//             <>
//                 <Navbar />
//                 <Outlet />
//             </>
//             }
//             >
//             <Route index element={<Home currentUser={currentUser}/>}/> 
          
//             </Route>
//         </Routes>
// }

import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Authorized } from "./Authorized"
import { Login } from "./auth/login.jsx"
import { Register } from './auth/register.jsx'
import { Home } from "../components/home/home.jsx"

export const ApplicationViews = () => {

    return <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                <Route path="/">
                    <Route index element={<Home/>} />
                    {/* <Route path="showcase" element={<BookShowcase />} />
                    <Route path="new" element={<BookForm />} /> */}
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
}
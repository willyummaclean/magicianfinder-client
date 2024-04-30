
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Authorized } from "./Authorized"
import { Login } from "./auth/Login.jsx"
import { Register } from './auth/Register.jsx'
import { Home } from "../components/home/home.jsx"
import { MagicianDetails } from "./magicians/MagiciansDetail.jsx"
import { MagicianList } from "./magicians/MagicianList.jsx"
import { MyProfile } from "./profile/MyProfile.jsx"


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
                <Route path="magicians">
                <Route index element={<MagicianList />} /> 
                    <Route path=":magicianId" element={<MagicianDetails />}/>
                </Route>
                <Route path="myprofile" element={<MyProfile/>}/>
                <Route path="magicianservices">
                    {/* <Route path=":magicianId" element={MyServices}/> */}
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
}
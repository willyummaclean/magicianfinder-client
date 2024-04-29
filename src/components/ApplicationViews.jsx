
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Authorized } from "./Authorized"
import { Login } from "./auth/Login.jsx"
import { Register } from './auth/Register.jsx'
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
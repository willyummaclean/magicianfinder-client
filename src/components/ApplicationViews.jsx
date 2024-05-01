
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Authorized } from "./Authorized"
import { Login } from "./auth/Login.jsx"
import { Register } from './auth/Register.jsx'
import { Home } from "../components/home/home.jsx"
import { MagicianDetails } from "./magicians/MagiciansDetail.jsx"
import { MagicianList } from "./magicians/MagicianList.jsx"
import { MyProfile } from "./profile/MyProfile.jsx"
import { MyServices } from "./services/MyServices.jsx"
import { UpdateService } from "./services/UpdateService.jsx"
import { CreateService } from "./services/CreateService.jsx"
import { AppointmentList } from "./appointments/MyAppointments.jsx"
import { MakeAppointment } from "./appointments/MakeAppointment.jsx"


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
                    <Route path=":magicianId" element={<MyServices/>}/>
                    <Route path="update/:magicianServiceId" element={<UpdateService/>}/>
                    <Route path="new" element={<CreateService/>}/>
                </Route>
                <Route path="myappointments" element={<AppointmentList/>}/>
                <Route path="makeappointment" element={<MakeAppointment/>}/>   
            </Route>
        </Routes>
    </BrowserRouter>
}

 
import { Navigate, useLocation } from "react-router-dom" 

export const Authorized = ({ children }) => {
    let location = useLocation()

    if(localStorage.getItem("magic_token")) {
        return children
    }   

    else {
        return <Navigate to={'/login'} state={{ from: location}} replace />
    }

}
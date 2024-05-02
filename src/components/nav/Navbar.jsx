import { NavLink, useNavigate } from "react-router-dom"
import "./Navbar.css"
import { useEffect, useState } from "react"
import { getUser, getParticipantByUserId } from "../../data/ProfileData"

export const Navbar = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const [magician, setMagician] = useState(false)
    const [participant, setParticipant] = useState({})


    useEffect(() => {
        const fetchData = async () => {
          try {
            const userData = await getUser();
            setUser(userData);
      
            if (userData.id) {
              const participantData = await getParticipantByUserId(userData.id);
              setParticipant(participantData);
      
              if (participantData.ismagician) {
                setMagician(true);
              } else {
                setMagician(false);
              }
            }
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
      
        fetchData();
      }, []);
    
    return (
        <ul className="navbar pb-10">
        {
            (localStorage.getItem("magic_token") !== null) ?
                <>
                    <li className="navbar__item">
                        <NavLink className="text-left underline text-blue-600 hover:text-purple-700" to={"/magicians"}>Magicians</NavLink>
                    </li>
                    <li className="navbar__item">
                        <NavLink className="text-left underline text-blue-600 hover:text-purple-700" to={"/myappointments"}>My Appointments</NavLink>
                    </li>
                    
                        {magician == false && (
                    <li className="navbar__item">
                            <NavLink className="text-left underline text-blue-600 hover:text-purple-700" to={"/makeappointment"}>Make Appointment</NavLink>
                    </li>    )}
                  
                    <li className="navbar__item">
                        <NavLink className="text-left underline text-blue-600 hover:text-purple-700" to={"/myprofile"}>My Profile</NavLink>
                    </li>
                    <li className="navbar__item">
                        <button className="underline text-blue-600 hover:text-purple-700"
                            onClick={() => {
                                localStorage.removeItem("magic_token")
                                navigate('/login')
                            }}
                        >Logout</button>
                    </li>
                </>
                :
                <>
                    <li className="navbar__item">
                        <NavLink className="text-left underline text-blue-600 hover:text-purple-700" to={"/login"}>Login</NavLink>
                    </li>
                    <li className="navbar__item">
                        <NavLink className="text-left underline text-blue-600 hover:text-purple-700" to={"/register"}>Register</NavLink>
                    </li>
                </>
        }
    </ul>
        // <ul className="navbar pb-10">
        //     {
        //         (localStorage.getItem("magic_token") !== null) ?
        //         <>
        //             <li className="navbar__item">
        //                 <button className="underline text-blue-600 hover:text-purple-700"
        //                     onClick={() => {
        //                         navigate('/magicians')
        //                     }}
        //                 >Magicians</button>
        //             </li> 
        //             <li className="navbar__item">
        //                 <button className="underline text-blue-600 hover:text-purple-700"
        //                     onClick={() => {
        //                         navigate('/myappointments')
        //                     }}
        //                 >My Appointments</button> 
        //             </li> 
        //             <li className="navbar__item">
        //                 <button className="underline text-blue-600 hover:text-purple-700"
        //                     onClick={() => {
        //                         navigate('/makeappointment')
        //                     }}
        //                 >Make Appointment</button> 
        //             </li> 
        //             <li className="navbar__item">
        //                 <button className="underline text-blue-600 hover:text-purple-700"
        //                     onClick={() => {
        //                         navigate('/myprofile')
        //                     }}
        //                 >My Profile</button>
        //             </li> 
        //             <li className="navbar__item">
        //                 <button className="underline text-blue-600 hover:text-purple-700"
        //                     onClick={() => {
        //                         localStorage.removeItem("magic_token")
        //                         navigate('/login')
        //                     }}
        //                 >Logout</button>
        //             </li>
        //         </> :
        //         <>
        //             <li className="navbar__item">
        //                 <NavLink className="text-left underline text-blue-600 hover:text-purple-700" to={"/login"}>Login</NavLink>
        //             </li>
        //             <li className="navbar__item">
        //                 <NavLink className="text-left underline text-blue-600 hover:text-purple-700" to={"/register"}>Register</NavLink>
        //             </li>
        //         </>
        //     }
        // </ul>
    )
}
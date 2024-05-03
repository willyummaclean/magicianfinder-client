import { useNavigate } from "react-router-dom"
// import "./Navbar.css"
import { useEffect, useState } from "react"
import { getUser, getParticipantByUserId } from "../../data/ProfileData"
import {
    // Collapse,
    // Navbar,
    // NavbarToggler,
    // NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    // UncontrolledDropdown,
    // DropdownToggle,
    // DropdownMenu,
    // DropdownItem,
    // NavbarText,
  } from 'reactstrap';
  
export const MyNavbar = () => {
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
        <div className="d-flex justify-content-center" style={{ minHeight: "20vh",  width: "100%" }}>
        <Nav justified pills>
        {
            (localStorage.getItem("magic_token") !== null) ?
                <>
                    <NavItem>
                        <NavLink href="/magicians">Magicians</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/myappointments">My Appointments</NavLink>
                    </NavItem>
                    
                        {magician == false && (
                    <NavItem>
                            <NavLink href="/makeappointment">Make Appointment</NavLink>
                    </NavItem>    )}
                  
                    <NavItem>
                        <NavLink href="/myprofile">My Profile</NavLink>
                    </NavItem>
                    <NavItem>
                        <button className="underline text-blue-600 hover:text-purple-700"
                            onClick={() => {
                                localStorage.removeItem("magic_token")
                                navigate('/login')
                            }}
                        >Logout</button>
                    </NavItem>
                </>
                :
                <>
                    <NavItem>
                        <NavLink href="/login">Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/register">Register</NavLink>
                    </NavItem>
                </>
        }
    </Nav>
    </div>
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
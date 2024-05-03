import { useNavigate } from "react-router-dom"
// import "./Navbar.css"
import { useEffect, useState } from "react"
import { getUser, getParticipantByUserId } from "../../data/ProfileData"
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Nav,
    Button,
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
      <div>
      <div className="justify-content-center" style={{ minHeight: "20vh", width: "100%" }}>
        <Nav>
          {(localStorage.getItem("magic_token") !== null) ? (
            <>
              <Button color="white" className="title" style={{ fontSize: "2.2rem", color: "black", marginRight: "10px" }} onClick={() => navigate("/magicians")}>
                Magicians
              </Button>
              <Button color="white" className="title" style={{ fontSize: "2.2rem", color: "black", marginRight: "10px" }} onClick={() => navigate("/myappointments")}>
                My Appointments
              </Button>
              {magician == false && (
                <Button color="white" className="title" style={{ fontSize: "2.2rem", color: "black", marginRight: "10px" }} onClick={() => navigate("/makeappointment")}>
                  Make Appointment
                </Button>
              )}
              <Button color="white" className="title" style={{ fontSize: "2.2rem", color: "black", marginRight: "10px" }} onClick={() => navigate("/myprofile")}>
                My Profile
              </Button>
              <Button color="white" className="title" style={{ fontSize: "2.2rem", color: "black", marginRight: "10px" }} onClick={() => {
                localStorage.removeItem("magic_token");
                navigate('/login');
              }}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="white" className="title" style={{ fontSize: "2.2rem", color: "black", marginRight: "10px" }} onClick={() => navigate("/login")}>
                Login
              </Button>
              <Button color="white" className="title" style={{ fontSize: "2.2rem", color: "black" }} onClick={() => navigate("/register")}>
                Register
              </Button>
            </>
          )}
        </Nav>
      </div>
    </div>
  );
};

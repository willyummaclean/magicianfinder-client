import { useEffect, useState } from "react"
import { getUser, getParticipantByUserId } from "../../data/ProfileData"
import { Button, Card, CardBody, CardTitle } from "reactstrap"
import { useNavigate } from "react-router-dom"
import "./profile.css"

export const MyProfile = () => {
    const [user, setUser] = useState({})
    const [participant, setParticipant] = useState({})
    const [magician, setMagician] = useState("nope")
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
          try {
            const userData = await getUser();
            setUser(userData);
      
            if (userData.id) {
              const participantData = await getParticipantByUserId(userData.id);
              setParticipant(participantData);
      
              if (participantData.ismagician) {
                setMagician("You betcha");
              } else {
                setMagician("nope");
              }
            }
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
      
        fetchData();
      }, []);
    

    return (
      <div className="custom-card-container"> {/* Apply custom CSS class for styling */}
      <div className="custom-card"> {/* Apply custom CSS class for styling */}
        <h2 className="custom-card-title">My Profile</h2> {/* Apply custom CSS class for styling */}
        <div className="custom-card-body"> {/* Apply custom CSS class for styling */}
          <p>First Name: {user?.firstName}</p>
          <p>Last Name: {user?.lastName}</p>
          <p>Username: {user?.username}</p>
          <p>Magician? {magician}</p>
        </div>
        {/* Render button conditionally based on magician status */}
        {magician === "You betcha" && (
          <button className="custom-card-button" onClick={() => navigate(`/magicianservices/${participant.id}`)}>My Services</button>
        )}
      </div>
    </div>
  );
};

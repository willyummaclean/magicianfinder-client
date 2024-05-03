import { useEffect, useState } from "react"
import { getUser, getParticipantByUserId } from "../../data/ProfileData"
import { Button, Card, CardBody, CardTitle } from "reactstrap"
import { useNavigate } from "react-router-dom"

export const MyProfile = () => {
    const [user, setUser] = useState({})
    const [participant, setParticipant] = useState({})
    const [magician, setMagician] = useState("nope")
    const navigate = useNavigate()

    // useEffect(() => {
    //     getUser().then((data) => setUser(data))
    //     }
    // ,[])

    // useEffect(() => {
    //     if (user.id); {
    //         getParticipantByUserId(user?.id).then((p) => setParticipant(p))}
        
    // }, [user])

    // useEffect(() => {
    //     if (participant.ismagician == true) {
    //         setMagician("You betcha")
    //     }
    //     }
    // ,[participant])

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
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "30vh",  width: "275%" }}>
        <Card style={{ width: "30%" }}>
            <CardTitle className="text-center">My Profile </CardTitle>
            <CardBody className="text-center">
            <p>First Name: {user?.firstName}</p>
            <p>Last Name: {user?.lastName}</p>
            <p>Username: {user?.username}</p>
            <p>Magician? {magician}</p>
            </CardBody>
        </Card>
        {magician === "You betcha" && (
            <Button onClick={() => navigate(`/magicianservices/${participant.id}`)}>
            My Services
            </Button>
        )}  
        </div>     


        // <>
        // <Card>
        //     <CardTitle My Profile/>
        //     <CardBody>
        //         <p>First Name:  {user.firstName}</p>
        //         <p>Last Name:  {user.lastName}</p>
        //         <p>Username:  {user.username}</p>
        //         <p>Magician?  {magician}</p>
        //     </CardBody>
        // </Card>
        // { (magician == "You betcha")? (
        //     <Button onClick={() => navigate(`/magicianservices/${participant.id}`)}>My Services</Button>
        // ):(<></>)}
        // </>
    )
}
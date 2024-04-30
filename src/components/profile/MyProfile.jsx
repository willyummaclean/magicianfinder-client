import { useEffect, useState } from "react"
import { getUser, getParticipantByUserId } from "../../data/ProfileData"
import { Button, Card, CardBody, CardTitle } from "reactstrap"
import { useNavigate } from "react-router-dom"

export const MyProfile = () => {
    const [user, setUser] = useState({})
    const [participant, setParticipant] = useState({})
    const [magician, setMagician] = useState("nope")
    const navigate = useNavigate()

    useEffect(() => {
        getUser().then((data) => setUser(data))
        }
    ,[])

    useEffect(() => {
        if (user); {
            getParticipantByUserId(user.id).then((p) => setParticipant(p))}
        
    }, [user])

    useEffect(() => {
        if (participant.ismagician == true) {
            setMagician("You betcha")
        }
        }
    ,[participant])
    

    return (
        <>
        <Card>
            <CardTitle My Profile/>
            <CardBody>
                <p>First Name:  {user.firstName}</p>
                <p>Last Name:  {user.lastName}</p>
                <p>Username:  {user.username}</p>
                <p>Magician?  {magician}</p>
            </CardBody>
        </Card>
        { (magician == "You betcha")? (
            <Button onClick={() => navigate(`magicianservices/${participant.id}`)}>My Services</Button>
        ):(<></>)}
        </>
    )
}
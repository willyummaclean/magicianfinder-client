import { useEffect, useState } from "react"
import { getMagicians } from "../../data/MagicianData"
import { useNavigate } from "react-router-dom"
import { Card, CardBody, CardTitle, Button } from "reactstrap"


export const MagicianList = () => {
    const [magicians, setMagicians] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
       getMagicians().then((data) => setMagicians(data))
    }, [])


    return (
        <>
        
        {magicians.map((magician) => {
            return (
                <>
                <div key={magician.id}>
                    <Card style={{width: '18rem'}}>
                        <CardBody>
                            <CardTitle>
                            {magician.user.first_name} {magician.user.last_name}
                            </CardTitle>
                            <Button onClick={() => navigate(`${magician.id}`)}>View Magician Profile</Button>
                        </CardBody>
                    </Card>
                 </div>
                 </>

            )}) }
        </>

    )
}
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { createMagicianService, getServicesTypes } from "../../data/ServiceData"
import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import { getUser, getParticipantByUserId } from "../../data/ProfileData"


export const CreateService = () => {
    const [user, setUser] = useState({})
    const [participant, setParticipant] = useState({})
    const [description, setDescription] = useState("")
    const [serviceTypeId, setServiceTypeId] = useState(0)
    const [serviceTypes, setServiceTypes] = useState([])
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
        getServicesTypes().then((data) => setServiceTypes(data))
    }, [])

    const handleSave = () => {
        const trickObject = {
            "service": serviceTypeId,   
            "description": description   
        }
       
        createMagicianService(trickObject)
        navigate(`/magicianservices/${participant.id}`)
    }

    const handleServiceTypeChange = (event) => {
        setServiceTypeId(parseInt(event.target.value)); 
    };

    return (
        <>
        <Form>   
            <FormGroup>
            <Label for="serviceSelect">
                Service Type
            </Label>
                <Input
                id="serviceSelect"
                name="select"
                type="select"
                onChange={handleServiceTypeChange} 
                value={serviceTypeId} 
                >
                <option value="0">
                    Select one:
                </option>
                {serviceTypes.map((serviceType) => {
                    return (
                    <option key={serviceType.id} value={serviceType.id}>
                        {serviceType.name}
                    </option> 
                )})}
                </Input>
            </FormGroup>
            
            <FormGroup>
                <Label for="descriptionText">
                Description
                </Label>
                <Input
                id="descriptionText"
                name="text"
                type="textarea"
                onChange={(event) => setDescription(event.target.value)}
                />
            </FormGroup>
            <Button onClick={() => handleSave()}>
            Submit
            </Button>
        </Form>
        </>
    )
}
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getMagicianServiceById, getServicesTypes, updateMagicianService } from "../../data/ServiceData"
import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import { getUser, getParticipantByUserId } from "../../data/ProfileData"


export const UpdateService = () => {
    const [user, setUser] = useState({})
    const [participant, setParticipant] = useState({})
    const [description, setDescription] = useState("")
    const [serviceTypeId, setServiceTypeId] = useState(0)
    const [serviceTypes, setServiceTypes] = useState([])
    const [magicianService, setMagicianService] = useState({})
    const { magicianServiceId } = useParams()
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

    useEffect(() => {
        getMagicianServiceById(magicianServiceId).then((magicianService) => setMagicianService(magicianService))
    }, [magicianServiceId])

    useEffect(() => {
        if (magicianService) {
        setDescription(magicianService.description)
        setServiceTypeId(magicianService.service?.id)
        }
    }, [magicianService])

    const handleSave = () => {
        const trickObject = {
            "service": serviceTypeId,   
            "description": description
            
        }
        if (trickObject.description === "") {
            trickObject.description = magicianService.description
        }
        if (trickObject.service === 0) {
            trickObject.service= magicianService.service.id
        }
        updateMagicianService(trickObject, magicianService.id)
        navigate(`/magicianservices/${participant.id}`)
    }

    const handleServiceTypeChange = (event) => {
        setServiceTypeId(parseInt(event.target.value)); 
    };

    return (
        <div className="custom-service-card">
        <Form>   
            <FormGroup>
            <Label for="serviceSelect" style={{fontSize: '36px'}}>
                Service Type
            </Label>
                <Input
                id="serviceSelect"
                name="select"
                type="select"
                style={{fontSize: '36px'}}
                onChange={handleServiceTypeChange} 
                value={serviceTypeId} 
                >
                <option value="0"> 
                Select one
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
                <Label for="descriptionText" style={{fontSize: '36px'}}>
                Description
                </Label>
                <Input
                id="descriptionText"
                name="text"
                type="textarea"
                style={{fontSize: '36px'}}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                />
            </FormGroup>
            <button className="custom-service-button" onClick={() => handleSave()}>
            Submit
            </button>
        </Form>
        </div>
    )
}
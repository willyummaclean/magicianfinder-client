import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getMagicianServiceById, getServicesTypes, updateMagicianService } from "../../data/ServiceData"
import { Button, Form, FormGroup, Input, Label } from "reactstrap"



export const UpdateService = () => {
    const [description, setDescription] = useState("")
    const [serviceTypeId, setServiceTypeId] = useState(0)
    const [serviceTypes, setServiceTypes] = useState([])
    const [magicianService, setMagicianService] = useState({})
    const { magicianServiceId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getServicesTypes().then((data) => setServiceTypes(data))
    }, [])

    useEffect(() => {
        getMagicianServiceById(magicianServiceId).then((magicianService) => setMagicianService(magicianService))
    }, [magicianServiceId])

    const handleSave = () => {
        const trickObject = {
            "service": serviceTypeId,   
            "description": description
            
        }
        if (trickObject.description === "") {
            trickObject.description = magicianService.description
        }
        if (trickObject.service === 0) {
            trickObject.service= magicianService.service
        }
        updateMagicianService(trickObject, magicianServiceId)
        navigate("/myprofile")
    }

    const handleServiceTypeChange = (event) => {
        setServiceTypeId(parseInt(event.target.value)); 
    };

    return (
        <>
        <Form>   
            <FormGroup>
            <Label for="serviceSelect">
                Select
            </Label>
                <Input
                id="serviceSelect"
                name="select"
                type="select"
                onChange={handleServiceTypeChange} 
                value={serviceTypeId} 
                >
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
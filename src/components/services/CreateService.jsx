import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { createMagicianService, getServicesTypes } from "../../data/ServiceData"
import { Button, Form, FormGroup, Input, Label } from "reactstrap"



export const CreateService = () => {
    const [description, setDescription] = useState("")
    const [serviceTypeId, setServiceTypeId] = useState(0)
    const [serviceTypes, setServiceTypes] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getServicesTypes().then((data) => setServiceTypes(data))
    }, [])

    const handleSave = () => {
        const trickObject = {
            "service": serviceTypeId,   
            "description": description   
        }
       
        createMagicianService(trickObject)
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
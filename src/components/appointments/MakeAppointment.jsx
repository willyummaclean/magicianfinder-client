import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getMagicianServices } from "../../data/ServiceData"
import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import { createAppointment } from "../../data/AppointmentData"



export const MakeAppointment = () => {
    const [date, setDate] = useState("")
    const [magicianServiceId, setMagicianServiceId] = useState(0)
    const [magicianServices, setMagicianServices] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getMagicianServices().then((data) => setMagicianServices(data))
    }, [])

    const handleSave = () => {
        const appointmentObject = {
            "magicianService": magicianServiceId,   
            "date": date 
        }
       
        createAppointment(appointmentObject)
        navigate("/myprofile")
    }

    const handleServiceTypeChange = (event) => {
        setMagicianServiceId(parseInt(event.target.value)); 
    };

    return (
        <>
        <Form>   
            <FormGroup>
            <Label for="serviceSelect">
                Magician Service
            </Label>
                <Input
                id="serviceSelect"
                name="select"
                type="select"
                onChange={handleServiceTypeChange} 
                value={magicianServiceId} 
                >
                <option value="0">
                    Select one:
                </option>
                {magicianServices.map((service) => {
                    return (
                    <option key={service.id} value={service.id}>
                        {service.description}
                    </option> 
                )})}
                </Input>
            </FormGroup>
            
            <FormGroup>
                <Label for="date">
                Date
                </Label>
                <Input
                id="date"
                name="date"
                input type="date" min="2024-05-05" max="2028-12-31" 
                onChange={(event) => setDate(event.target.value)}
                />
            </FormGroup>
            <Button onClick={() => handleSave()}>
            Submit
            </Button>
        </Form>
        </>
    )
}
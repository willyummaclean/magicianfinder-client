import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getMagicianServiceById, getServicesTypes } from "../../data/ServiceData"



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

    useEffect(() => {
        setServiceTypeId(magicianService.serviceId)
    }, [magicianService])
    

    const handleSave = () => {
        const exerciseObject = {
            "userId": currentUser.id,
            "name": name,
            "categoryId": parseInt(categoryId),
            "description": description
            
        }
        if (exerciseObject.name === "") {
            exerciseObject.name = exercise.name
        }
        if (exerciseObject.description === "") {
            exerciseObject.description = exercise.description
        }
        if (exerciseObject.categoryId === 0) {
            exerciseObject.categoryId = exercise.categoryId
        }
        EditPracticeExercise(exerciseObject, exerciseId)
        navigate("/exercises")
    }

    return (
        <>
        <div className="container">
            <div className="bigPlanBlock">
                <h1 className="title">Edit Exercise</h1>
                <div>
                    
                    <p className="bubble">Name:</p><input
                    type="text"
                    className="bubble"
                    defaultValue={exercise.name}
                    onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
                <div>
                    <p className="bubble">Category:</p><label htmlFor="category-select"></label>
                        <select name="categories" id="category-select" value={categoryId} className="bubble"
                        onChange={(event) => setCategoryId(parseInt(event.target.value)) }>
                            {/* <option value="">--Please choose a Category--</option> */}
                            {categories.map((m) => {
                            return (
                                <option value={m.id}>{m.name}</option>
                            ) })}
                        </select>
                </div>
                <div>
                    <p className="bubble">Description:</p>
                </div>
                <div>
                    <textarea
                    rows={5} cols={40}
                    // placeholder="Description"
                    className="bubble"
                    defaultValue={exercise.description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button className="button-74" onClick={handleSave}>Save</button>
            </div>
        </div>
        </>
    )
}
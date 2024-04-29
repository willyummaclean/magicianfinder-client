import { useEffect, useState } from "react"
import { getMagicianById } from "../../data/MagicianData"
import { getMagicianServices } from "../../data/MagicianData"
import { useParams } from "react-router-dom"


export const MagicianDetails = ( ) => {
    const [magician, setMagician] = useState({})
    const [magicianservices, setMagicianServices] = useState({})
    const { magicianId } = useParams()
    
    useEffect(() => {
        getMagicianById(magicianId).then((data) => setMagician(data)) 
    }, [magicianId])

    useEffect(() => {
        getMagicianServices(magicianId).then((data) => setMagicianServices(data))
        
    }, [magicianId])
   
    return (
        <>
        <div className="container">
            <div className="bigPlanBlock">
                <h1 className="title">Magician Details</h1>
                <div><p className="bubble">Name:</p><p className="bubble"> {magician.name}</p></div>
                <div>
                {magicianservices.map((magicianservice) => {
            return (
                <>
                <div className="planBlock">
                    <h2 key={magicianservice.id} className="title">{magicianservice.service}</h2>
                    <div>
                    <p>{magicianservice.description}</p>
                    </div>
                 </div>
                 </>
            )}) }
                </div>
            </div>
        </div>
        </>
    )
}
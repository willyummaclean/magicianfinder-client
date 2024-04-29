import { useEffect, useState } from "react"
import { getMagicians } from "../../data/MagicianData"
import { useNavigate } from "react-router-dom"


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
                <div className="planBlock">
                    <h2 key={magician.id} className="title">{magician.name}</h2>
                    <div>
                    <button className="button-74" onClick={() => navigate(`${magician.id}`)}>View Magician Profile</button>
                    </div>
                 </div>
                 </>
            )}) }
        </>

    )
}
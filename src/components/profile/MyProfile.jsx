import { useEffect, useState } from "react"
import { getUser } from "../../data/ProfileData"


export const MyProfile = () => {
    const [user, setUser] = useState({})
    const [participant, setParticipant] = useState({})

    useEffect(() => {
        getUser().then((data) => setUser(data))
        if (user); {
            getParticipantByUserId(user.id).then((p) => setParticipant(p))
        }
    },[])

}
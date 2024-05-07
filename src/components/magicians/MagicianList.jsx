// import { useEffect, useState } from "react"
// import { getMagicians } from "../../data/MagicianData"
// import { useNavigate } from "react-router-dom"
// import { Card, CardBody, CardTitle, Button } from "reactstrap"
// import "./magician.css"

// export const MagicianList = () => {
//     const [magicians, setMagicians] = useState([])
//     const navigate = useNavigate()

//     useEffect(() => {
//        getMagicians().then((data) => setMagicians(data))
//     }, [])


//     return (
//         <>
//         <div>
//             <h1>Magicians</h1>
//             {magicians.map((magician) => {
//                 return (
//                     <>
//                     <div key={magician.id}>
//                         <Card style={{width: '25rem', height: '15rem', textAlign: 'center'}}>
//                             <CardBody style={{marginTop: '4rem'}}>
//                                 <CardTitle className="magician-card-title">
//                                 {magician.user.first_name} {magician.user.last_name}
//                                 </CardTitle>
//                                 <Button className="magician-button" onClick={() => navigate(`${magician.id}`)}>View Magician Profile</Button>
//                             </CardBody>
//                         </Card>
//                     </div>
//                     </>

//                 )}) }
//         </div>
//         </>

//     )
// }

import { useEffect, useState } from "react";
import { getMagicians } from "../../data/MagicianData";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, CardTitle, Button } from "reactstrap";
import "./magician.css";

export const MagicianList = () => {
    const [magicians, setMagicians] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getMagicians().then((data) => setMagicians(data));
    }, []);

    return (
        <div className="magician-container">
            <h1 style={{marginBottom: "20px"}}>Magicians</h1>
            <div className="magician-card-list">
                {magicians.map((magician) => (
                    <div key={magician.id}>
                        <Card style={{ width: '25rem', height: '15rem', textAlign: 'center' }}>
                            <CardBody style={{ marginTop: '4rem' }}>
                                <CardTitle className="magician-card-title">
                                    {magician.user.first_name} {magician.user.last_name}
                                </CardTitle>
                                <Button className="magician-button" onClick={() => navigate(`${magician.id}`)}>View Magician Profile</Button>
                            </CardBody>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

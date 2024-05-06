import { useEffect, useState } from "react"
import { getMagicianById } from "../../data/MagicianData"
import { getMagicianServices } from "../../data/MagicianData"
import { useParams } from "react-router-dom"
import { Card } from "reactstrap"

export const MagicianDetails = ( ) => {
    const [magician, setMagician] = useState({})
    const [magicianservices, setMagicianServices] = useState([])
    const { magicianId } = useParams()
    
    useEffect(() => {
        getMagicianById(magicianId)
          .then((data) => {
            setMagician(data);
            if (data.id) {
              getMagicianServices(data.id).then((serviceData) =>
                setMagicianServices(serviceData)
              );
            }
          });
      }, [magicianId]);

    // return (
    //     <>
    //     <div className="container">
    //         <div>
    //             <h1>Magician Details</h1>
    //             <div><p >Name: {magician?.user.first_name} {magician?.user.last_name}</p></div>
    //             <div>
    //             {magicianservices.map((magicianservice) => {  
    //             return (
    //             <>
    //             <div key={magicianservice.id}>
    //                 <h2>Magic Type: {magicianservice.service.name}</h2>
    //                 <div>
    //                 <p>{magicianservice.description}</p>
    //                 </div>
    //              </div>
    //              </>
    //         )}) }
    //             </div>
    //         </div>
    //     </div>
    //     </>
    // )
    return (
      <>
        <div className="container">
          <div>
            <h1>Magician Details</h1>
            {magician ? (
              <Card style={{width: '25rem', height: '25rem', alignItems: 'center', marginTop: '10px', paddingTop: '25px'}}>
                <h2>Name: {magician?.user?.first_name} {magician?.user?.last_name}</h2>
                <div>
                  {magicianservices.map((magicianservice) => {
                    return (
                      <>
                        <div key={magicianservice.id}>
                          <h3>Magic Type: {magicianservice.service.name}</h3>
                          <div>
                            <p>{magicianservice.description}</p>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </Card>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </>
    );
}
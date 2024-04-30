import { useEffect, useState } from "react"
import { getMagicianById } from "../../data/MagicianData"
import { getMagicianServices } from "../../data/MagicianData"
import { useParams } from "react-router-dom"


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
              <div>
                <p>Name: {magician?.user?.first_name} {magician?.user?.last_name}</p>
                <div>
                  {magicianservices.map((magicianservice) => {
                    return (
                      <>
                        <div key={magicianservice.id}>
                          <h2>Magic Type: {magicianservice.service.name}</h2>
                          <div>
                            <p>{magicianservice.description}</p>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </>
    );
}
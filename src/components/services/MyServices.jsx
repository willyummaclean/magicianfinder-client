import { useEffect, useState } from "react"
import { getMagicianById } from "../../data/MagicianData"
import { getMagicianServices } from "../../data/MagicianData"
import { useNavigate, useParams } from "react-router-dom"
import { Button } from "reactstrap"
import { deleteMagicianService } from "../../data/ServiceData"


export const MyServices = ( ) => {
    const [magician, setMagician] = useState({})
    const [magicianservices, setMagicianServices] = useState([])
    const { magicianId } = useParams()
    const navigate = useNavigate()
    
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

    const handleDelete = (magicianserviceId) => {
        deleteMagicianService(magicianserviceId).then(() => {
            getMagicianServices(magician.id).then((serviceData) =>
              setMagicianServices(serviceData)
            );     
        });
      };


      return (
        <>
          <div className="container">
            <div>
              <h1>My Services</h1>
              {magician ? (
                <div>
                  <div>
                    {magicianservices.map((magicianservice) => {
                      return (
                        <>
                        <div key={magicianservice.id}>
                            <h2>Magic Type: {magicianservice.service.name}</h2>
                            <div>
                              <p>{magicianservice.description}</p>
                              <Button onClick={() => navigate(`/magicianservices/update/${magicianservice.id}`)}>Update</Button>
                              <Button onClick={() => handleDelete(magicianservice.id)}>Delete</Button>
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
            <div>
                <Button onClick={() => navigate(`/magicianservices/new`)}>Add New Service</Button>
            </div>
          </div>
          
        </>
      );


}
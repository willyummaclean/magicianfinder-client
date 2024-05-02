
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, CardTitle, Button } from "reactstrap";
import { deleteAppointment, getAppointmentsByCustomer } from "../../data/AppointmentData";

export const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();
  

  // useEffect(() => {
  //   getAppointmentsByCustomer().then((data) => setAppointments(data));
  // }, []);


  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const appointmentData = await getAppointmentsByCustomer();
        setAppointments(appointmentData);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  const handleDelete = (appointmentId) => {
    deleteAppointment(appointmentId).then(() => {
        getAppointmentsByCustomer().then((appointmentData) =>
          setAppointments(appointmentData)
        );     
    });
  };

  return (
    <>
      {appointments?.map((appointment) => {
        return (
            <div key={appointment.id}>
              <Card style={{ width: '18rem' }}>
                <CardBody>
                  <CardTitle>
                    <p>{appointment.magicianService.magician.user.first_name}{" "}{appointment.magicianService.magician.user.last_name}</p>
                    <p>{appointment.magicianService.description}{" "}</p>
                    <p>{appointment.date}</p>
                  </CardTitle>
                  <Button
                    onClick={() =>
                      navigate(`/magicians/${appointment.magicianService.magician.id}`)
                    }
                  >
                    View Magician Profile
                  </Button>
                  <Button onClick={() => handleDelete(appointment.id)}>
                    Delete Appointments
                  </Button>
                </CardBody>
              </Card>
            </div>
        );
      })}
    </>
  );
};
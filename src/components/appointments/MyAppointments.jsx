import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";
import { deleteAppointment, getAppointmentsByCustomer } from "../../data/AppointmentData";
import "./appointments.css"; // Import the CSS file

export const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

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
      <div className="appointments-container" style={{ backgroundColor: "white" }}>
        <h1 className="appointments-title">My Appointments</h1>
        <div className="appointments-grid-container">
          {appointments?.map((appointment) => {
            return (
              <div key={appointment.id} className="appointment-card">
                <Card style={{ width: '25rem', height: '25rem' }}>
                  <CardBody style={{ textAlign: 'center', paddingTop: '50px'}} >
                    <CardTitle style={{ fontSize: '24px'}}>
                      <p>{appointment.magicianService.magician.user.first_name}{" "}{appointment.magicianService.magician.user.last_name}</p>
                      <p>{appointment.magicianService.description}{" "}</p>
                      <p>{appointment.date}</p>
                    </CardTitle>
                    <button className="custom-appointment-button"
                      onClick={() =>
                        navigate(`/magicians/${appointment.magicianService.magician.id}`)
                      }
                    >
                      View Magician Profile
                    </button>
                    <button className="custom-appointment-button" onClick={() => handleDelete(appointment.id)}>
                      Delete Appointment
                    </button>
                  </CardBody>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

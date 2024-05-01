const apiUrl = "http://localhost:8000"


export const getAppointmentsByCustomer= () => {
    const tokenObj = JSON.parse(localStorage.getItem("magic_token"));
    const token = tokenObj ? tokenObj.token : null;
  
    return fetch(`${apiUrl}/appointments`, {
      headers: {
        Authorization: token ? `Token ${token}` : null,
      },
    })
      .then((res) => res.json())
      .catch((error) => {
        console.error("Error fetching appointments:", error);
        // You can also handle the error in a more user-friendly way
      });
  };


export const deleteAppointment = (appointmentId) => {
    const tokenObj = JSON.parse(localStorage.getItem("magic_token"));
    const token = tokenObj ? tokenObj.token : null;

    return fetch(`${apiUrl}/appointments/${appointmentId}`, {
      method: 'DELETE',
      headers: {
        Authorization: token ? `Token ${token}` : null,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete appointment');
        }
        // If the deletion is successful, resolve the Promise
        return Promise.resolve();
      })
      .catch((error) => {
        console.error('Error deleting appointment:', error);
        // Handle the error appropriately
      });
  }

export const createAppointment= async (newAppoinment) => {
    const tokenObj = JSON.parse(localStorage.getItem("magic_token"));
    const token = tokenObj ? tokenObj.token : null;

    const res = await fetch(`${apiUrl}/appointments`, {
        method: "POST",
        headers: {
            Authorization: token ? `Token ${token}` : null,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newAppoinment)
    });
    return await res.json();
}

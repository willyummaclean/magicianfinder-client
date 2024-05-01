const apiUrl = "http://localhost:8000"


export const deleteMagicianService = (magicianserviceId) => {
    const tokenObj = JSON.parse(localStorage.getItem("magic_token"));
    const token = tokenObj ? tokenObj.token : null;

    return fetch(`${apiUrl}/magicianservices/${magicianserviceId}`, {
      method: 'DELETE',
      headers: {
        Authorization: token ? `Token ${token}` : null,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete magician service');
        }
        // If the deletion is successful, resolve the Promise
        return Promise.resolve();
      })
      .catch((error) => {
        console.error('Error deleting magician service:', error);
        // Handle the error appropriately
      });
  }

export const getMagicianServiceById = (magicianServiceId) => {
    const tokenObj = JSON.parse(localStorage.getItem("magic_token"));
    const token = tokenObj ? tokenObj.token : null;
  
      return fetch(`${apiUrl}/magicianservices/${magicianServiceId}`, {
          headers: {
            Authorization: token ? `Token ${token}` : null,
          },
        })
      .then((res) => res.json())
  }

export const updateMagicianService = async (editedService, magicianServiceId) => {
    const tokenObj = JSON.parse(localStorage.getItem("magic_token"));
    const token = tokenObj ? tokenObj.token : null;

    const res = await fetch(`${apiUrl}/magicianservices/${magicianServiceId}`, {
        method: "PUT",
        headers: {
            Authorization: token ? `Token ${token}` : null,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(editedService)
    });
    return await res.json();
}

export const getServicesTypes = () => {
    const tokenObj = JSON.parse(localStorage.getItem("magic_token"));
    const token = tokenObj ? tokenObj.token : null;

    return fetch(`${apiUrl}/services`, {
        headers: {
          Authorization: token ? `Token ${token}` : null,
        },
      })
    .then((res) => res.json())

}


export const createMagicianService = async (newService) => {
    const tokenObj = JSON.parse(localStorage.getItem("magic_token"));
    const token = tokenObj ? tokenObj.token : null;

    const res = await fetch(`${apiUrl}/magicianservices`, {
        method: "POST",
        headers: {
            Authorization: token ? `Token ${token}` : null,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newService)
    });
    return await res.json();
}


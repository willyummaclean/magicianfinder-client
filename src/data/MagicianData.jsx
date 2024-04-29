const apiUrl = "http://localhost:8000"


export const getMagicians = () => {
    const tokenObj = JSON.parse(localStorage.getItem("magic_token"));
    const token = tokenObj ? tokenObj.token : null;
  
    return fetch(`${apiUrl}/participants?ismagician`, {
      headers: {
        Authorization: token ? `Token ${token}` : null,
      },
    })
      .then((res) => res.json())
      .catch((error) => {
        console.error("Error fetching magicians:", error);
        // You can also handle the error in a more user-friendly way
      });
  };

export const getMagicianById = (magicianId) => {
    const tokenObj = JSON.parse(localStorage.getItem("magic_token"));
    const token = tokenObj ? tokenObj.token : null;

    return fetch(`${apiUrl}/participants/${magicianId}`, {
        headers: {
          Authorization: token ? `Token ${token}` : null,
        },
      })
    .then((res) => res.json())
}

export const getMagicianServices = (magicianId) => {
  const tokenObj = JSON.parse(localStorage.getItem("magic_token"));
  const token = tokenObj ? tokenObj.token : null;

    return fetch(`${apiUrl}/magicianservices?magicianId=${magicianId}`, {
        headers: {
          Authorization: token ? `Token ${token}` : null,
        },
      })
    .then((res) => res.json())
}
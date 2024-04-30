const apiUrl = "http://localhost:8000"


export const getUser = () => {
    const tokenObj = JSON.parse(localStorage.getItem("magic_token"));
    const token = tokenObj ? tokenObj.token : null;

    return fetch(`${apiUrl}/current_user`, {
        headers: {
          Authorization: token ? `Token ${token}` : null,
        },
      })
    .then((res) => res.json())
}

export const getParticipantByUserId = (userId) => {
    const tokenObj = JSON.parse(localStorage.getItem("magic_token"));
    const token = tokenObj ? tokenObj.token : null;

    return fetch(`${apiUrl}/participants/${userId}`, {
        headers: {
          Authorization: token ? `Token ${token}` : null,
        },
      })
    .then((res) => res.json())
}
const apiUrl = "http://localhost:8000"

export const getMagicians = () => {
    return fetch(`${apiUrl}/participants?ismagician`)
    .then((res) => res.json())
}

export const getMagicianById = (magicianId) => {
    return fetch(`${apiUrl}/participants/${magicianId}`)
    .then((res) => res.json())
}

export const getMagicianServices = (magicianId) => {
    return fetch(`${apiUrl}/magicianservices?id=${magicianId}`)
    .then((res) => res.json())
}
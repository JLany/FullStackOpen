import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios
    .get(baseUrl)
    .then(res => res.data)
}

const create = (newContact) => {
  return axios
    .post(baseUrl, newContact)
    .then(res => res.data)
}

const update = (id, newContact) => {
  return axios
    .put(`${baseUrl}/${id}`, newContact)
    .then(res => res.data)
}

const truncate = (id) => {
  return axios
    .delete(`${baseUrl}/${id}`)
    .then(res => res.data)
}

export default { getAll, create, update, truncate }

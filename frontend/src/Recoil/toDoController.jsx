
import axios from "axios";

const API = axios.create({
    baseURL: 'http://localhost:8000/api'
})

export const getTodos = async () => {
    const res = await API.get('/todos')
    // console.log('res.data api: ' + JSON.stringify(res.data))
    return res.data
}

export const postTodo = async (data) => {
    const res = await API.post('/todo/create', data)
    // console.log('res.data post todo api: ' + JSON.stringify(res.data))
    return res.data
}

export const updateTodo = async ({ id, data }) => {
    const res = await API.put(`/todo/${id}`, data)
    return res.data
}

export const deleteTodo = async (id) => {
    const res = await API.delete(`/todo/${id}`)
    return res.data
}
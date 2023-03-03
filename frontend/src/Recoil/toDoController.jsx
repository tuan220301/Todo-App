
import axios from "axios";

const API = axios.create({
    baseURL: 'http://localhost:8000/api'
})

export const getTodos = async () => {
    const res = await API.get('/todos')
    return res.data
}

export const postTodo = async (data) => {
    const res = await API.post('/todo/create', data)
    return res.data
}

export const updateTodo = async ({ id, data }) => {
    const res = await API.put(`/${id}`, data)
    return res.data
}

export const deleteTodo = async (id) => {
    const res = await API.delete(`/${id}`)
    return res.data
}
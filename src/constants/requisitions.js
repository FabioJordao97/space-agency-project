import axios from "axios"
import { goToAdminHome, goToTrips } from "../router/coordinator"
import baseURL from "./baseURL"

const token = localStorage.getItem('token')
const axiosConfig = {
    headers: {
        auth: token
    }
}

export const login = (body, history) => {
    axios
    .post(`${baseURL}/login`, body)

    .then((response)=>{
        localStorage.setItem('token', response.data.token)
       goToAdminHome(history)
    })
    .catch((err)=>{
        console.log(err.message)
    })
}

export const createTrip = (body, history) => {
    axios
    .post(`${baseURL}/trips`, body, axiosConfig)
    .then((response) =>{
        alert("Viagem criada com sucesso!")
        goToTrips(history)
        console.log(response)
    })
    .catch((err)=>{
        alert(err)
    })
}

export const userApplication = (body, id) => {
    axios
    .post(`${baseURL}/trips/${id}/apply`, body)
    .then((res)=>{
        alert(res.data.message)
    })
    .catch((err)=>{
        console.log(err.message)
    })
}
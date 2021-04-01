import axios from "axios"
import { useEffect, useState } from "react"

const useRequestData = (url, initialState) => {
const [data, setData] = useState([initialState])

const token = localStorage.getItem('token')

useEffect(()=>{
    axios.get(url, {headers: {
        Authorization: token
    }})

    .then((response)=>{
        setData(response.data.trips)
    })
    .catch((error)=>{
        console.log(error.message)
    })
},[url])

return data
}

export default useRequestData
import {useState} from "react"

export const useInput = () => {

    const [input, setInput] = useState("")

    const handleInput = (event) => {
        setInput(event.target.value)
    }

    return [input,handleInput]

}
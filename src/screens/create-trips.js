import React from "react"
import { useHistory } from "react-router-dom"
import { Header, LabeX, ReturnButton, HeaderLabel, CreateTrips, TextBox, FormButton, Form } from "../components/styles"
import { useProtectedPage } from "../hooks/useProtectedPage"
import Planets from "../assets/planets"
import { useForm } from "../hooks/useForm"
import {goToHome} from '../router/coordinator'
import {createTrip} from '../constants/requisitions'

const CreateTripsPage = () => {
    useProtectedPage();
    const { form, onChange } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })

    const onChangeInput = (event) => {
        const { value, name } = event.target;
        onChange(value, name)
    }

    const history = useHistory()
    
    const handleSubmit = (event) => {
        event.preventDefault()
        createTrip(form, history)
    }

    return (

        <div>
            <Header>
                <LabeX onClick={() => goToHome(history)}>Labe-X</LabeX>
                <HeaderLabel>Desbrave o universo com a Labe-X</HeaderLabel>
                <ReturnButton onClick={() => goToHome(history)}>Voltar para Home do Administrador</ReturnButton>
            </Header>


            <CreateTrips>
                <Form onSubmit={handleSubmit}>
                    <h2>Cadastrar uma nova viagem</h2>
                    <label>Nome:</label>
                    <input
                        required
                        name="name"
                        type="text"
                        value={form.name}
                        pattern="/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{5,}$/g"
                        onChange={onChangeInput} />

                    <label>Planeta:</label>
                    <Planets onChangeInput={onChangeInput} planet={form.planet} />

                    <label>Data da viagem:</label>
                    <input required
                        name="date"
                        pattern="^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$"
                        value={form.date}
                        onChange={onChangeInput} />

                    <label>Duração:</label>
                    <input
                        required
                        name="durationInDays"
                        type="number"
                        min="50"
                        value={form.durationInDays}
                        onChange={onChangeInput} />

                    <label>Descrição da viagem:</label>
                    <TextBox
                        required
                        name="description"
                        value={form.description}
                        pattern="/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{30,}$/g"
                        onChange={onChangeInput} />

                    <FormButton type="submit">Cadastrar</FormButton>
                </Form>
            </CreateTrips>

        </div>
    )
}

export default CreateTripsPage
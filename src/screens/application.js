import React from "react"
import { useHistory, useParams } from "react-router-dom"
import { Form, FormButton, Header, HeaderLabel, LabeX, ReturnButton, TextBox } from "../components/styles"
import Countries from "../assets/countries"
import { useForm } from "../hooks/useForm"
import { goToHome, goToTrips } from '../router/coordinator'
import { userApplication } from '../constants/requisitions'


const ApplicationFormPage = () => {


    const { form, onChange } = useForm({ name: "", age: "", applicationText: "", profession: "", country: "" })

    const onChangeInput = (event) => {
        const { value, name } = event.target;
        onChange(value, name)
    }

    const history = useHistory()

    const id = useParams();

    const onSubmitForm = (event) => {
        event.preventDefault();
        userApplication(form, id.id);
    }

    return (
        <div>
            <Header>
                <LabeX onClick={() => goToHome(history)}>Labe-X</LabeX>
                <HeaderLabel>Desbrave o universo com a Labe-X</HeaderLabel>
                <ReturnButton onClick={() => goToTrips(history)}>Voltar para Viagens</ReturnButton>
            </Header>


            <Form onSubmit={onSubmitForm}>
                <h3>Formulário de Inscrição</h3>

                <label>Nome:</label>
                <input
                    required
                    name="name"
                    value={form.name}
                    type="text"
                    pattern="/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{3,}$/g"
                    onChange={onChangeInput}
                ></input>

                <label>Idade:</label>
                <input
                    required
                    name="age"
                    value={form.age}
                    type="number"
                    min="18"
                    onChange={onChangeInput}
                ></input>

                <label>Por que você merece viajar com a Labe-X?</label>
                <TextBox
                    required
                    name="applicationText"
                    value={form.applicationText}
                    type="text"
                    pattern="/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{30,}$/g"
                    placeholder="Escreva no mínimo 30 caracteres"
                    onChange={onChangeInput}
                ></TextBox>

                <label>Profissão:</label>
                <input
                    required
                    name="profession"
                    value={form.profession}
                    type="text"
                    placeholder="Escreva no mínimo 10 caracteres"
                    pattern="/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{10,}$/g"
                    onChange={onChangeInput}
                ></input>

                <label>País:</label>
                <Countries onChangeInput={onChangeInput} country={form.country} />

                <FormButton type="submit">Cadastrar</FormButton>
            </Form>


        </div>
    )
}

export default ApplicationFormPage
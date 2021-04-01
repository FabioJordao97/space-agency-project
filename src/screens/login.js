import { React} from "react"
import { useHistory } from "react-router-dom"
import { FormButton, Header, Login, HeaderLabel, ReturnButton, LabeX } from "../components/styles"
import { useForm } from "../hooks/useForm"
import { login } from "../constants/requisitions"
import {goToHome} from '../router/coordinator'
import {useUnprotectedPage} from '../hooks/useUnprotectedPage'

const LoginPage = () => {
    const history = useHistory()
    useUnprotectedPage()

    const { form, onChange, resetForm } = useForm({ email: '', password: '' })
    const handleInput = (event) => {
        const { value, name } = event.target
        onChange(value, name)
    }
    const handleSubmission = (event) => {
        event.preventDefault()
        login(form, history)
        resetForm()
    }
    return (
        <div>

            <Header>
                <LabeX onClick={ () => goToHome(history)}>Labe-X</LabeX>
                <HeaderLabel>Desbrave o universo com a Labe-X</HeaderLabel>
                <ReturnButton onClick={() => goToHome(history)}>Voltar para Home</ReturnButton>
            </Header>

            <Login>
                <h3>Já faz parte da nossa comunidade? Faça seu login abaixo:</h3>

                <form onSubmit={handleSubmission}>
                    <label>E-mail:</label>
                    <input 
                    value={form.email}
                    name='email'
                    onChange={handleInput} 
                    type='email' 
                    />

                    <label>Senha:</label>
                    <input 
                    name='password'
                    type='password' 
                    value={form.password} 
                    onChange={handleInput} />

                    <FormButton onClick={login}>Entrar</FormButton>
                </form>
            </Login>

        </div>
    )

}
export default LoginPage
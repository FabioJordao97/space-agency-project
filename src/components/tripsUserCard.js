import { useHistory } from 'react-router'
import {FormButton} from '../components/styles'
import {goToApplicationFormPage} from '../router/coordinator'

const TripsUserCard = (props) => {
    const history = useHistory()
    return (
        <div>
            <strong>
                <p>Nome: {props.name}</p>
                <p>Planeta: {props.planet}</p>
                <p>Data de viagem: {props.date}</p>
                <p>Duração da viagem: {props.duration} dias</p>
                <p>Descrição da viagem: {props.description}</p>
                <FormButton onClick={() => goToApplicationFormPage(history, props.id)}>Inscreva-se!</FormButton>
            </strong>
        </div>
    )
}

export default TripsUserCard


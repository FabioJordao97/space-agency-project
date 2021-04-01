import {useHistory} from 'react-router-dom'
import {FormButton} from '../components/styles'


const TripCard = (props) => {
    const history = useHistory()
    const goToApproval = (tripId) => {
        history.push(`/approval/${tripId}`)
    }

    return (
        <div>
            <strong>
            <p>Nome: {props.name}</p>
                <p>Planeta: {props.planet}</p>
                <p>Duração da viagem: {props.duration} dias</p>
                <p>Data da viagem: {props.date}</p>
                <p>Descrição: {props.description}</p>
                <FormButton onClick={() => goToApproval(props.id)}>Ver mais</FormButton>
            </strong>
        </div>
    )
}

export default TripCard
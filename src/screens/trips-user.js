import { React} from "react"
import { goToHome } from '../router/coordinator'
import { useHistory } from "react-router-dom"
import { Header, LabeX, ReturnButton, HeaderLabel, StyledH2Div } from "../components/styles"
import useRequestData from "../hooks/useRequestData"
import baseURL from "../constants/baseURL"
import TripsUserCard from '../components/tripsUserCard'


const UserTrip = () => {
    const history = useHistory()

    const goBackToHome = () => {
        history.push("/")
    }    

    const tripsUser = useRequestData(`${baseURL}/trips`, [])

    return (
        <div>
            <Header>
                <LabeX onClick={goToHome}>Labe-X</LabeX>
                <HeaderLabel>Desbrave o universo com a Labe-X</HeaderLabel>
                <ReturnButton onClick={goBackToHome}>Voltar para Home</ReturnButton>
            </Header>

            <div>

                <StyledH2Div>
                    <h2>Lista de Viagens</h2>
                </StyledH2Div>

                {!tripsUser ? <p>Só um minutinho...</p> : tripsUser.map((trip) => {
                    
                    return <TripsUserCard
                    id={trip.id} name={trip.name} planet={trip.planet} duration={trip.durationInDays} date={trip.date} description={trip.description}
                />

                })}
            </div>
        </div>
    )
}

export default UserTrip
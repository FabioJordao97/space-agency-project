import React from "react"
import { Header, LabeX, ReturnButton, HeaderLabel, StyledH2Div } from "../components/styles"
import { useProtectedPage } from "../hooks/useProtectedPage"
import useRequestData from "../hooks/useRequestData"
import baseURL from "../constants/baseURL"
import TripCard from '../components/tripsCard'
import { goToHome, goToAdminHome } from '../router/coordinator'
import { useHistory } from "react-router"

const TripsPage = () => {

    const history = useHistory()
    useProtectedPage();
    const trips = useRequestData(`${baseURL}/trips`, [])
    return (
        <div>
            <Header>
                <LabeX onClick={() => goToHome(history)}>Labe-X</LabeX>
                <HeaderLabel>Desbrave o universo com a Labe-X</HeaderLabel>
                <ReturnButton onClick={() => goToAdminHome(history)}>Voltar para Home do Adminstrador</ReturnButton>
            </Header>

            <StyledH2Div>
                <h2>Lista de Viagens</h2>
            </StyledH2Div>

            {!trips ? <p>Nenhuma viagem cadastrada</p> : trips.map((trip) => {

                return <TripCard
                    id={trip.id} name={trip.name} planet={trip.planet} duration={trip.durationInDays} date={trip.date} description={trip.description}
                />

            })}

        </div>
    )
}

export default TripsPage
import React from "react"
import { useHistory} from "react-router-dom"
import { Header, LabeX, ReturnButton, AdminHome,  HeaderLabel, HomeAdminButtons, AdminButtons } from "../components/styles"
import { useProtectedPage } from "../hooks/useProtectedPage"
import {goToHome, goToCreateTrips, goToTrips} from '../router/coordinator'

function AdminHomePage() {

    const history = useHistory()
    useProtectedPage()

    return (
        <div>
            <Header>
                <LabeX onClick={() => goToHome(history)}>Labe-X</LabeX>
                <HeaderLabel>Desbrave o universo com a Labe-X</HeaderLabel>
                <ReturnButton onClick={() => goToHome(history)}>Voltar Para Home</ReturnButton>
            </Header>

            <AdminHome>
                <h2>Seja bem vindo a tela de controle, administrador! Aqui você poderá visualizar as viagens já cadastradas, criar novas viagens para os usuários e aceitar ou rejeitas as solicitaçãos realizadas.</h2>
                <HomeAdminButtons>
                <AdminButtons onClick={() =>goToCreateTrips(history)}>Cadastrar Novas Viagens</AdminButtons>
                <AdminButtons onClick={() => goToTrips(history)}>Exibir suas viagens cadastradas</AdminButtons>
                </HomeAdminButtons>
            </AdminHome>

        </div>
    )
}

export default AdminHomePage
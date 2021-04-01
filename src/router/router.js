import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import HomePage from "../screens/home.js"
import CreateTripsPage from "../screens/create-trips"
import LoginPage from "../screens/login"
import ApplicationFormPage from "../screens/application"
import ApprovalPage from "../components/approval"
import TripsPage from "../screens/trips"
import AdminHomePage from "../screens/home-admin"
import ErrorPage from "../screens/error"
import UserTrip from "../screens/trips-user"

function Router () {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <HomePage/>
            </Route>

            <Route exact path="/application/:id">
                <ApplicationFormPage />
            </Route>

            <Route exact path="/trips">
                <TripsPage/>
            </Route>

            <Route exact path="/create">
                <CreateTripsPage/>
            </Route>

            <Route exact path="/approval/:id">
                <ApprovalPage/>
            </Route>

            <Route exact path="/login">
                <LoginPage/>
            </Route>

            <Route exact path="/homeadmin">
                <AdminHomePage/>
            </Route>

            <Route exact path="tripsuser">

            </Route>
            <UserTrip />
            <Route>
                <ErrorPage />
            </Route>

        </Switch>
        </BrowserRouter>
    )
}

export default Router
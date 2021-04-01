export const goToAdminHome = (history) =>{
    history.push("/homeadmin")
}

export const goToHome = (history) => {
    history.push("/")
}

export const goToApplicationFormPage = (history, id) => {
    history.push(`/application/${id}`)
}

export const goToCreateTrips = (history) => {
    history.push("/create")
}

export const goToTrips = (history) => {
    history.push("/trips")
}
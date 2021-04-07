import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToAdminHome } from "../router/coordinator";

export const useUnprotectedPage = () => {
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            goToAdminHome(history)
        }
    }, [history])

}

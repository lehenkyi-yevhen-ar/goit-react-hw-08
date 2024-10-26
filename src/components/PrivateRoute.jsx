import { Navigate } from "react-router"
import { selectIsLoggedIn } from "../redux/auth/selectors"
import { useSelector } from "react-redux"

export const PrivateRoute = ({comp: Comp, redTo}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    return isLoggedIn ? Comp : <Navigate to={redTo} />
}



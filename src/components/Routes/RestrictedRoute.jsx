import { Navigate } from "react-router"
import { selectIsLoggedIn } from "../../redux/auth/selectors"
import { useSelector } from "react-redux"

export const RestrictedRoute = ({
  comp: Comp,
  redTo,
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  return isLoggedIn ? (
    <Navigate to={redTo} />
  ) : (
    Comp
  )
}

import {
  useDispatch,
  useSelector,
} from "react-redux"
import {
  selectIsLoggedIn,
  selectUser,
} from "../../redux/auth/selectors"
import { logout } from "../../redux/auth/operations"
import AuthNav from "./AuthNav"
import Navigation from "./Navigation"

const AppBar = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const isLoggedIn = useSelector(selectIsLoggedIn)

  return (
    <div
      className="flex justify-between p-5 text-white font-bold bg-[#669595] text-3xl w-full
    "
    >
      <h1 className="italic">ContactBook</h1>
      {isLoggedIn && (
        <div>{user.name}'s contacts</div>
      )}
      <Navigation />
      {!isLoggedIn && <AuthNav />}
      {isLoggedIn && (
        <button
          onClick={() => dispatch(logout())}
          className="btn"
        >
          Logout
        </button>
      )}
    </div>
  )
}

export default AppBar

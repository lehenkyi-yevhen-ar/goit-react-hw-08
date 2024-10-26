import clsx from "clsx"
import s from "./Header.module.css"
import { NavLink } from "react-router-dom"
import {
  useDispatch,
  useSelector,
} from "react-redux"
import {
  selectIsLoggedIn,
  selectUser,
} from "../../redux/auth/selectors"
import { logout } from "../../redux/auth/operations"

const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink)
  }
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const isLoggedIn = useSelector(selectIsLoggedIn)

  return (
    <div
      className="flex justify-between p-5 text-white font-bold bg-[#669595] text-3xl w-full
    "
    >
      
      {isLoggedIn && (
        <div>Welcome, {user.name}</div>
      )}
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      <NavLink
        className={buildLinkClass}
        to="/contacts"
      >
        Contacts
      </NavLink>
      {!isLoggedIn && (
        <>
          <NavLink
            className={buildLinkClass}
            to="/login"
          >
            Login
          </NavLink>
          <NavLink
            className={buildLinkClass}
            to="/register"
          >
            Register
          </NavLink>
        </>
      )}
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

export default Header

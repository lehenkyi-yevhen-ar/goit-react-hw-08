import clsx from "clsx"
import { NavLink } from "react-router-dom"
import s from "./header.module.css"

const AuthNav = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink)
  }
  return (
    <div className="flex gap-14">
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
        Sign Up
      </NavLink>
    </div>
  )
}

export default AuthNav

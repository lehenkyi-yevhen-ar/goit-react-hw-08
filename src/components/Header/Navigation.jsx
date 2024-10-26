import { clsx } from "clsx"
import { NavLink } from "react-router-dom"
import s from "./Header.module.css"

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink)
  }
  return (
    <div className="flex gap-14">
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      <NavLink
        className={buildLinkClass}
        to="/contacts"
      >
        Contacts
      </NavLink>
    </div>
  )
}

export default Navigation

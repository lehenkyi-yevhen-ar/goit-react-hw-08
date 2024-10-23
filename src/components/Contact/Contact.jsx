import { FaPhoneAlt } from "react-icons/fa"
import { ImPacman } from "react-icons/im"
import { useDispatch } from "react-redux"
import s from "./Contact.module.css"
import { deleteContacts } from "../../redux/contactsOps"

const Contact = ({ contact }) => {
  const dispatch = useDispatch()
  return (
    <div className={s.card}>
      <div className={s.info}>
        <div className={s.inInfo}>
          <ImPacman />
          <p>{contact.name}</p>
        </div>
        <div className={s.inInfo}>
          <FaPhoneAlt />
          <p>{contact.phone}</p>
        </div>
      </div>
      <button
        onClick={() =>
          dispatch(deleteContacts(contact.id))
        }
        className={s.btn}
      >
        Delete
      </button>
    </div>
  )
}

export default Contact

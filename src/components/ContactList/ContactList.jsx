import { useSelector } from "react-redux"
import {
  selectFilteredContacts,
  selectIsError,
  selectIsLoading,
} from "../../redux/contacts/slice"
import s from "./ContactList.module.css"
import Contact from "../Contact/Contact"

const ContactList = () => {
  const filteredContacts = useSelector(
    selectFilteredContacts
  )

  const isLoading = useSelector(selectIsLoading)
  const isError = useSelector(selectIsError)

  return (
    <div>
      {isLoading && (
        <h2>Loading, please wait...</h2>
      )}
      {isError && (
        <h2>
          Something went wrong, try again...
        </h2>
      )}
      <ul className={s.list}>
        {filteredContacts.map((contact) => (
          <li key={contact.id} className={s.card}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContactList

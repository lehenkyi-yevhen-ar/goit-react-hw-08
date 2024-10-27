import {
  useDispatch,
  useSelector,
} from "react-redux"
import { selectFilteredContacts } from "../../redux/contacts/slice"
import Contact from "../Contact/Contact"
import { useEffect } from "react"
import { fetchContacts } from "../../redux/contacts/operations"
import {
  selectIsError,
  selectIsLoading,
} from "../../redux/contacts/selectors"

const ContactList = () => {
  const filteredContacts = useSelector(
    selectFilteredContacts
  )
  const isLoading = useSelector(selectIsLoading)
  const isError = useSelector(selectIsError)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <div className="ml-9">
      {isLoading && (
        <h2>Loading, please wait...</h2>
      )}
      {isError && (
        <h2>
          Something went wrong, try again...
        </h2>
      )}
      <ul className="flex gap-2 flex-wrap mt-3">
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContactList

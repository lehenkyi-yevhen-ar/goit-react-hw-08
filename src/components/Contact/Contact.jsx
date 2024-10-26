import { FaPhoneAlt } from "react-icons/fa"
import { ImPacman } from "react-icons/im"
import { useDispatch } from "react-redux"
import { deleteContacts } from "../../redux/contacts/operations"

const Contact = ({ contact }) => {
  const dispatch = useDispatch()
  return (
    <div className='flex border border-black p-4 rounded-md min-w-64'>
      <div className='flex flex-col mr-7 gap-3'>
        <div className='flex items-center gap-3'>
          <ImPacman />
          <p>{contact.name}</p>
        </div>
        <div className='flex items-center gap-3'>
          <FaPhoneAlt />
          <p>{contact.number}</p>
        </div>
      </div>
      <button
        onClick={() =>
          dispatch(deleteContacts(contact.id))
        }
        className='flex h-fit p-2 text-white self-center ml-auto rounded outline-none bg-themeColor'
      >
        Delete
      </button>
    </div>
  )
}

export default Contact

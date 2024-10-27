import { FaPhoneAlt } from "react-icons/fa"
import { ImPacman } from "react-icons/im"
import ContactModal from "./ContactModal"

const Contact = ({ contact }) => {
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
      <div className="self-center ml-auto"><ContactModal contact={contact}/></div>

    </div>
  )
}

export default Contact

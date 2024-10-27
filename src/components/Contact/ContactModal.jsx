import { useDispatch } from "react-redux"
import { deleteContacts } from "../../redux/contacts/operations"
import toast from "react-hot-toast"

const ContactModal = ( {contact} ) => {
    const dispatch = useDispatch()
  return (
    <div>
      <button
       className='flex h-fit p-2 text-white self-center ml-auto rounded outline-none bg-themeColor'
        onClick={() =>
          document
            .getElementById("my_modal_4")
            .showModal()
        }
      >
        Delete
      </button>

      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">
            Are you sure you want to delete?
          </h3>
          <p className="py-4">
            Click Yes to delete or Close to cancel
          </p>
          <div className="modal-action flex items-center">
            <form method="dialog">
              <button className="btn">
                Close
              </button>
            </form>
            <button className='btn text-white self-center ml-auto outline-none bg-themeColor pl-5 pr-5'  onClick={() =>
          dispatch(deleteContacts(contact.id)).then(toast('Contact is removed!'))
        }>Yes</button>
          </div>
          
        </div>
      </dialog>
      
    </div>
  )
}

export default ContactModal

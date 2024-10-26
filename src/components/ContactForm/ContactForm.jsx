import { useDispatch } from "react-redux"
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
} from "formik"
import { validationSchema } from "../../helpers/validationSchema"
import { addContacts } from "../../redux/contacts/operations"

const ContactForm = () => {
  const initialValues = { name: "", number: "" }
  const dispatch = useDispatch()

  const onSubmit = (values, options) => {
    const newContact = {
      id: [],
      name: values.name,
      number: values.number,
    }

    dispatch(addContacts(newContact))
    options.resetForm()
  }
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="m-10 border border-black w-fit p-4 mb-4">
          <div className="flex flex-col gap-2 w-fit">
            <h3 className="text-center font-semibold">
              Add new contacts here
            </h3>
            <Field
              className="border border-gray pt-1 pb-1 pl-2 rounded-md"
              type="text"
              name="name"
              placeholder="Enter name"
            />
            <ErrorMessage
              name="name"
              component="div"
              style={{ color: "red" }}
            />
            <Field
              className="border border-gray pt-1 pb-1 pl-2 rounded-md"
              type="tel"
              name="number"
              placeholder="Enter phone number"
            />
            <ErrorMessage
              name="number"
              component="div"
              style={{ color: "red" }}
            />
          </div>
          <button
            type="submit"
            className="mt-2 p-2 bg-themeColor text-white rounded-lg"
          >
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default ContactForm

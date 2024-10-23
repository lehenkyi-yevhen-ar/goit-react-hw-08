import { useDispatch } from "react-redux"
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
} from "formik"
import s from "./ContactForm.module.css"
import { validationSchema } from "../../helpers/validationSchema"
import { addContacts } from "../../redux/contactsOps"

const ContactForm = () => {
  const initialValues = { name: "", phone: "" }
  const dispatch = useDispatch()

  const onSubmit = (values, options) => {
    const newContact = {
      id: [],
      name: values.name,
      phone: values.phone,
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
        <Form className={s.form}>
          <div className={s.fields}>
            <Field
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
              type="text"
              name="phone"
              placeholder="Enter phone number"
            />
            <ErrorMessage
              name="phone"
              component="div"
              style={{ color: "red" }}
            />
          </div>
          <button type="submit" className={s.btn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default ContactForm

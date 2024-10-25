import { Field, Form, Formik } from "formik"
import {
  useDispatch,
  useSelector,
} from "react-redux"
import { login } from "../redux/auth/operations"
import { useNavigate } from "react-router"
import { selectIsLoggedIn } from "../redux/auth/selectors"
import { useEffect } from "react"

const LoginPage = () => {
  const dispatch = useDispatch()

  const initialValues = {
    email: "",
    password: "",
  }
  const navigate = useNavigate()
  const isLoggedIn = useSelector(selectIsLoggedIn)

  const handleSubmit = (values, options) => {
    console.log(values)
    dispatch(login(values))
    options.resetForm()
  }

  useEffect(() => {
    isLoggedIn && navigate("/")
  }, [isLoggedIn, navigate])

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">
            Login now!
          </h1>
          <p className="py-6">
            Please type email and password to
            login to your contact book
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <Formik
            onSubmit={handleSubmit}
            initialValues={initialValues}
          >
            <Form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Email
                  </span>
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Password
                  </span>
                </label>
                <Field
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-primary bg-teal-600 hover:bg-teal-700 border-none outline-none text-emerald-50"
                >
                  Sign up
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

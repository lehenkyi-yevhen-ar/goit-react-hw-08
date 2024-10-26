// import { useDispatch } from "react-redux"
// import { useEffect } from "react"
// import { fetchContacts } from "./redux/contacts/operations"
import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import HomePage from "./pages/HomePage"
import NotFound from "./pages/NotFoundPage"
import ContactsPage from "./pages/ContactsPage"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import { Toaster } from "react-hot-toast"
import { refreshUser } from "./redux/auth/operations"
import { useEffect } from "react"
import {
  useDispatch,
  useSelector,
} from "react-redux"
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "./redux/auth/selectors"
import { PrivateRoute } from "./components/PrivateRoute"
import { RestrictedRoute } from "./components/RestrictedRoute"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  const isRefreshing = useSelector(
    selectIsRefreshing
  )
  const isLoggedIn = useSelector(selectIsLoggedIn)

  return isRefreshing ? null : (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <RestrictedRoute
                comp={<HomePage />}
                redTo="/contacts"
              />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute
                comp={<ContactsPage />}
                redTo="/login"
              />
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRoute
                comp={<RegisterPage />}
                redTo="/contacts"
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute
                comp={<LoginPage />}
                redTo="/contacts"
              />
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App

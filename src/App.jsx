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

const App = () => {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchContacts())
  // }, [dispatch])
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="contacts"
            element={<ContactsPage />}
          />
          <Route
            path="register"
            element={<RegisterPage />}
          />
          <Route
            path="login"
            element={<LoginPage />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App

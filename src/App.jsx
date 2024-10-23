// import { useDispatch } from "react-redux"
// import { useEffect } from "react"
// import { fetchContacts } from "./redux/contacts/operations"
import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import HomePage from "./pages/HomePage"
import NotFound from "./pages/NotFound"

const App = () => {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchContacts())
  // }, [dispatch])
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={<HomePage />}
          />
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  )
}

export default App

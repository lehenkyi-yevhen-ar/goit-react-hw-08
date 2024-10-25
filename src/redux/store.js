import { configureStore } from "@reduxjs/toolkit"
import { contactsReducer } from "./contacts/slice"
import { filterReducer } from "./filters/slice"
import { authSlice } from "./auth/slice"

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authSlice,
  },
})

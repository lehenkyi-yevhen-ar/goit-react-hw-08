import {
  createSelector,
  createSlice,
  isAnyOf,
} from "@reduxjs/toolkit"
import {
  addContacts,
  deleteContacts,
  fetchContacts,
} from "../contacts/operations"
import { logout } from "../auth/operations"
import { selectContacts } from "./selectors"
import { selectFilterStr } from "../filters/selectors"

const initialState = {
  items: [],
  isLoading: false,
  isError: false,
}

const slice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchContacts.fulfilled,
        (state, action) => {
          state.items = action.payload
        }
      )
      .addCase(
        deleteContacts.fulfilled,
        (state, action) => {
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          )
        }
      )
      .addCase(
        addContacts.fulfilled,
        (state, action) => {
          state.items.push(action.payload)
        }
      )
      .addCase(
        logout.fulfilled,
        () => initialState
      )

      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          deleteContacts.pending,
          addContacts.pending
        ),
        (state) => {
          state.isLoading = true
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          deleteContacts.fulfilled,
          addContacts.fulfilled
        ),
        (state) => {
          state.isLoading = false
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          deleteContacts.rejected,
          addContacts.rejected
        ),
        (state, action) => {
          state.isLoading = false
          state.isError = action.payload
        }
      )
  },
})

export const contactsReducer = slice.reducer

export const selectFilteredContacts =
  createSelector(
    [selectContacts, selectFilterStr],
    (contacts, filter) => {
      const generalFilter = filter
        .toLowerCase()
        .trim()

      const filteredContacts = contacts.filter(
        (contact) => {
          const filteredName = contact.name
            .toLowerCase()
            .trim()
          const filteredNumber =
            contact.number.trim()

          return (
            filteredName.includes(
              generalFilter
            ) ||
            filteredNumber.includes(generalFilter)
          )
        }
      )
      return filteredContacts
    }
  )

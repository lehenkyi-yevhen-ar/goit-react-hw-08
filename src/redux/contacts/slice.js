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
import { selectFilterStr } from "../filters/slice"
import { logout } from "../auth/operations"

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
          state.isError = false
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

export const selectContacts = (state) =>
  state.contacts.items

export const selectIsLoading = (state) =>
  state.contacts.isLoading

export const selectIsError = (state) =>
  state.contacts.isError

export const selectFilteredContacts =
  createSelector(
    [selectContacts, selectFilterStr],
    (contacts, filter) => {
      const filteredContacts = contacts.filter(
        (contact) =>
          contact.name
            .toLowerCase()
            .trim()
            .includes(filter.toLowerCase().trim())
      )
      return filteredContacts
    }
  )

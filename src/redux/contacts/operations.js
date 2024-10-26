import { createAsyncThunk } from "@reduxjs/toolkit"
import { goItApi } from "../../services/api"

export const fetchContacts = createAsyncThunk(
  "fetchData",
  async (_, thunkApi) => {
    try {
      const { data } = await goItApi.get(
        "/contacts"
      )
      return data
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.message
      )
    }
  }
)

export const deleteContacts = createAsyncThunk(
  "deleteData",
  async (id, thunkApi) => {
    try {
      const { data } = await goItApi.delete(
        `/contacts/${id}`
      )
      return data.id
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.message
      )
    }
  }
)

export const addContacts = createAsyncThunk(
  "addData",
  async (body, thunkApi) => {
    try {
      const { data } = await goItApi.post(
        "/contacts",
        body
      )
      return data
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.message
      )
    }
  }
)

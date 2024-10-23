import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

axios.defaults.baseURL =
  "https://671292a96c5f5ced66240728.mockapi.io"

export const fetchContacts = createAsyncThunk(
  "fetchData",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(
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
      const { data } = await axios.delete(
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
      const { data } = await axios.post(
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

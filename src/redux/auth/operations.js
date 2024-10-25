import { createAsyncThunk } from "@reduxjs/toolkit"
import { goItApi } from "../../services/api"

export const register = createAsyncThunk(
  "register",
  async (cred, thunkApi) => {
    try {
      const { data } = await goItApi.post(
        "users/signup",
        cred
      )
      return data
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.message
      )
    }
  }
)

export const login = createAsyncThunk(
  "login",
  async (cred, thunkApi) => {
    try {
      const { data } = await goItApi.post(
        "users/login",
        cred
      )
      return data
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.message
      )
    }
  }
)

export const logout = createAsyncThunk(
  "logout",
  async (_, thunkApi) => {
    try {
      await goItApi.post("users/logout")
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.message
      )
    }
  }
)

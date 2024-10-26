import { createAsyncThunk } from "@reduxjs/toolkit"
import { goItApi } from "../../services/api"

const setAuthHeader = (token) => {
  goItApi.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const register = createAsyncThunk(
  "register",
  async (cred, thunkApi) => {
    try {
      const { data } = await goItApi.post(
        "users/signup",
        cred
      )
      setAuthHeader(data.token)
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
      setAuthHeader(data.token)
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

export const refreshUser = createAsyncThunk(
  "refresh",
  async (_, thunkApi) => {
    try {
      const savedToken =
        thunkApi.getState().auth.token

      if (!savedToken) {
        return thunkApi.rejectWithValue(
          "Token does not exist"
        )
      }
      setAuthHeader(savedToken)
      const { data } = await goItApi.get(
        "users/current"
      )
      return data
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.message
      )
    }
  }
)

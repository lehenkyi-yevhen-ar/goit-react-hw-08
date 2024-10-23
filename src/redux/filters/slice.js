import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  filterStr: "",
}

const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filterStr = action.payload
    },
  },
})

export const filterReducer = slice.reducer
export const { changeFilter } = slice.actions
export const selectFilterStr = (state) =>
  state.filter.filterStr

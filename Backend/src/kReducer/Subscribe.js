import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "subscribe",
  initialState: {
    list: [],
  },

  reducers: {
    setList: (state, action) => {
      state.list = [...action.payload.data];
    },
    addNew: (state, action) => {
      console.log(action.payload);
      state.list.push(action.payload);
    },
  },
});

export const actions = slice.actions;

export default slice.reducer;

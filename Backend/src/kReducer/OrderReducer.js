import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "order",
  initialState: {
    list: [],
    isLoading: false,
    error: false,
  },

  reducers: {
    // setList: (state, action) => {
    //   state.list = {
    //     ...state.account,
    //     ...action.payload,
    //   };
    // },
    setList: (state, action) => {
      state.list = [...action.payload.data];
    },
    // updateOrder: (state, action) => {
    //   return [...state, action.payload.data];
    // },
    // removeOrder: (state, action) => {
    //   state.list = state.list.filter((item) => item.id != action.payload.id);
    // },
    // setLoginError: (state, action) => {
    //   state.loginError = action.payload;
    // },
  },
});

export const actions = slice.actions;

export default slice.reducer;

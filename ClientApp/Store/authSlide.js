import {
  createAsyncThunk,
  // createEntityAdapter,
  // createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

export const Register = createAsyncThunk(
  "authReducer/register",
  async (registerModel, { getState }) => {
    const response = await axios.post("/user/Register", registerModel, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.data;
    return data;
  }
);

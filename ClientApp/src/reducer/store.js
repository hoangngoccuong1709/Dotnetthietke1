import { configureStore } from "@reduxjs/toolkit";
import ajaxCall from "../lib/ajax";
import user from "./user";
import app from "./app";
import logger from "redux-logger";
import thunk from "redux-thunk";
import cartReducer from "./cartReducer";
// import cartReducer from "./cartReducer";
const store = configureStore({
  reducer: {
    user,
    // rootReducer,
    cartReducer,
    app,
  },
  // middleware: [thunk, logger],
});
export default store;

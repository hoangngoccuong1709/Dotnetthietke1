import Subscribe from "./Subscribe";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import ajaxCall from "../lib/ajax";
import app from "./app";
import user from "./user";
import cartReducer from "./cartReducer";
// import cartReducer from "./cartReducer";
export default configureStore({
  reducer: {
    Subscribe,
    user,
    // rootReducer,
    cartReducer,
    app,
  },
  // middleware: [thunk, logger],
});

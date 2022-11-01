import { configureStore } from "@reduxjs/toolkit";
import ajaxCall from "../lib/ajax";
import user from "./user";
import app from "./app";
import Subscribe from "./Subscribe";
// import department from "./department";
import logger from "redux-logger";
import thunk from "redux-thunk";
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

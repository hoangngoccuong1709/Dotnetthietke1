import { configureStore } from "@reduxjs/toolkit";
import ajaxCall from "../lib/ajax";
import user from "./user";
import app from "./app";
<<<<<<< HEAD
import Subscribe from "./Subscribe";
// import department from "./department";

export default configureStore({
  reducer: {
    Subscribe,
    account,
=======
import logger from "redux-logger";
import thunk from "redux-thunk";
import cartReducer from "./cartReducer";
// import cartReducer from "./cartReducer";
const store = configureStore({
  reducer: {
    user,
    // rootReducer,
    cartReducer,
>>>>>>> 9969290af8bac9b02a92d771fc59d501a8cd81be
    app,
  },
  // middleware: [thunk, logger],
});
export default store;

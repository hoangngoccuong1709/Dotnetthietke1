import { configureStore } from "@reduxjs/toolkit";
import ajaxCall from "../lib/ajax";
import account from "./user";
import app from "./app";
import Subscribe from "./Subscribe";
// import department from "./department";

export default configureStore({
  reducer: {
    Subscribe,
    account,
    app,
  },
  middleware: (getDefaultMiddleware) => [ajaxCall, ...getDefaultMiddleware()],
});

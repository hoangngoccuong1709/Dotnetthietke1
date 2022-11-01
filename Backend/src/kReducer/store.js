import { configureStore } from "@reduxjs/toolkit";
import ajaxCall from "../lib/ajax";
import Subscribe from "./Subscribe";
import app from "./app";

export default configureStore({
  reducer: {
    Subscribe,
    app,
  },
  middleware: (getDefaultMiddleware) => [ajaxCall, ...getDefaultMiddleware()],
});

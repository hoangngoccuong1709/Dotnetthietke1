import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "./MenuReducer";
import ajaxCall from "../lib/ajax";

export default configureStore({
  reducer: {
    MenuReducer,
  },
  middleware: (getDefaultMiddleware) => [ajaxCall, ...getDefaultMiddleware()],
});

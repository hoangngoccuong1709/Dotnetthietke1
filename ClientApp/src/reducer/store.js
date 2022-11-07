import Subscribe from "./Subscribe";
import { configureStore } from "@reduxjs/toolkit";
import ajaxCall from "../lib/ajax";
import app from "./app";
import user from "./user";
import cartReducer from "./cartReducer";
import SubscribeBE from "./reducerBe/Subscribe";
import ConfigSmtp from "./reducerBe/ConfigSmtp";

export default configureStore({
  reducer: {
    ConfigSmtp,
    SubscribeBE,
    Subscribe,
    user,
    cartReducer,
    app,
  },

  middleware: (getDefaultMiddleware) => [ajaxCall, ...getDefaultMiddleware()],
});

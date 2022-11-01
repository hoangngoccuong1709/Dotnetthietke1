import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import Subscribe from "../reducer/Subscribe";

const rootReducer = combineReducers({
  cart: cartReducer,
  Subscribe: Subscribe,
});

export default rootReducer;

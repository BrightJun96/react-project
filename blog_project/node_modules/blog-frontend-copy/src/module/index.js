import { combineReducers } from "redux";
import inputReducer from "./input";
import registerReducer from "./register";
import { userReducer } from "./user";

const rootReducer = combineReducers({
  inputReducer,
  registerReducer,
  userReducer,
}); // reducer를 통합

export default rootReducer;

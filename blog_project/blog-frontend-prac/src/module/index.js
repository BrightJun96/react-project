import { combineReducers } from "redux";
import inputReducer from "./auth";

const rootReducer = combineReducers({ inputReducer }); // reducer를 통합

export default rootReducer;

import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import user from "./user";
import write from "./write";
import { postReducer } from "./post";
import { postsReducer } from "./posts";
import textReducer from "./auth/text";
import authReducer from "./auth/auth";

const rootReducer = combineReducers({
  authReducer,
  textReducer,
  user,
  write,
  postReducer,
  postsReducer,
});
export function* rootSaga() {
  yield all([]);
}
export default rootReducer;

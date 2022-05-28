import { combineReducers } from "redux";
import loading from "./loading";
import { all } from "redux-saga/effects";
import user, { userSaga } from "./user";
import write, { writeSaga } from "./write";
import { postReducer, postSaga } from "./post";
import { postsReducer, postsSaga } from "./posts";
import textReducer from "./auth/text";
import authReducer, { authSaga } from "./auth/auth";

const rootReducer = combineReducers({
  authReducer,
  textReducer,
  loading,
  user,
  write,
  postReducer,
  postsReducer,
});
export function* rootSaga() {
  yield all([authSaga(), userSaga(), writeSaga(), postSaga(), postsSaga()]);
}
export default rootReducer;

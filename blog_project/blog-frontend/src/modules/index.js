import auth, { authSaga } from "./auth";
import { combineReducers } from "redux";
import loading from "./loading";
import { all } from "redux-saga/effects";
import user, { userSaga } from "./user";
const rootReducer = combineReducers({ auth, loading, user });

export function* rootSaga() {
  yield all([authSaga(), userSaga()]);
}
export default rootReducer;

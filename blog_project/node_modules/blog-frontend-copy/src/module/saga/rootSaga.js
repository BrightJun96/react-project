import { all } from "redux-saga/effects";
import { registerSaga } from "../register";
import { checkSaga } from "../user";

function* rootSaga() {
  yield all([registerSaga(), checkSaga()]);
}

export default rootSaga;

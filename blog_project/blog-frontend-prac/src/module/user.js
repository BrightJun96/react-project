/*
 user
*/

import { takeLatest } from "redux-saga/effects";
import { call } from "redux-saga/effects";
import * as authAPI from "./../lib/authAPI";
import { put } from "redux-saga/effects";

const CHECK = "user/CHECK";
const CHECK_SUCCESS = "user/CHECK_SUCCESS";
const CHECK_FAILURE = "user/CHECK_FAILURE";

export const checkUser = () => ({
  type: CHECK,
});

const initialState = { user: null, userError: null };

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_SUCCESS:
      return { ...state, user: action.payload };
    case CHECK_FAILURE:
      return { ...state, userError: action.payload };
    default:
      return state;
  }
};

function* checkAssistSaga(action) {
  try {
    const response = yield call(authAPI.check, action.payload);
    yield put({ type: CHECK_SUCCESS, payload: response.data });
  } catch (e) {
    yield put({ type: CHECK_FAILURE, payload: e });
  }
}

export function* checkSaga() {
  yield takeLatest(CHECK, checkAssistSaga);
}

/*
export const checkUserSuccess = (auth) => ({
  type: CHECK_SUCCESS,
  payload: auth,
});
export const checkUserFailure = (error) => ({
  type: CHECK_FAILURE,
  payload: error,
});

const initialState = {
  user: null,
  userError: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_SUCCESS:
      return { ...state, user: action.payload };

    case CHECK_FAILURE: {
      return { ...state, userError: action.payload };
    }
    default:
      return state;
  }
};

export default userReducer;
*/

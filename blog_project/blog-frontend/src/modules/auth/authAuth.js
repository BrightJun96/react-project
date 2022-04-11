import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import * as authAPI from "./../../lib/api/auth";

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] =
  createRequestActionTypes("auth/REGISTER");

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] =
  createRequestActionTypes("auth/LOGIN");

export const register = createAction(REGISTER, ({ username, password }) => ({
  username,
  password,
}));

export const login = createAction(LOGIN, ({ username, password }) => ({
  username,
  password,
}));

// 사가 생성 for 비동기 요청
const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);

export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
}

// 5개의 input state를 관리해줘야함. 그러기 위해 객체로서 정리
const initialState = {};

export const authAuthSelector = ({ authAuthReducer }) => ({
  auth: authAuthReducer.auth,
  authError: authAuthReducer.authError,
});

const authAuthReducer = handleActions(
  {
    [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [REGISTER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
  },
  initialState
);

export default authAuthReducer;

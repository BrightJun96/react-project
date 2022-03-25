import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import * as authAPI from "../lib/api/auth";
import createRequestSaga, {
  createRequestActionTypes,
} from "./../lib/createRequestSaga";

// action
const CHANGE_FIELD = "auth/CHANGE_FIELD";
const INITIALIZE_FORM = "auth/INITIALIZE_FORM";
const CHANGE_ERRORTEXT = "auth/CHANGE_ERRORTEXT";

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] =
  createRequestActionTypes("auth/REGISTER");

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] =
  createRequestActionTypes("auth/LOGIN");

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({ form, key, value })
);

export const changeErrorText = createAction(CHANGE_ERRORTEXT, (text) => text);

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

export const register = createAction(REGISTER, ({ username, password }) => ({
  // where can i use this?
  username,
  password,
}));

export const login = createAction(LOGIN, ({ username, password }) => ({
  // where can i use this?
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
const initialState = {
  errorText: "",
  register: {
    username: "",
    password: "",
    passwordConfirm: "",
  },
  login: { username: "", password: "" },
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value; // 예 : state.register.username을 바꾼다.
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      authError: null,
    }),
    [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth, //  auth : response.data
    }),
    [REGISTER_FAILURE]: (state, { payload: error }) => ({
      // payload.error from where
      ...state,
      authError: error, // error : e
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
    [CHANGE_ERRORTEXT]: (state, { payload: text }) => ({
      ...state,
      errorText: text,
    }),
  },
  initialState
);

export default auth;

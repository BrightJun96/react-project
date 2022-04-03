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
        // 같은 state logic으로 접근함으로써
        // 여러개의 input state를 한번에 관리해줄 수 있다.
        //( 여러개의 action, action function,reducer logic을 구성할 필요없음.)
        // 객체 프로퍼티를 대괄호로 접근(유동적으로 사용 가능)
        // form => "register" or  "login"
        // key => "username" or  "password" or "passwordConfirm"
        draft[form][key] = value;
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form], // "register" or "login"관련 input만 초기화해준다.
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

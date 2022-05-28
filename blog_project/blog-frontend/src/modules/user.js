// 사용자 상태를 담을 user redux module
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import { createAction } from "redux-actions";
import * as authAPI from "../lib/api/auth";
import { takeLatest } from "redux-saga/effects";
import { handleActions } from "redux-actions";
import { call } from "redux-saga/effects";

// 임시 로그인 상태
const TEMP_SET_USER = "user/TEMP_SET_USER";

// 로그인 체크
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] =
  createRequestActionTypes("user/CHECK");

// 로그아웃 액션

const LOGOUT = "user/LOGOUT";

// 액션생성함수
export const tempSetUser = createAction(TEMP_SET_USER, (user) => user);
export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);

const checkSaga = createRequestSaga(CHECK, authAPI.check);

function checkFailureSaga() {
  localStorage.removeItem("user");
}

function* logoutSaga() {
  try {
    yield call(authAPI.logout);
    localStorage.removeItem("user");
  } catch (e) {
    console.log(e);
  }
}

export function* userSaga() {
  yield takeLatest(CHECK, checkSaga); // check 함수가 실행되면 checkSaga실행
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}

const initialState = {
  user: null,
  checkError: null,
};

const user = handleActions(
  {
    [TEMP_SET_USER]: (state, { payload: user }) => ({ ...state, user }),
    [CHECK_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user, // server.state(ctx.state)에 담긴 user => 쿠키에 담긴 유저
      checkError: null,
    }),
    [CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      user: null,
      checkError: error,
    }),
    [LOGOUT]: (state) => ({ ...state, user: null }),
  },
  initialState
);

//seletor
export const userSelector = ({ user }) => ({
  user: user.user,
  error: user.checkError,
});

export default user;

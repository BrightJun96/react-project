/*
회원가입
*/

import { call, put, takeLatest } from "redux-saga/effects";
import * as authAPI from "./../lib/authAPI";
// 액션
const REGISTER = "auth/REGISTER";
const REGISTER_SUCCESS = "auth/REGISTER_SUCCESS";
const REGISTER_FAILURE = "auth/REGISTER_FAILURE";

const LOGIN = "user/LOGIN";
const LOGIN_SUCCESS = "user/LOGIN_SUCCESS";
const LOGIN_FAILURE = "user/LOGIN_FAILURE";

// 이 액션 생성 함수가 실행될 때마다 registerSaga가 실행될거임.
export const registerUser = ({ username, password }) => ({
  type: REGISTER,
  payload: { username, password },
});

export const loginUser = ({ username, password }) => ({
  type: LOGIN,
  payload: { username, password },
});

function* registerAssistSaga(action) {
  try {
    const response = yield call(authAPI.register, action.payload);
    yield put({ type: REGISTER_SUCCESS, payload: response.data });
  } catch (e) {
    yield put({ type: REGISTER_FAILURE, payload: e });
  }
}

function* loginAssistSage(action) {
  try {
    const response = yield call(authAPI.login, action.payload);
    yield put({ type: LOGIN_SUCCESS, payload: response.data });
  } catch (e) {
    yield put({ type: LOGIN_FAILURE, payload: e });
  }
}

// saga는 middleware라고 했다.
// 즉, 이 saga는 REGISTER이라는 액션이 디스패치됬을 때 다른 액션을 디스패치함과 동시에 비동기요청을 해준다.
// 이렇게 함으로써 success와 failure했을 때에 dispatch를 두번하지 않고 한 번에 처리해줄 수 있다.

export function* registerSaga() {
  yield takeLatest(REGISTER, registerAssistSaga);
  yield takeLatest(LOGIN, loginAssistSage);
}

const initialState = {
  auth: null,
  authError: null,
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return { ...state, auth: action.payload };
    case REGISTER_FAILURE:
      return { ...state, authError: action.payload };
    case LOGIN_SUCCESS:
      return { ...state, auth: action.payload };
    case LOGIN_FAILURE:
      return { ...state, authError: action.payload };

    default:
      return state;
  }
};

export default registerReducer;
/*


// 액션 생성 함수
export const registerUserSuccess = (data) => ({
  type: REGISTER_SUCCESS,
  payload: data,
});

export const registerUserFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: error,
});

const initialState = {
  auth: null,
  authError: null,
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return { ...state, auth: action.payload };

    case REGISTER_FAILURE: {
      return { ...state, authError: action.payload };
    }
    default:
      return state;
  }
};

export default registerReducer;
*/

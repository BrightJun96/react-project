import { takeLatest, call, put } from "redux-saga/effects";
import { read } from "./../lib/api/write";

const READ_POST = "post/READ_POST";
const READ_POST_SUCCESS = "post/READ_POST_SUCCESS";
const READ_POST_FAILURE = "post/READ_POST_FAILURE";

const UNLOAD_POST = "post/UNLOAD_POST";

export const readPost = (id) => ({ type: READ_POST, payload: id });
export const unloadPost = () => ({ type: UNLOAD_POST });

function* readPostSaga(action) {
  try {
    const response = yield call(read, action.payload);
    console.log(response);
    yield put({
      type: READ_POST_SUCCESS,
      payload: response.data,
      meta: response,
    });
  } catch (e) {
    console.log(e);
    yield put({ type: READ_POST_FAILURE, payload: e });
  }
}

export function* postSaga() {
  yield takeLatest(READ_POST, readPostSaga);
}

const initialState = {
  post: null,
  error: null,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_POST_SUCCESS:
      return {
        ...state,
        post: action.payload,
      };

    case READ_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case UNLOAD_POST:
      return initialState;

    default:
      return state;
  }
};

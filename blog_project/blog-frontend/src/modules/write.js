// write state 관리
import * as writeAPI from "./../lib/api/write";
import { takeLatest } from "redux-saga/effects";
import { call, put } from "redux-saga/effects";
import * as postAPI from "./../lib/api/post";

// 두 개의 state관리해주고 있음.
// 하나는 태그 input state이고
// 하나는 tag들이 들어간 state임.

const CHANGE_TAGTEXT = "write/CHANGE_TEXT";
const CHANGE_TAGS = "write/CHANGE_TAGS";
const INIT_TAGTEXT = "write/INIT_TEXT";

const CHANGE_TITLE = "write/CHANGE_TITLE";
const CHANGE_BODY = "write/CHANGE_BODY";

const INIT_ENTIRE = "write/INIT_ENTIRE";
const WRITE = "write/WRITE";
const WRITE_FAILURE = "write/WRITE_FAILURE";
const WRITE_SUCCESS = "write/WRITE_SUCCESS";

const SET_ORIGINAL_POST = "write/SET_ORIGINAL_POST";

const UPDATE_POST = "write/UPDATE_POST";
const UPDATE_POST_SUCCESS = "write/UPDATE_POST_SUCCESS";
const UPDATE_POST_FAILURE = "write/UPDATE_POST_FAILURE";

export const updatePost = ({ title, body, tags, id }) => ({
  type: UPDATE_POST,
  payload: { title, body, tags, id },
});

export const setOriginalPost = (post) => ({
  type: SET_ORIGINAL_POST,
  payload: post,
});

export const onWrite = ({ title, body, tags }) => ({
  type: WRITE,
  payload: { title, body, tags },
});

function* createWriteSaga(action) {
  try {
    const response = yield call(writeAPI.write, action.payload);
    yield put({ type: WRITE_SUCCESS, payload: response.data });
  } catch (e) {
    yield put({ type: WRITE_FAILURE, payload: e });
  }
}

function* updatePostSaga(action) {
  try {
    const response = yield call(postAPI.updatePost, action.payload);
    yield put({ type: WRITE_SUCCESS, payload: response.data, meta: response });
  } catch (e) {
    console.log(e);
    yield put({ type: WRITE_FAILURE, payload: e });
  }
}

export const writeSaga = function* () {
  yield takeLatest(WRITE, createWriteSaga);
  yield takeLatest(UPDATE_POST, updatePostSaga);
};
/*
thunk
export const onWrite =
  ({ title, body, tags }) =>
  async (dispatch) => {
    try {
      const response = await writeAPI.write({ title, body, tags });
      dispatch({ type: WRITE_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({ type: WRITE_FAILURE, payload: e });
    }
  };
*/
export const changeTagText = (text) => ({
  type: CHANGE_TAGTEXT,
  payload: text,
});

export const changeTags = (tags) => ({ type: CHANGE_TAGS, payload: tags });

export const changeTitle = (text) => ({ type: CHANGE_TITLE, payload: text });

export const changeBody = (text) => ({ type: CHANGE_BODY, payload: text });

export const initText = () => ({ type: INIT_TAGTEXT });

export const initEntire = () => ({ type: INIT_ENTIRE });

const initialState = {
  tagText: "",
  tags: [],
  title: "",
  body: "",
  error: undefined,
  response: "",
  originalPostId: "",
};

const write = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TAGTEXT:
      return { ...state, tagText: action.payload };
    case CHANGE_TAGS:
      return { ...state, tags: action.payload };

    case CHANGE_TITLE:
      return { ...state, title: action.payload };
    case CHANGE_BODY:
      return { ...state, body: action.payload };

    case INIT_TAGTEXT:
      return { ...state, tagText: "" };

    case INIT_ENTIRE:
      return initialState;

    case WRITE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case WRITE_SUCCESS:
      return {
        ...state,
        response: action.payload,
      };

    case SET_ORIGINAL_POST:
      return {
        ...state,
        title: action.payload.title,
        body: action.payload.body,
        tags: action.payload.tags,
        originalPostId: action.payload._id,
      };

    case UPDATE_POST_SUCCESS:
      return {
        ...state,
        post: action.payload,
      };

    case UPDATE_POST_FAILURE:
      return {
        ...state,
        postError: action.payload,
      };
    default:
      return state;
  }
};

export default write;

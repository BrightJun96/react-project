import { takeLatest, call, put } from "redux-saga/effects";
import * as postAPI from "../lib/api/post";

const LIST_POSTS = "posts/LIST_POSTS";
const LIST_POSTS_SUCCESS = "posts/LIST_POSTS_SUCCESS";
const LIST_POSTS_FAILURE = "posts/LIST_POSTS_FAILURE";

export const listPost = ({ tag, username, page }) => ({
  type: LIST_POSTS,
  payload: { tag, username, page },
});
function* listPostsSaga(action) {
  try {
    const response = yield call(postAPI.listPosts, action.payload);
    yield put({
      type: LIST_POSTS_SUCCESS,
      payload: response.data,
      meta: response,
    });
  } catch (e) {
    put({ type: LIST_POSTS_FAILURE, payload: e });
  }
}

export function* postsSaga() {
  yield takeLatest(LIST_POSTS, listPostsSaga);
}

const initialState = {
  posts: null,
  error: null,
  lastPage: 1,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        lastPage: parseInt(action.meta.headers["last-page"], 10),
      };
    case LIST_POSTS_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

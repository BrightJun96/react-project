import * as postAPI from "../lib/api/post";
import createActionTypes from "./../lib/createActionTypes";
import createThunk from "./../lib/createThunk";

const [LIST_POSTS, LIST_POSTS_SUCCESS, LIST_POSTS_FAILURE] =
  createActionTypes("posts/LIST_POSTS");

export const getListThunk = ({ page, username, tag }) =>
  createThunk(LIST_POSTS, postAPI.listQueryPosts, { page, username, tag });

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

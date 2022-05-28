import { takeLatest, call, put } from "redux-saga/effects";
import * as postAPI from "./../lib/api/post";
import createActionTypes from "./../lib/createActionTypes";
import createThunk from "./../lib/createThunk";

const [READ_POST, READ_POST_SUCCESS, READ_POST_FAILURE] =
  createActionTypes("post/READ_POST");

const UNLOAD_POST = "post/UNLOAD_POST";

export const unloadPost = () => ({ type: UNLOAD_POST });

export const readThunk = (id) => createThunk(READ_POST, postAPI.readPost, id);

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

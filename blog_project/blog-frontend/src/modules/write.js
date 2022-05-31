// write state 관리

import produce from "immer";
import { handleActions } from "redux-actions";
import createThunk from "../lib/createThunk";
import * as postAPI from "./../lib/api/post";
import createActionTypes from "./../lib/createActionTypes";

// 두 개의 state관리해주고 있음.
// 하나는 태그 input state이고
// 하나는 tag들이 들어간 state임.

const CHANGE_TAGTEXT = "write/CHANGE_TEXT";
const CHANGE_TAGS = "write/CHANGE_TAGS";
const INIT_TAGTEXT = "write/INIT_TEXT";

const CHANGE_TITLE = "write/CHANGE_TITLE";
const CHANGE_BODY = "write/CHANGE_BODY";

const INIT_ENTIRE = "write/INIT_ENTIRE";

const [WRITE, WRITE_SUCCESS, WRITE_FAILURE] = createActionTypes("write/WRITE");
const [UPDATE_POST, UPDATE_POST_SUCCESS, UPDATE_POST_FAILURE] =
  createActionTypes("write/UPDATE_POST");

const SET_ORIGINAL_POST = "write/SET_ORIGINAL_POST";

export const writeThunk = ({ title, body, tags }) =>
  createThunk(WRITE, postAPI.writePost, { title, body, tags });

export const setOriginalPost = (post) => ({
  type: SET_ORIGINAL_POST,
  payload: post,
});

export const updateThunk = ({ id, title, body, tags }) =>
  createThunk(UPDATE_POST, postAPI.updatePost, { id, title, body, tags });

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

const write = handleActions(
  {
    [CHANGE_TAGTEXT]: (state, action) =>
      produce(state, (draft) => {
        draft.tagText = action.payload;
      }),
    [CHANGE_TAGS]: (state, action) =>
      produce(state, (draft) => {
        draft.tags = action.payload;
      }),
    [CHANGE_TITLE]: (state, action) =>
      produce(state, (draft) => {
        draft.title = action.payload;
      }),
    [CHANGE_BODY]: (state, action) =>
      produce(state, (draft) => {
        draft.body = action.payload;
      }),
    [INIT_TAGTEXT]: (state, action) =>
      produce(state, (draft) => {
        draft.tagText = action.payload;
      }),
    [INIT_ENTIRE]: (state) => (state = initialState),
    [WRITE_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.response = action.payload;
      }),

    [WRITE_FAILURE]: (state, action) =>
      produce(state, (draft) => {
        draft.error = action.payload;
      }),
    [SET_ORIGINAL_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.title = action.payload.title;
        draft.body = action.payload.body;
        draft.tags = action.payload.tags;
        draft.originalPostId = action.payload._id;
      }),
    [UPDATE_POST_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.response = action.payload;
      }),
    [UPDATE_POST_FAILURE]: (state, action) =>
      produce(state, (draft) => {
        draft.error = action.payload;
      }),
  },
  initialState
);
export default write;

export const writeSelector = ({ write }) => ({
  title: write.title,
  body: write.body,
  tagText: write.tagText,
  tags: write.tags,
  error: write.error,
  response: write.response,
  originalPostId: write.originalPostId,
});

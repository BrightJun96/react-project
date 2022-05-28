// write state 관리

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

export const updateThunk = ({ title, body, tags, id }) =>
  createThunk(UPDATE_POST, postAPI.updatePost, { title, body, tags, id });

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

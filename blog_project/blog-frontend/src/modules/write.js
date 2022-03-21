// write state 관리

// 두 개의 state관리해주고 있음.
// 하나는 태그 input state이고
// 하나는 tag들이 들어간 state임.

const CHANGE_TEXT = "write/CHANGE_TEXT";

const CHANGE_TAGTEXT = "write/CHANGE_TEXT";
const CHANGE_TAGS = "write/CHANGE_TAGS";
const INIT_TAGTEXT = "write/INIT_TEXT";

const CHANGE_TITLE = "write/CHANGE_TITLE";
const CHANGE_BODY = "write/CHANGE_BODY";

const INIT_ENTIRE = "write/INIT_ENTIRE";
export const changeTagText = (text) => ({
  type: CHANGE_TAGTEXT,
  payload: text,
});

export const changeTags = (tags) => ({ type: CHANGE_TAGS, payload: tags });

export const initText = () => ({ type: INIT_TAGTEXT });
const initialState = {
  tagText: "",
  tags: [],
  title: "",
  body: "",
};

export const initEntire = () => ({ type: INIT_ENTIRE });

export const changeTitle = (text) => ({ type: CHANGE_TITLE, payload: text });

export const changeBody = (text) => ({ type: CHANGE_BODY, payload: text });

export const changeText = (type, text) => ({
  type: CHANGE_TEXT,
  payload: { type, text },
});

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
    case CHANGE_TEXT:
      return {
        ...state,
        //tagtext
        [action.payload.type]: action.payload.text,
      };

    case INIT_TAGTEXT:
      return { ...state, tagText: "" };

    case INIT_ENTIRE:
      return {
        initialState,
      };
    default:
      return state;
  }
};

export default write;

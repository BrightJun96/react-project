/*
input
*/

//action
const USER_INPUT = "auth/LOGIN_INPUT";
const PASSWORD_INPUT = " auth/PASSWORD_INPUT";
const PASSWORD_CONFIRM_INPUT = "auth/PASSWORD_CONFIRM_INPUT";
const INIT_INPUT = "auth/INIT_INPUT";
const ERROR_TEXT = "auth/ERROR_TEXT";

// action function
export const changeUserInput = (value) => ({
  type: USER_INPUT,
  payload: value,
});
export const changePasswordInput = (value) => ({
  type: PASSWORD_INPUT,
  payload: value,
});
export const changePasswordConfirmInput = (value) => ({
  type: PASSWORD_CONFIRM_INPUT,
  payload: value,
});

export const initInput = () => ({ type: INIT_INPUT });

export const changeErrorText = (text) => ({ type: ERROR_TEXT, payload: text });

const initialState = {
  username: "",
  password: "",
  passwordConfirm: "",
  errorText: "",
};

// reducer
function inputReducer(state = initialState, action) {
  switch (action.type) {
    case USER_INPUT: {
      return { ...state, username: action.payload }; // state값 재설정
    }
    case PASSWORD_INPUT: {
      return { ...state, password: action.payload };
    }
    case PASSWORD_CONFIRM_INPUT: {
      return { ...state, passwordConfirm: action.payload };
    }
    case INIT_INPUT: {
      return { ...state, username: "", password: "", passwordConfirm: "" };
    }
    case ERROR_TEXT: {
      return { ...state, errorText: action.payload };
    }

    default:
      return state;
  }
}

export default inputReducer;

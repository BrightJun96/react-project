/*
회원가입
*/

// 액션
const REGISTER_SUCCESS = "auth/REGISTER_SUCCESS";
const REGISTER_FAILURE = "auth/REGISTER_FAILURE";

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

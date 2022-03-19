/*
 user
*/
const CHECK_SUCCESS = "user/CHECK_SUCCESS";
const CHECK_FAILURE = "user/CHECK_FAILURE";

export const checkUserSuccess = (auth) => ({
  type: CHECK_SUCCESS,
  payload: auth,
});
export const checkUserFailure = (error) => ({
  type: CHECK_FAILURE,
  payload: error,
});

const initialState = {
  user: null,
  userError: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_SUCCESS:
      return { ...state, user: action.payload };

    case CHECK_FAILURE: {
      return { ...state, userError: action.payload };
    }
    default:
      return state;
  }
};

export default userReducer;

const createThunk = (type, api, payload) => async (dispatch) => {
  try {
    const response = await api(payload);
    console.log(response);
    dispatch({
      type: `${type}_SUCCESS`,
      payload: response.data,
      meta: response,
    });
  } catch (e) {
    console.log(e);
    dispatch({ type: `${type}_FAILURE`, payload: e });
  }
};

export default createThunk;

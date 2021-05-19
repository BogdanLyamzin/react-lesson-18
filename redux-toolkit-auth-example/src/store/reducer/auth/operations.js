import axios from "axios";

import actions from "./actions";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const registerUser = (body) => {
  return async (dispatch) => {
    dispatch(actions.registerRequest);
    try {
      const { data } = await axios.post("/register", body);
      dispatch(actions.registerSuccess(data));
    } catch (error) {
      dispatch(actions.registerError(error));
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch(actions.logoutRequest());
    try {
      await axios.post("/users/logout");
      dispatch(actions.logoutSuccess);
    } catch (error) {
      dispatch(actions.logoutError(error));
    }
  };
};

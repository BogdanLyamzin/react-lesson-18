import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import actions from "./actions";

const initialStateUser = {
  name: "",
  email: "",
  loading: false,
};

const initialStateToken = null;

const initialStateError = null;

const userReducer = createReducer(initialStateUser, {
  [actions.registerRequest]: (state) => ({ ...state, loading: true }),
  [actions.loginRequest]: (state) => ({ ...state, loading: true }),
  [actions.registerSuccess]: (state, { payload }) => ({
    ...payload.user,
    loading: false,
  }),
  [actions.loginSuccess]: (state, { payload }) => ({
    ...payload.user,
    loading: false,
  }),
  [actions.registerError]: (state) => ({ ...state, loading: false }),
  [actions.loginError]: (state) => ({ ...state, loading: false }),
  [actions.logoutRequest]: (state) => ({ ...state, loading: true }),
  [actions.logoutSuccess]: () => initialStateUser,
  [actions.logoutRequest]: (state) => ({ ...state, loading: false }),
});

const tokenReducer = createReducer(initialStateToken, {
  [actions.registerSuccess]: (state, { payload }) => payload.token,
  [actions.loginSuccess]: (state, { payload }) => payload.token,
  [actions.logoutSuccess]: () => initialStateToken,
});

const errorReducer = createReducer(initialStateError, {
  [actions.registerError]: (_, { payload }) => payload,
  [actions.registerSuccess]: () => initialStateError,
  [actions.loginError]: (_, { payload }) => payload,
  [actions.loginSuccess]: () => initialStateError,
  [actions.logoutError]: (_, { payload }) => payload,
  [actions.logoutSuccess]: () => initialStateError,
});

const reducer = combineReducers({
  user: userReducer,
  token: tokenReducer,
  error: errorReducer,
});

export default reducer;

import { createReducer } from '@reduxjs/toolkit';

import {fetchProductsRequest, fetchProductsSuccess, fetchProductsError} from "./actions";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const productsReducer = createReducer(initialState, {
  [fetchProductsRequest]: (state, _) => ({ ...state, loading: true }),
  [fetchProductsSuccess]: (state, {payload}) => ({ ...state, loading: false, items: payload, error: null }),
  [fetchProductsError]: (state, {payload}) => ({ ...state, loading: false, error: payload }),
});

export default productsReducer;

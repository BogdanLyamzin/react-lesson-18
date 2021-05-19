import { createReducer } from '@reduxjs/toolkit';

import {addToCart, removeFromCart} from "./actions";

const initialState = [];

const cartReducer = createReducer(initialState, {
  [addToCart]: (state, {payload}) => [...state, payload],
  [removeFromCart]: (state, {payload}) => state.filter((_, index) => index !== payload)
});

export default cartReducer;

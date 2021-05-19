import {createAction } from "@reduxjs/toolkit";

export const addToCart = createAction("cart/add");
export const removeFromCart = createAction("cart/remove");

const actions = { addToCart, removeFromCart };

export default actions;

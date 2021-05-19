import {createAction } from "@reduxjs/toolkit";

export const fetchProductsRequest = createAction("products/fetch_request");

export const fetchProductsSuccess = createAction("products/fetch_success");

export const fetchProductsError = createAction("products/fetch_error");

const actions = {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsError,
};

export default actions;

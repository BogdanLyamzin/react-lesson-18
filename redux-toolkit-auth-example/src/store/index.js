import { configureStore } from "@reduxjs/toolkit";

import { cartReducer, productsReducer, authReducer } from "./reducer";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    auth: authReducer,
  },
});

export default store;

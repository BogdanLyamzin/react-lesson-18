import axios from "axios";

import actions from "./actions";

export const fetchProducts = () => {
  const getPRoducts = async (dispatch) => {
    dispatch(actions.fetchProductsRequest());
    try {
      const { data } = await axios.get("http://localhost:4000/products");
      dispatch(actions.fetchProductsSuccess(data));
    } catch (error) {
      actions.fetchProductsError(error);
    }
  };

  return getPRoducts;
};

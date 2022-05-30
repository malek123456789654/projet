import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../types/Cart";
import axios from "axios";


const addToCart = (id, Qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/product/${id}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      imageUrl: data.imageUrl,
      prix: data.prix,
      countInStock: data.countInStock,
      Qty,
    },
  });
  localStorage.setItem("cart", JSON.stringify(getState().cart.Cart));
};

const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: id });
  localStorage.setItem("cart", JSON.stringify(getState().cart.Cart));
};

export { addToCart, removeFromCart };

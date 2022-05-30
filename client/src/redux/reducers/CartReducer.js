import * as actionTypes from "../types/Cart";


//const {
  //CART_ADD_ITEM,
  //CART_REMOVE_ITEM,
  ////CART_ADD_ITEM_FAIL,
//} = require("../Types/cart");



export const CartReducer = (state = {Cart:[]}, action) => {
  switch (action.type) {
    case actionTypes.CART_ADD_ITEM: {
      const item = action.payload;
      const existItem = state.Cart.find((x) => x.Product === item.product);
      if (existItem) {
        return { ...state, Cart: state.Cart.map((x) => x.product === existItem.product ? item : x), }
      } else {
        return { ...state, Cart: [...state.Cart, item], }
          
      }
    }
   case actionTypes.CART_REMOVE_ITEM:
        return {...state,Cart:state.Cart.filter((x)=>x.product !== action.payload)}

   default:
      return state;
}}




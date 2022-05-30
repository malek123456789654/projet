import { combineReducers } from "redux";
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from "redux-thunk";

import rootReducer from "./reducers";
import { CartReducer } from "./reducers/CartReducer";
import {
  getProductReducer,
  getProductDetails,
  creatProductReducer,
  deleteProductReducer,
} from "./reducers/ProductReducer";
const reducer = combineReducers({
  cart: CartReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  // reducer, //here is the error of the state manager, didn't know how to fix it
  composeEnhancer(applyMiddleware(thunk))
);
export default store;

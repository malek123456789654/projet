import { combineReducers } from "redux";
import { createStore, applyMiddleware, compose } from "redux";
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
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;

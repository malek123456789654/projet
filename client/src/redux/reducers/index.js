import { combineReducers } from "redux";
import authReducer from "./authReducers";
import alertReducers from "./alertReducers";

const rootReducer = combineReducers({ authReducer, alertReducers });
export default rootReducer;

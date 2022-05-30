import { REGISTER, FAIL, LOGIN, GET_CURRENT, LOGOUT } from "../types/authType";
const initialState = { client: {}, errors: [] };

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER:
      localStorage.setItem("token", payload.token);
      return { ...state, client: payload.client };

    case LOGIN: {
      localStorage.setItem("token", payload.token);
      return { ...state, client: payload.clientLogin };
    }
    case GET_CURRENT:
      return { ...state, client: payload.client, client: null };
    case FAIL:
      return { ...state, errors: payload, client: null };
    case LOGOUT:
      localStorage.removeItem("token");
      return { ...state, client: null };
    default:
      return state;
  }
};
export default authReducer;

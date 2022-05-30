import axios from "axios";
import { FAIL, GET_CURRENT, LOGIN, LOGOUT, REGISTER } from "../types/authType";
import { alert_errors } from "./alertAction";

export const RegisterUser = (data, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("/api/client/register", data);

    dispatch({ type: REGISTER, payload: res.data });
    navigate("/signin");
  } catch (error) {
    console.log(error);
  }
};

export const login = (data) => async (dispatch) => {
  try {
    const res = await axios.post("/api/client/log", data);
    console.log(res.data);
    dispatch({ type: LOGIN, payload: res.data });
  } catch (error) {
    // dispatch({ type: FAIL, payload: error.response.data });
    console.log(error);
  }
};
export const get_current = () => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get("/api/auth/current", config);
    dispatch({ type: GET_CURRENT, payload: res.data });
  } catch (error) {
    error.response.data.errors.forEach((el) => {
      dispatch(alert_errors(el.msg));
    });
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
export const logout = () => {
  return { type: LOGOUT };
};

import axios from "axios";
import {
  BASEURL,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
} from "./ActionTypes";

// REGISTER
export const Register = (formValues) => async (dispatch) => {
  dispatch({ type: REGISTER });
  try {
    await axios.post(`${BASEURL}register`, formValues).then((res) => {
      if (res.status === 201) {
        alert(res.data.message);
        dispatch({ type: REGISTER_SUCCESS });
      }
    });
  } catch (error) {
    dispatch({ type: REGISTER_FAIL });
  }
};

// LOGIN
export const Login = (formValues) => async (dispatch) => {
  dispatch({ type: LOGIN });
  try {
    await axios.post(`${BASEURL}login`, formValues).then((res) => {
      if (res.status === 200) {
        alert(res.data.message);
        localStorage.setItem("access_token", res.data.token);
        dispatch({ type: LOGIN_SUCCESS });
      }
    });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL });
  }
};

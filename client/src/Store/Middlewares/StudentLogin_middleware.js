import axios from "axios";
import { loginError, loginSuccess } from "../Actions/studentLogin-actions";

export const asyncLogin = newData => async dispatch => {
  try {
    const { data } = await axios.get("http://localhost:3002/api/student");
    if (!data.userData.length > 0) {
      dispatch(loginError("Cannot login, Please try again"));
    } else {
      const loginArr = data.userData.filter(
        item =>
          item.email === newData.email &&
          item.password === newData.password &&
          item.role === newData.role
      );

      if (loginArr.length > 0) {
        dispatch(loginSuccess(newData));
      } else {
        dispatch(loginError("invalid email or password"));
      }
    }
  } catch (err) {
    dispatch(loginError("Cannot login, please try again later"));
  }
};

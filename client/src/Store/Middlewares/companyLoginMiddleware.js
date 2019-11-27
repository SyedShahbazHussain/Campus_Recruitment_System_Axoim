import axios from "axios";
import {
  companyLoginError,
  companyLoginSuccess
} from "../Actions/companyLoginAction";

export const companyAsyncLogin = newData => async dispatch => {
  try {
    const { data } = await axios.get("http://localhost:3002/api/company");
    if (!data.userData.length > 0) {
      dispatch(companyLoginError("cannot login, please try agian later"));
    } else {
      const loginArr = data.userData.filter(
        item =>
          item.email === newData.email &&
          item.password === newData.password &&
          item.role === newData.role
      );
      if (loginArr.length > 0) {
        dispatch(companyLoginSuccess(newData));
      } else {
        dispatch(companyLoginError("invalid email or password"));
      }
    }
  } catch (error) {
    dispatch(companyLoginError("cannot login, please try again later"));
  }
};

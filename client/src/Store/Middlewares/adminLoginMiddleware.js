import axios from "axios";
import {
  adminLoginError,
  adminLoginSuccess
} from "../Actions/adminLoginAction";

export const adminAsyncLogin = newData => async dispatch => {
  try {
    const { data } = await axios.get("http://localhost:3002/api/admin");
    console.log(newData);
    console.log(data);
    if (data.success) {
      let newArr = data.userData.filter(
        item =>
          item.email === newData.email && item.password === newData.password
      );
      newArr.length
        ? dispatch(adminLoginSuccess(newData))
        : dispatch(adminLoginError("something went wrong"));
    }
  } catch (error) {
    dispatch(adminLoginError("cannot find please try again later"));
  }
};

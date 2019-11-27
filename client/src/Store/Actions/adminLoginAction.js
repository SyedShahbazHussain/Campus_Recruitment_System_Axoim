import * as actionTypes from "./Types";

export const adminLoginSuccess = adminUser => {
  return {
    type: actionTypes.ADMIN_LOGIN_SUCCESS,
    payload: {
      adminUser
    }
  };
};

export const adminLoginError = error => {
  return {
    type: actionTypes.ADMIN_LOGIN_ERROR,
    payload: {
      error
    }
  };
};

export const adminSignout = () => {
  return {
    type: actionTypes.ADMIN_SIGNOUT
  };
};

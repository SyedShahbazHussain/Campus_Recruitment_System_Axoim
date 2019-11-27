import * as actionTypes from "./Types";

export const companyLoginSuccess = companyUser => {
  return {
    type: actionTypes.COMPANY_LOGIN_SUCCESS,
    payload: {
      companyUser
    }
  };
};

export const companyLoginError = error => {
  return {
    type: actionTypes.COMPANY_LOGIN_ERROR,
    payload: {
      error
    }
  };
};

export const companySignout = () => {
  return {
    type: actionTypes.COMPANY_SIGNOUT
  };
};

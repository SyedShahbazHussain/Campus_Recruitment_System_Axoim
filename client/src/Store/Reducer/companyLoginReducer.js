const intialState = {
  isError: false,
  isSuccess: false,
  errorMessage: "",
  companyUser: null
};

export const companyLoginReducer = (state = intialState, action) => {
  switch (action.type) {
    case "COMPANY_LOGIN_SUCCESS":
      return {
        ...state,
        isError: false,
        isSuccess: true,
        errorMessage: "",
        companyUser: action.payload.companyUser
      };
    case "COMPANY_LOGIN_ERROR":
      return {
        ...state,
        isError: true,
        isSuccess: false,
        errorMessage: action.payload.error,
        companyUser: null
      };
    case "COMPANY_SIGNOUT":
      return {
        ...state,
        isError: false,
        isSuccess: false,
        errorMessage: "",
        companyUser: null
      };

    default:
      return state;
  }
};

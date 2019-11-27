const initialState = {
  isSuccess: false,
  isError: false,
  adminUser: null,
  errorMessage: ""
};

export const adminLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADMIN_LOGIN_SUCCESS":
      return {
        ...state,
        isSuccess: true,
        isError: false,
        adminUser: action.payload.adminUser,
        errorMessage: ""
      };
    case "ADMIN_LOGIN_ERROR":
      return {
        ...state,
        isSuccess: false,
        isError: true,
        adminUser: null,
        errorMessage: action.payload.error
      };
    case "ADMIN_SIGNOUT":
      return {
        ...state,
        isSuccess: false,
        isError: false,
        adminUser: null,
        errorMessage: ""
      };
    default:
      return state;
  }
};

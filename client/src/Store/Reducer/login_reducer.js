const initialState = {
  currentUser: null,
  isError: false,
  isSuccess: false,
  errorMessage: ""
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return {
        ...state,
        isError: true,
        currentUser: null,
        errorMessage: action.payload.data,
        isSuccess: false
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isSuccess: true,
        isError: false,
        currentUser: action.payload.currentUser,
        errorMessage: ""
      };
    case "STUDENT_SIGNOUT":
      return {
        ...state,
        currentUser: null,
        isError: false,
        isSuccess: false,
        errorMessage: ""
      };
    default:
      return state;
  }
};

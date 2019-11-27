import { combineReducers } from "redux";
import { loginReducer } from "./login_reducer";
import { companyLoginReducer } from "./companyLoginReducer";
import { adminLoginReducer } from "./adminLoginReducer";

export const rootReducer = combineReducers({
  loginReducer,
  companyLoginReducer,
  adminLoginReducer
});

import { combineReducers } from "redux";

import logInSlice from "./feature/auth/login";
import getWalletSlice from "./feature/payment/wallet";
import getScheduleSlice from "./feature/payment/getSchedule";
import postScheduleSlice from "./feature/payment/postSchedule";
import signUpSlice from "./feature/auth/signup";


const rootReducer = combineReducers({
    logIn : logInSlice.reducer,
    signUp: signUpSlice.reducer,
    getWallet: getWalletSlice.reducer,
    getSchedule: getScheduleSlice.reducer,
    postSchedule: postScheduleSlice.reducer,
  });
  
  export default rootReducer;
  
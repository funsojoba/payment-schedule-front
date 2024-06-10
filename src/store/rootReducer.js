import { combineReducers } from "redux";

import logInSlice from "./feature/auth/login";
import getWalletSlice from "./feature/payment/wallet";
import getScheduleSlice from "./feature/payment/getSchedule";




const rootReducer = combineReducers({
    logIn : logInSlice.reducer,
    getWallet: getWalletSlice.reducer,
    getSchedule: getScheduleSlice.reducer,
  });
  
  export default rootReducer;
  
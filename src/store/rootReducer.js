import { combineReducers } from "redux";

import logInSlice from "./feature/auth/login";
import getWalletSlice from "./feature/payment/wallet";




const rootReducer = combineReducers({
    logIn : logInSlice.reducer,
    getWallet: getWalletSlice.reducer,
  });
  
  export default rootReducer;
  
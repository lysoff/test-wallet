import { combineReducers } from "@reduxjs/toolkit";

import walletReducer from "./wallets/walletSlice";
import secretsReducer from "./secrets/secretSlice";
import balanceReducer from "./balances/balanceSlice";

export const rootReducer = combineReducers({
  wallets: walletReducer,
  balances: balanceReducer,
  secrets: secretsReducer,
});

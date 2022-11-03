import { combineReducers } from "@reduxjs/toolkit";

import walletReducer from "./wallets/walletSlice";
import secretsReducer from "./secrets/secretSlice";
import balanceReducer from "./balances/balanceSlice";
import networkReducer from "./network/networkSlice";
import appReducer from "./app/appSlice";

export const rootReducer = combineReducers({
  wallets: walletReducer,
  balances: balanceReducer,
  secrets: secretsReducer,
  network: networkReducer,
  app: appReducer,
});

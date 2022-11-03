import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "./redux/wallets/walletSlice";
import secretsReducer from "./redux/secrets/secretSlice";
import balanceReducer from "./redux/balances/balanceSlice";

export const store = configureStore({
  reducer: {
    wallets: walletReducer,
    balances: balanceReducer,
    secrets: secretsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

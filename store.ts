import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "./redux/wallets/walletSlice";
import secretsReducer from "./redux/secrets/secretSlice";

export const store = configureStore({
  reducer: {
    wallets: walletReducer,
    secrets: secretsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

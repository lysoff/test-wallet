import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface WalletState {
  list: any[];
}

const initialState: WalletState = {
  list: [],
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<{ name: string }>) => {
      state.list.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      state.list.splice(action.payload, 1);
    },
  },
});

export const { add, remove } = walletSlice.actions;

export default walletSlice.reducer;

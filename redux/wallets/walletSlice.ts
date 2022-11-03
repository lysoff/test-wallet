import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Wallet = {
  address: string;
  encryptedJSON: string;
  alias?: string;
};

export interface WalletState {
  addresses: any[];
  items: { [key: string]: Wallet };
}

const initialState: WalletState = {
  addresses: [],
  items: {},
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    addWallet: (state, action: PayloadAction<{ address: string; encryptedJSON: string; alias: string }>) => {
      const { address, encryptedJSON, alias } = action.payload;

      state.addresses.push(address);
      state.items[address] = {
        address,
        alias,
        encryptedJSON,
      };
    },
    removeWallet: (state, action: PayloadAction<string>) => {
      const [address] = state.addresses.splice(state.addresses.indexOf(action.payload), 1);

      delete state.items[address];
    },
  },
});

export const { addWallet, removeWallet } = walletSlice.actions;

export default walletSlice.reducer;

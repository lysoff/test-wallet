import { RootState } from "./../../store";
import { createSelector } from "@reduxjs/toolkit";

const selectWalletsSlice = (state: RootState) => state.wallets;

export const selectWallets = createSelector(selectWalletsSlice, (wallets) => {
  return wallets.addresses.map((address) => wallets.items[address]);
});

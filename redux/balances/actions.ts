import { createAsyncThunk } from "@reduxjs/toolkit";
import ethService from "../../services/ethers";

export type GetBalancePayload = {
  address: string;
};

export const getBalance: any = createAsyncThunk("balances/getBalance", async ({ address }: GetBalancePayload) => {
  const balance = await ethService.getBalanceAsync(address);
  return {
    address,
    balance,
  };
});

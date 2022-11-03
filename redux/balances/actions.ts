import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBalanceAsync } from "../../services/ethers";

export type GetBalancePayload = {
  address: string;
};

export const getBalance: any = createAsyncThunk("balances/getBalance", async ({ address }: GetBalancePayload) => {
  const balance = await getBalanceAsync(address);
  return {
    address,
    balance,
  };
});

import { createAsyncThunk } from "@reduxjs/toolkit";
import ethService from "../../services/ethers";

export type CreateWalletPayload = {
  password: string;
  alias: string;
};

export type CreateWalletReturn = {
  alias: string;
  address: string;
  encryptedJSON: string;
};

export const createWallet: any = createAsyncThunk(
  "wallets/createWallet",
  async ({ password, alias }: CreateWalletPayload) => {
    const { address, encryptedJSON } = await ethService.createWalletAsync(password);

    return {
      alias,
      address,
      encryptedJSON,
    };
  }
);

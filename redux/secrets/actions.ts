import { createAsyncThunk } from "@reduxjs/toolkit";
import { revealSecretsAsync } from "../../services/ethers";

export type RevealSecretsPayload = {
  address: string;
  encryptedJSON: string;
  password: string;
};

export const revealSecrets: any = createAsyncThunk(
  "secrets/reveal",
  async ({ encryptedJSON, password }: RevealSecretsPayload) => {
    const { privateKey, mnemonicPhrase } = await revealSecretsAsync(encryptedJSON, password);

    return { privateKey, mnemonicPhrase };
  }
);

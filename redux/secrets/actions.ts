import { createAsyncThunk } from "@reduxjs/toolkit";
import ethService from "../../services/ethService";

export type RevealSecretsPayload = {
  address: string;
  encryptedJSON: string;
  password: string;
};

export const revealSecrets: any = createAsyncThunk(
  "secrets/reveal",
  async ({ encryptedJSON, password }: RevealSecretsPayload) => {
    const { privateKey, mnemonicPhrase } = await ethService.revealSecretsAsync(encryptedJSON, password);

    return { privateKey, mnemonicPhrase };
  }
);

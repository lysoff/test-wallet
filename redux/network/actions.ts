import { createAsyncThunk } from "@reduxjs/toolkit";
import ethService from "../../services/ethService";

export type InitProviderPayload = {
  network: string;
};

export const initProvider: any = createAsyncThunk("network/initProvider", async ({ network }: InitProviderPayload) => {
  const detectedNetwork = await ethService.initProvider(network);
  return {
    network: detectedNetwork,
  };
});

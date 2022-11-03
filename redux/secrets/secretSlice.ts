import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { revealSecrets } from "./actions";

export interface SecretState {
  privateKey?: string;
  mnemonicPhrase?: string;
}

const initialState: SecretState = {
  privateKey: undefined,
  mnemonicPhrase: undefined,
};

export const secretSlice = createSlice({
  name: "secrets",
  initialState,
  reducers: {
    clearSecrets: (state) => {
      delete state.privateKey;
      delete state.mnemonicPhrase;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(revealSecrets.fulfilled, (state, action) => {
      const { privateKey, mnemonicPhrase } = action.payload;

      state.privateKey = privateKey;
      state.mnemonicPhrase = mnemonicPhrase;
    });
    builder.addCase(revealSecrets.rejected, () => {
      console.log("revealing rejected");
    });
  },
});

export const { clearSecrets } = secretSlice.actions;

export default secretSlice.reducer;

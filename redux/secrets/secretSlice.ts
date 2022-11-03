import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SecretState {
  privateKey?: string;
  mnemonicPhrase?: string;
}

const initialState: SecretState = {
  privateKey: undefined,
  mnemonicPhrase: undefined,
};

export const secretSlice = createSlice({
  name: "secret",
  initialState,
  reducers: {
    addSecrets: (state, action: PayloadAction<{ privateKey: string; mnemonicPhrase: string }>) => {
      const { privateKey, mnemonicPhrase } = action.payload;

      state.privateKey = privateKey;
      state.mnemonicPhrase = mnemonicPhrase;
    },
    clearSecrets: (state) => {
      delete state.privateKey;
      delete state.mnemonicPhrase;
    },
  },
});

export const { addSecrets, clearSecrets } = secretSlice.actions;

export default secretSlice.reducer;

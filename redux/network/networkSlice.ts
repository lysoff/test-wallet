import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SecretState {
  network: string;
}

const initialState: SecretState = {
  network: "",
};

export const secretSlice = createSlice({
  name: "network",
  initialState,
  reducers: {
    setNetwork: (state, action: PayloadAction<string>) => {
      state.network = action.payload;
    },
  },
});

export const { setNetwork } = secretSlice.actions;
export default secretSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { initProvider } from "../network/actions";

export interface SecretState {
  initialized: boolean;
}

const initialState: SecretState = {
  initialized: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(initProvider.fulfilled, (state) => {
      state.initialized = true;
    });
  },
});

export default appSlice.reducer;

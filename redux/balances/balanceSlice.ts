import { createSlice } from "@reduxjs/toolkit";
import { getBalance } from "./actions";

export interface SecretState {
  balances: { [key: string]: string };
}

const initialState: SecretState = {
  balances: {},
};

export const secretSlice = createSlice({
  name: "balances",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBalance.fulfilled, (state, action) => {
      const { address, balance } = action.payload;

      state.balances[address] = balance;
    });
    builder.addCase(getBalance.rejected, (state, action) => {
      console.log(action);
    });
  },
});

export default secretSlice.reducer;

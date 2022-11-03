import { configureStore } from "@reduxjs/toolkit";
import ethService from "../../services/ethService";
import { rootReducer } from "../../redux/rootReducer";
import { getBalance } from "./actions";

describe("balance actions", () => {
  const store = configureStore({ reducer: rootReducer });

  const ADDRESS = "0x00000000000000000000000000ADDRESS";
  const BALANCE = "0.0005";

  it("should decrypt the encryptedJSON with password and update `secrets` slice", async () => {
    const postSpy = jest.spyOn(ethService, "getBalanceAsync").mockResolvedValueOnce(BALANCE);

    await store.dispatch(getBalance({ address: ADDRESS }));

    expect(postSpy).toBeCalledWith(ADDRESS);

    const state = store.getState();

    expect(state.balances.balances).toHaveProperty(ADDRESS);
    expect(state.balances.balances[ADDRESS]).toEqual(BALANCE);
  });
});

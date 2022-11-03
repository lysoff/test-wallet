import { configureStore } from "@reduxjs/toolkit";
import ethService from "../../services/ethService";
import { rootReducer } from "../../redux/rootReducer";
import { createWallet } from "./actions";

describe("wallet actions", () => {
  it("should create a wallet and change the `wallets` slice", async () => {
    const ADDRESS = "0x4445AB6236bA267969C1C878b268c25fBA9aE653";
    const ENCRYPTED_JSON = `{"value":"Some encrypted JSON"}`;
    const ALIAS = "My Test Wallet";
    const PASSWORD = "SecretP@ssword";

    const postSpy = jest.spyOn(ethService, "createWalletAsync").mockResolvedValueOnce({
      address: ADDRESS,
      encryptedJSON: ENCRYPTED_JSON,
    });

    const store = configureStore({ reducer: rootReducer });
    await store.dispatch(createWallet({ alias: ALIAS, password: PASSWORD }));

    expect(postSpy).toBeCalledWith(PASSWORD);

    const state = store.getState();

    expect(state.wallets.addresses).toMatchObject([ADDRESS]);
    expect(state.wallets.items).toHaveProperty(ADDRESS);
    expect(state.wallets.items[ADDRESS]).toMatchObject({
      address: ADDRESS,
      encryptedJSON: ENCRYPTED_JSON,
      alias: ALIAS,
    });
  });
});

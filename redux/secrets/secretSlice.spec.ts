import { configureStore } from "@reduxjs/toolkit";
import ethService from "../../services/ethService";
import { rootReducer } from "../../redux/rootReducer";
import { revealSecrets } from "./actions";
import { clearSecrets } from "./secretSlice";

describe("secrets actions", () => {
  const store = configureStore({ reducer: rootReducer });

  const ENCRYPTED_JSON = `{"value":"Some encrypted JSON"}`;
  const PASSWORD = "SecretP@ssword";
  const PRIVATE_KEY = "<some_fake_private_key>";
  const MNEMONIC_PHRASE = "<some_fake_mnemonic_phrase>";

  it("should decrypt the encryptedJSON with password and update `secrets` slice", async () => {
    const postSpy = jest.spyOn(ethService, "revealSecretsAsync").mockResolvedValueOnce({
      privateKey: PRIVATE_KEY,
      mnemonicPhrase: MNEMONIC_PHRASE,
    });

    await store.dispatch(revealSecrets({ encryptedJSON: ENCRYPTED_JSON, password: PASSWORD }));

    expect(postSpy).toBeCalledWith(ENCRYPTED_JSON, PASSWORD);

    const state = store.getState();

    expect(state.secrets).toMatchObject({
      privateKey: PRIVATE_KEY,
      mnemonicPhrase: MNEMONIC_PHRASE,
    });
  });

  it("should clear `secrets` slice", () => {
    let state = store.getState();
    expect(state.secrets.privateKey).not.toBeUndefined();
    expect(state.secrets.mnemonicPhrase).not.toBeUndefined();

    store.dispatch(clearSecrets());

    state = store.getState();

    expect(state.secrets.privateKey).toBeUndefined();
    expect(state.secrets.mnemonicPhrase).toBeUndefined();
  });
});

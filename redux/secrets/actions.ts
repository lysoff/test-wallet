import { revealSecretsAsync } from "../../services/ethers";
import { AppDispatch } from "../../store";
import { addSecrets } from "./secretSlice";

export const revealSecrets =
  (address: string, encryptedJSON: string, password: string) => async (dispatch: AppDispatch) => {
    const { privateKey, mnemonicPhrase } = await revealSecretsAsync(encryptedJSON, password);

    dispatch(addSecrets({ privateKey, mnemonicPhrase }));
  };

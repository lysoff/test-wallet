import { createWalletAsync, revealSecretsAsync } from "../../services/ethers";
import { AppDispatch } from "../../store";
import { addWallet } from "./walletSlice";

export const createWallet: any = (password: string, alias: string) => async (dispatch: AppDispatch) => {
  const { address, encryptedJSON } = await createWalletAsync(password);

  dispatch(
    addWallet({
      alias,
      address,
      encryptedJSON,
    })
  );
};

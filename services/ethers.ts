import { BigNumber, ethers, Wallet } from "ethers";

const ALCHEMY_API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY as string;

let provider: ethers.providers.AlchemyProvider;

export function initProvider(network?: string): void {
  provider = new ethers.providers.AlchemyProvider(network, ALCHEMY_API_KEY);
}

export async function createWalletAsync(password: string): Promise<{ address: string; encryptedJSON: string }> {
  const wallet = Wallet.createRandom();
  const encryptedJSON = await wallet.encrypt(password);

  return {
    address: wallet.address,
    encryptedJSON,
  };
}

export async function revealSecretsAsync(
  encryptedJSON: string,
  password: string
): Promise<{ privateKey: string; mnemonicPhrase: string }> {
  const wallet = await Wallet.fromEncryptedJson(encryptedJSON, password);

  return {
    privateKey: wallet.privateKey,
    mnemonicPhrase: wallet.mnemonic.phrase,
  };
}

export async function getBalanceAsync(address: string): Promise<string> {
  const balance = await provider.getBalance(address);

  return ethers.utils.formatEther(balance);
}

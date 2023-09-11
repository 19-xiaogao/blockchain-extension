import { getStorageMnemonic, getStoragePassword } from "./storage"
import walletCrypto from "./crpyto"

export const exportWallet = async (password) => {
    try {
        const mnemonic = await getStorageMnemonic()
        const wallet = walletCrypto.mnemonicToWallet(walletCrypto.deCryptoMnemonic(mnemonic, password))
        return wallet
    } catch (error) {
        console.log("error:password is err");
        return false
    }
}
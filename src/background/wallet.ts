import { getStorageMnemonic, getStoragePassword } from "./storage"
import walletCrypto from "./crpyto"

export const usePasswordExportWallet = async (password) => {
    try {
        const mnemonic = await getStorageMnemonic()
        const wallet = walletCrypto.mnemonicToWallet(walletCrypto.deCryptoMnemonic(mnemonic, password))
        return wallet
    } catch (error) {
        console.log("error:password is err");
        return false
    }
}

export const exportWallet = async () => {
    try {
        const mnemonic = await getStorageMnemonic()
        const password = await getStoragePassword()
        return walletCrypto.deCryptoMnemonic(mnemonic, password)
    } catch (error) {
        console.log("error:exportWallet is err");
        return ""
    }
}


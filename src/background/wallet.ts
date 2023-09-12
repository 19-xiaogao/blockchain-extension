import { getStorageMnemonic, getStoragePassword } from "./storage"
import walletCrypto from "./crpyto"
import * as anfsJs from "anfs-js"

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

export const exportMnemonic = async () => {
    try {
        const mnemonic = await getStorageMnemonic()
        const password = await getStoragePassword()
        return walletCrypto.deCryptoMnemonic(mnemonic, password)
    } catch (error) {
        console.log("error:exportMnemonic is err");
        return ""
    }
}

// 使用助记词推导出新的地址
export const exportAddress = async (index: number) => {
    const mnemonic = await exportMnemonic()
    const wallet = walletCrypto.mnemonicToWallet(mnemonic)
    const childWallet = wallet.deriveChild(index)
    return childWallet
}

//获取当前地址的私钥
export const deCurrentHDWalletPrivateKye = async () => {
    const mnemonic = await exportMnemonic()
    const wallet = walletCrypto.mnemonicToWallet(mnemonic);
    return anfsJs.HDNodeWallet.fromMnemonic(wallet.mnemonic, wallet.path).privateKey;
}

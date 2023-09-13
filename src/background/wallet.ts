import { getCurrentWalletStorage, getStorageMnemonic, getStoragePassword } from "./storage"
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
export const deCurrentHDWalletPrivateKey = async (password: string) => {
    const _password = await getStoragePassword()
    const _wallet: anfsJs.HDNodeWallet = await getCurrentWalletStorage()
    const wallet = walletCrypto.mnemonicToWallet(_wallet.mnemonic.phrase).derivePath(_wallet.path)
    if (_password !== password) return false
    return anfsJs.HDNodeWallet.fromMnemonic(wallet.mnemonic, wallet.path).privateKey;
}

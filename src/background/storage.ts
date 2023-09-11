import { Storage } from "@plasmohq/storage"

// 保存用户助记词的操作
const MNEMONIC = "MNEMONIC"
const WalletStorage = new Storage({ area: "local" })

export async function setStorageMnemonic(enCryptoMnemonic: string) {
    return WalletStorage.set(MNEMONIC, enCryptoMnemonic)
}

export async function getStorageMnemonic() {
    return WalletStorage.get(MNEMONIC)
}

export async function removeStorageMnemonic() {
    return WalletStorage.remove(MNEMONIC)
}


// 保存密码的操作
const WalletPassword = "WALLET_PASSWORD"
const PasswordStorage = new Storage({ area: "session" })

export async function setStoragePassword(password: string) {
    return PasswordStorage.set(WalletPassword, password)
}

export async function getStoragePassword() {
    return PasswordStorage.get(WalletPassword)
}

export async function removeStoragePassword() {
    return PasswordStorage.remove(WalletPassword)
}

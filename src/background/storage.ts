import { Storage } from "@plasmohq/storage"

function removePropertyFromArray(arr, property) {
    return arr.map(obj => {
        const { [property]: prop, ...rest } = obj;
        return rest;
    });
}

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

//保存rpc相关操作
const RPCList = "PRC_LIST"
const RPCListStorage = new Storage({ area: "local" })

export async function setStorageRPC(rpc: string[]) {
    return RPCListStorage.set(RPCList, rpc)
}

export async function getStorageRPC() {
    return RPCListStorage.get(RPCList)
}

export async function removeStorageRPC() {
    return RPCListStorage.remove(RPCList)
}


// 判断用户是否保存相关助记词
const isSaverRecoveryPhrase = "IS_SAVER_RECOVERY_PHRASE"
const phraseStorage = new Storage({ area: "local" })

export async function setStoragePhrase(phrase: string) {
    return phraseStorage.set(isSaverRecoveryPhrase, phrase)
}

export async function getStorageSavePhrase() {
    return phraseStorage.get(isSaverRecoveryPhrase)
}

export async function removeStoragePhrase() {
    return phraseStorage.remove(isSaverRecoveryPhrase)
}


const walletList = "WALLET_LIST"

const walletListStorage = new Storage({ area: "local" })

export async function setStorageWalletList(wallet: Object) {
    const walletLs = await getStorageWalletList()
    if (walletLs) {
        return walletListStorage.set(walletList, [...walletLs, wallet])
    }
    return walletListStorage.set(walletList, removePropertyFromArray([wallet], "mnemonic"))


}

export async function getStorageWalletList() {
    return walletListStorage.get(walletList)
}

export async function removeStorageWalletList() {
    return walletListStorage.remove(walletList)
}


const currentWallet = "CURRENT_WALLET"

const currentWalletStorage = new Storage({ area: "local" })

export async function setCurrentWalletStorage(wallet: any) {
    delete wallet["mnemonic"]
    return currentWalletStorage.set(currentWallet, wallet)
}

export async function getCurrentWalletStorage() {
    return currentWalletStorage.get(currentWallet)
}

export async function removeCurrentWalletStorage() {
    return currentWalletStorage.remove(currentWallet)
}

import { Storage } from "@plasmohq/storage"
import { defaultNetwork } from "./constant"
import type { IHDNodeWallet, IRPC } from "~types";
import cryptoJs from "crypto-js";
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

export async function getStorageRPC(): Promise<IRPC[]> {
    const _rpc = await RPCListStorage.get(RPCList)
    if (!_rpc) await RPCListStorage.set(RPCList, defaultNetwork)
    return RPCListStorage.get(RPCList)
}

export async function removeStorageRPC() {
    return RPCListStorage.remove(RPCList)
}

// 设置当前RPC
const CURRENT_RPC = "CURRENT_RPC"
const CurrentRpcStorage = new Storage({ area: "local" })

export async function setStorageCurrentRPC(rpc) {

    return CurrentRpcStorage.set(CURRENT_RPC, rpc)
}

export async function getStorageCurrentRPC(): Promise<IRPC> {

    return CurrentRpcStorage.get(CURRENT_RPC)
}

export async function removeStorageCurrentRPC() {
    return CurrentRpcStorage.remove(CURRENT_RPC)
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

//钱包列表
const walletList = "WALLET_LIST"

const walletListStorage = new Storage({ area: "local" })

export async function setStorageWalletList(wallet: Object) {

    const passwordKey = await getStoragePassword()
    const walletLs = await getStorageWalletList()
    if (walletLs) {
        return walletListStorage.set(walletList, cryptoJs.AES.encrypt(JSON.stringify([...walletLs, wallet]), passwordKey).toString())
    }
    // return walletListStorage.set(walletList, removePropertyFromArray([wallet], "mnemonic"))
    return walletListStorage.set(walletList, cryptoJs.AES.encrypt(JSON.stringify([wallet]), passwordKey).toString())

}

export async function changeStorageWalletList(wallet) {
    const passwordKey = await getStoragePassword()
    const walletLs = await getStorageWalletList()
    walletLs.forEach(element => {
        if (element.address === wallet.address) {
            element.name = wallet.name
        }
    });
    walletListStorage.set(walletList, cryptoJs.AES.encrypt(JSON.stringify(walletLs), passwordKey).toString())
}


export async function getStorageWalletList(): Promise<any> {
    const passwordKey = await getStoragePassword()
    const walletLs = await walletListStorage.get(walletList)
    if (!walletLs) return walletLs
    return JSON.parse(cryptoJs.AES.decrypt(walletLs, passwordKey).toString(cryptoJs.enc.Utf8))
}

export async function removeStorageWalletList() {
    return walletListStorage.remove(walletList)
}

// 当前账户
const currentWallet = "CURRENT_WALLET"

const currentWalletStorage = new Storage({ area: "local" })

export async function setCurrentWalletStorage(wallet: any) {
    const passwordKey = await getStoragePassword()
    const encryptedWallet = cryptoJs.AES.encrypt(JSON.stringify(wallet), passwordKey).toString()
    return currentWalletStorage.set(currentWallet, encryptedWallet)
}

export async function getCurrentWalletStorage() {
    const passwordKey = await getStoragePassword()
    const wallet = await currentWalletStorage.get(currentWallet)
    return JSON.parse(cryptoJs.AES.decrypt(wallet, passwordKey).toString(cryptoJs.enc.Utf8))
}

export async function removeCurrentWalletStorage() {
    return currentWalletStorage.remove(currentWallet)
}

// 临时保存用护助记词

const temporarilySaveMnemonic = "TEM_SAVE_MNEMONIC"

const temporarilySaveStorage = new Storage({ area: "session" })

export async function setTemMneStorage(mnemonic: string) {
    return temporarilySaveStorage.set(temporarilySaveMnemonic, mnemonic)
}

export async function getTemMneStorage() {
    return temporarilySaveStorage.get(temporarilySaveMnemonic)
}

export async function removeTemMneStorage() {
    return temporarilySaveStorage.remove(temporarilySaveMnemonic)
}


// 保存交易记录

const txRecords = "TX_RECORDS"
const txRecordsStorage = new Storage({ area: "local" })

export async function addTxRecordsStorage(tx) {
    const txList = await getTxRecordsStorage()
    if (!txList) return txRecordsStorage.set(txRecords, [tx])
    txRecordsStorage.set(txRecords, [...txList, tx])
}

export async function getTxRecordsStorage(): Promise<any[]> {
    return txRecordsStorage.get(txRecords)
}

export async function removeTxRecordsStorage() {
    return txRecordsStorage.remove(txRecords)
}
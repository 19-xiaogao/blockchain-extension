import * as anfsJs from "anfs-js"
import { getCurrentWalletStorage, getStorageCurrentRPC } from "./storage"

export const getCurrentJsonRpcProvider = async () => {
    const rpc = await getStorageCurrentRPC()
    return new anfsJs.JsonRpcProvider(rpc.url)
}

export const getAddressBalance = async (address: anfsJs.ethers.AddressLike) => {
    const provider = (await getCurrentJsonRpcProvider()).provider
    const balance = await provider.getBalance(address)
    console.log(balance, "balance");

    return anfsJs.formatEther(balance)
}

export const sendTransaction = async (to: anfsJs.ethers.AddressLike, value) => {
    const amount = anfsJs.parseEther(String(value))
    const _wallet = await getCurrentWalletStorage()
    const wallet = anfsJs.HDNodeWallet.fromPhrase(_wallet.mnemonic.phrase, "", _wallet.path)
    const provider = (await getCurrentJsonRpcProvider()).provider
    const tx = await wallet.connect(provider).sendTransaction({
        to: to,
        value: amount,
    })
    return tx
}
export const getGasPrice = async (request: anfsJs.ethers.TransactionRequest) => {
    const provider = (await getCurrentJsonRpcProvider()).provider
    const gas = await provider.estimateGas(request)
    return anfsJs.formatEther(gas)
}

// 查询交易是否成功
export const getTxType = async (txhash: string) => {
    const provider = (await getCurrentJsonRpcProvider()).provider
    const result = await provider.getTransaction(txhash)

    if (result != null) {

        return true
    }
    else return false

}


import * as anfsJs from "anfs-js"
import { getCurrentWalletStorage, getStorageCurrentRPC } from "./storage"

export const getCurrentJsonRpcProvider = async () => {
    const rpc = await getStorageCurrentRPC()
    return new anfsJs.JsonRpcProvider(rpc.url)
}

export const getAddressBalance = async (address: anfsJs.ethers.AddressLike) => {
    const provider = (await getCurrentJsonRpcProvider()).provider
    const balance = await provider.getBalance(address)
    return anfsJs.formatEther(balance)
}

export const sendTransaction = async (to: anfsJs.ethers.AddressLike, value) => {
    const amount = anfsJs.parseEther(value)
    const wallet: anfsJs.HDNodeWallet = await getCurrentWalletStorage()
    const provider = (await getCurrentJsonRpcProvider()).provider
    const tx = await wallet.connect(provider).sendTransaction({
        to: to,
        value: amount
    })
    return tx
}
export const getGasPrice = async (request: anfsJs.ethers.TransactionRequest) => {
    const provider = (await getCurrentJsonRpcProvider()).provider
    const gas = await provider.estimateGas(request)
    return anfsJs.formatEther(gas)
}

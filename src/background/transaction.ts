import * as anfsJs from "anfs-js"
import { getCurrentWalletStorage, getStorageCurrentRPC } from "./storage"

export const getCurrentProvider = async () => {
    const rpc = await getStorageCurrentRPC()
    return await anfsJs.getDefaultProvider(rpc.url)
}

export const getAddressBalance = async (address: anfsJs.ethers.AddressLike) => {
    const provider = await getCurrentProvider()
    const balance = await provider.getBalance(address)
    return anfsJs.formatEther(balance)
}

export const sendTransaction = async (to: anfsJs.ethers.AddressLike, value) => {
    const amount = anfsJs.parseEther(value)
    const wallet: anfsJs.HDNodeWallet = await getCurrentWalletStorage()
    const provider = await getCurrentProvider()
    const tx = await wallet.connect(provider).sendTransaction({
        to: to,
        value: amount
    })
    return tx
}

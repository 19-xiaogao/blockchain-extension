import { getCurrentJsonRpcProvider } from "./transaction"
import ERC20ABI from "~ABI/ERC20.json"
import * as anfsJs from "anfs-js"
import { getCurrentWalletStorage } from "./storage"

// 查询合约基本信息
export const getContractMsg = async (contractAddress: string) => {
    const provider = (await getCurrentJsonRpcProvider()).provider

    try {
        const contract = new anfsJs.Contract(contractAddress, ERC20ABI, provider)

        const name = await contract.name()
        const symbol = await contract.symbol()
        const decimals = await contract.decimals()
        console.log(Number(decimals));

        return {
            contract: contractAddress,
            symbol,
            name,
            decimals: Number(decimals)
        }
    } catch (error) {
        return {
            contract: contractAddress,
            symbol: "",
            name: "",
            decimals: 0
        }
    }
}
// 查询用户的代币余额
export const getERC20BalanceOf = async (contractAddress, accountAddress) => {
    const provider = (await getCurrentJsonRpcProvider()).provider
    const contract = new anfsJs.Contract(contractAddress, ERC20ABI, provider)

    try {
        const balance = await contract.balanceOf(accountAddress)
        return anfsJs.formatEther(balance)
    } catch (error) {
        return 0
    }
}

export const sendERC20Transaction = async (contractAddress, toAddress, value) => {

    const _wallet = await getCurrentWalletStorage()

    const wallet = anfsJs.HDNodeWallet.fromPhrase(_wallet.mnemonic.phrase, "", _wallet.path)

    const provider = (await getCurrentJsonRpcProvider()).provider

    const signer = new anfsJs.Wallet(wallet.privateKey, provider);

    const contract = new anfsJs.Contract(contractAddress, ERC20ABI, signer)

    const amount = anfsJs.parseEther(String(value))

    const tx = await contract.transfer(toAddress, amount)

    return tx
} 
import { getCurrentJsonRpcProvider } from "./transaction"
import ERC20ABI from "~ABI/ERC20.json"
import * as anfsJs from "anfs-js"

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
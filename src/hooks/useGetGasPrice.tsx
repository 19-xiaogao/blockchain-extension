import { useEffect, useState } from "react"
import { getGasPrice, getStorageCurrentRPC, } from "~background"
import * as anfsJs from "anfs-js"
import type { IRPC } from "~types"
import { defaultNetwork } from "~background/constant"

export const useGetStorageCurrentRPC = (request: anfsJs.ethers.TransactionRequest) => {
    const [gasPrice, setGasPrice] = useState<string | number>("")
    useEffect(() => {
        getGas()
    }, [])
    const getGas = async () => {
        const result = await getGasPrice(request)
        setGasPrice(result)
    }
    return { gasPrice, setGasPrice }
}

export default useGetStorageCurrentRPC
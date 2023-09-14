import { useEffect, useState } from "react"
import { getGasPrice } from "~background"
import * as anfsJs from "anfs-js"

export const useGetStorageCurrentRPC = (request: anfsJs.ethers.TransactionRequest) => {
    const [gasPrice, setGasPrice] = useState<string | number>("")
    useEffect(() => {
        getGas()
    }, [])
    const getGas = async () => {
        const result = await getGasPrice({ ...request, value: anfsJs.parseUnits(String(request.value), "wei") })
        console.log(result);

        setGasPrice(result)
    }
    return { gasPrice, setGasPrice }
}

export default useGetStorageCurrentRPC
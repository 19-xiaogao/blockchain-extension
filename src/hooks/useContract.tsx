import { useEffect, useState } from "react"
import { getContractMsg } from "~background"
import * as anfsJs from "anfs-js"
import type { IContract } from "~types"

export const useContract = (contractAddress: string) => {
    const [contractMsg, setContractMsg] = useState<IContract>({
        name: "",
        contract: "",
        decimals: 0,
        symbol: ""
    })

    useEffect(() => {
        getContractMsg(contractAddress).then(res => {
            setContractMsg(res)
        })
    }, [contractAddress])

    return contractMsg

}

export default useContract
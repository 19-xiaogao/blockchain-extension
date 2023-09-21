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
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (anfsJs.isAddress(contractAddress)) {
            setLoading(true)
            getContractMsg(contractAddress).then(res => {
                setContractMsg(res)
                setLoading(false)
            })
        }

    }, [contractAddress])

    return { contractMsg, loading }

}

export default useContract
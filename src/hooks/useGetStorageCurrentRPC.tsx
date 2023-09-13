import { useEffect, useState } from "react"
import { getStorageCurrentRPC, } from "~background"
import * as anfsJs from "anfs-js"
import type { IRPC } from "~types"
import { defaultNetwork } from "~background/constant"

export const useGetStorageCurrentRPC = () => {
    const [rpc, setRpc] = useState<IRPC>(defaultNetwork[0])


    useEffect(() => {
        getRPC()
    }, [])
    const getRPC = async () => {
        const result = await getStorageCurrentRPC()
        setRpc(result)
    }
    return { rpc, getRPC }
}

export default useGetStorageCurrentRPC
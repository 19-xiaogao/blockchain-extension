import { useEffect, useState } from "react"
import { getStorageWalletList } from "~background"
import type { IHDNodeWallet } from "~types"

export const useGetWalletList = () => {
    const [list, setList] = useState<IHDNodeWallet[]>([])


    useEffect(() => {
        getWalletList()
    }, [])
    const getWalletList = async () => {
        const result = await getStorageWalletList()
        console.log(result);

        setList(result)
    }
    return { list, getWalletList }
}

export default useGetWalletList
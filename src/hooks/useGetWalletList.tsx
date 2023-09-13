import { useEffect, useState } from "react"
import { getStorageWalletList } from "~background"
import * as anfsJs from "anfs-js"

export const useGetWalletList = () => {
    const [list, setList] = useState<anfsJs.HDNodeWallet[]>([])


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
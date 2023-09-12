import { useEffect, useState } from "react"
import { getCurrentWalletStorage } from "~background"

export const useGetAddress = () => {
    const [address, setAddress] = useState<any>("0xAa5A88bdA5BB06cb73Ee0af753D3f4A2486dd845")

    useEffect(() => {
        getAddress()
    }, [])
    const getAddress = async () => {
        const wallet: any = await getCurrentWalletStorage()
        setAddress(wallet.address)
    }
    return address
}

export default useGetAddress
import { useEffect, useState } from "react"
import { getCurrentWalletStorage } from "~background"

export const useGetAddress = () => {
    const [address, setAddress] = useState<any>("")

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
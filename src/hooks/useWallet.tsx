import { useEffect, useState } from "react"
import { getCurrentWalletStorage } from "~background"

export const useWallet = () => {
    const [wallet, setWallet] = useState<any>("")

    useEffect(() => {
        getWallet()
    }, [])
    const getWallet = async () => {
        const wallet: any = await getCurrentWalletStorage()

        setWallet(wallet)
    }
    return wallet
}

export default useWallet
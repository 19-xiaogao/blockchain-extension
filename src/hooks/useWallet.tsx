import { useEffect, useState } from "react"
import { getCurrentWalletStorage } from "~background"

export const useWallet = () => {
    const [wallet, setWallet] = useState({ address: "", name: "Account 1", getWallet: () => { } })

    useEffect(() => {
        getWallet()

    }, [])
    const getWallet = async () => {
        const wallet: any = await getCurrentWalletStorage()

        setWallet({ ...wallet, getWallet })
    }
    return wallet
}

export default useWallet
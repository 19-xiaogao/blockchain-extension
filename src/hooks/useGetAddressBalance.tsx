import { useEffect, useState } from "react"
import { getAddressBalance } from "~background"
import * as anfsJs from "anfs-js"

export const useGetAddressBalance = (address: anfsJs.ethers.AddressLike) => {

    const [balance, setBalance] = useState<string | number>(0)
    const [balanceLoading, setBalanceLoading] = useState(false)

    useEffect(() => {
        if (anfsJs.isAddress(address)) {
            setBalanceLoading(true)
            getAddressBalance(address).then(res => {
                setBalance(res.substring(0, 8))
                setBalanceLoading(false)
            })
        }

    }, [address])
    return { balanceLoading, balance }
}

export default useGetAddressBalance
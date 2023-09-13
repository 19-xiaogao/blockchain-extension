import { useEffect, useState } from "react"
import { getAddressBalance } from "~background"
import * as anfsJs from "anfs-js"

export const useGetAddressBalance = (address: anfsJs.ethers.AddressLike) => {
    const [balance, setBalance] = useState(0)

    useEffect(() => {
        getAddressBalance(address).then(res => {
            setBalance(balance)
        })
    }, [])
    return balance
}

export default useGetAddressBalance
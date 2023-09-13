import { useEffect, useState } from "react"
import { getAddressBalance } from "~background"
import * as anfsJs from "anfs-js"

export const useGetAddressBalance = (address: anfsJs.ethers.AddressLike) => {

    const [balance, setBalance] = useState<string | number>(0)

    useEffect(() => {
        if (anfsJs.isAddress(address)) {
            getAddressBalance(address).then(res => {
                setBalance(res)
            })
        }

    })
    return balance
}

export default useGetAddressBalance
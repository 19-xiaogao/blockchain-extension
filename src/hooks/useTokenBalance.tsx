import React, { useCallback, useEffect, useState } from "react";
import { getERC20BalanceOf } from "~background";
import useTokenList from "~hooks/useTokenlist"

export default function useAddressTokenInfo(contractAddress, walletAddress) {

    const [balance, setBalance] = useState<string | number>("");
    const { tokenList } = useTokenList()

    useEffect(() => {
        getAddrTokenBalance(contractAddress, walletAddress)

    }, [contractAddress, walletAddress])

    const getAddrTokenBalance = useCallback(async (contractAddress, walletAddress) => {
        if (!contractAddress) return setBalance(0)
        const balance = await getERC20BalanceOf(contractAddress, walletAddress)
        setBalance(balance)
    }, [contractAddress, walletAddress])

    return { balance, ...tokenList.find(v => v.contract === contractAddress) }

}
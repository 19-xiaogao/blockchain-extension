import React, { useEffect, useState } from "react";
import { getContractStorage } from "~background";
import type { IContract } from "~types";

export default function useTokenList() {
    const [tokenList, setTokenList] = useState<IContract[]>([])

    useEffect(() => {
        getTokenList()
    }, [])

    const getTokenList = async () => {
        const list = await getContractStorage()
        setTokenList(!list ? [] : list)
    }
    return { tokenList, getTokenList }

}
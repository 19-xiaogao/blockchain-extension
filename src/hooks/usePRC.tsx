import React, { useEffect, useState } from "react";
import { getStorageCurrentRPC, setStorageCurrentRPC } from "~background";
import type { IRPC } from "~types";


export default function usePRC() {
    const [currentRPC, setCurrentRPC] = useState<IRPC>({ name: "", url: "", chainId: 0, blockChainBrowser: "", Currency: "" })

    useEffect(() => {
        getCurrentPRC()
    }, [])

    const getCurrentPRC = async () => {
        const rpc = await getStorageCurrentRPC()
        setCurrentRPC(rpc)
    }

    const handleSetRPC = async (val) => {
        await setStorageCurrentRPC(val)
        setCurrentRPC(val)

    }

    return { currentRPC, handleSetRPC }

}
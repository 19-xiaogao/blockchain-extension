import React, { useCallback, useEffect, useState } from "react"
import { getStorageRPC } from "~background"
import type { IRPC } from "~types"

const DropdownRender = ({ onclick }) => {

    const [rpcList, setPrcList] = useState<IRPC[]>([])
    useEffect(() => {
        getRpcList()
    }, [])
    const getRpcList = async () => {
        const rpc = await getStorageRPC()
        setPrcList(rpc)
    }

    const renderRpcList = useCallback(() => {
        return rpcList.map(v => (<div key={v.chainId} className="flex items-center cursor-pointer justify-end pt-1 pb-1 hover:bg-send-bg p-2 pr-4 rounded-lg" onClick={() => onclick(v)}>
            <div>
                <p className="text-right text-dropdown m-0">{v.name}</p>
                <p className="text-right text-xs text-dark-gray m-0 w-full ">{v.url}</p>
            </div>
            <span className="w-2 h-2 bg-red rounded-full ml-2"></span>
        </div>))
    }, [rpcList])

    return <div className="rounded-lg  overflow-hidden bg-coin-hover w-56">
        {renderRpcList()}
    </div>
}
export default DropdownRender
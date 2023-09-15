import { SwapOutlined } from "@ant-design/icons";
import React, { useCallback } from "react";
import { formatAddress } from "~utils";
import { useNavigate } from "react-router-dom"
import useGetTxRecords from "~hooks/useGetTxRecords";
import usePRC from "~hooks/usePRC";
import useWallet from "~hooks/useWallet";
export default function WalletView() {
    const navigate = useNavigate()
    const wallet = useWallet()
    const { list } = useGetTxRecords()
    const { currentRPC } = usePRC()

    const renderTxList = useCallback(() => {
        return list.filter(v => v.chainId == currentRPC.chainId && v.from === wallet.address).map(v => (

            <div onClick={() => navigate('/recordDetail', { state: { txs: v } })} className="rounded-lg p-3 bg-[#1d1f22] mt-4 flex items-center justify-between cursor-pointer">
                <div className="flex items-center">
                    <SwapOutlined className="text-white text-2xl" />
                    <div className="ml-2">
                        <div className="text-white text-base">{v.type}</div>
                        <div className="text-[#838385]">To: {formatAddress(v.to)}</div>
                    </div>
                </div>
                <div className=" text-red text-base font-semibold"> - {Number(v.value.substring(0, 8))} ETH</div>
            </div>
        ))
    }, [list, currentRPC,wallet])


    return <div className="p-4">
        <div className=" text-center mt-2">
            <span className=" text-2xl text-white font-semibold">Activity</span>
        </div>
        <div className="mt-4">
            {renderTxList()}
        </div>
    </div>
}
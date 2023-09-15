import React, { useEffect, useState } from "react";
import { NavBar } from 'antd-mobile'
import { CloseOutlined, PlusOutlined } from "@ant-design/icons"
import { useLocation, useNavigate } from "react-router-dom"
import { copyToClipboard, formatAddress, formatTx } from "~utils";
import { Tooltip } from "antd";
import { getTxType } from "~background";
import usePRC from "~hooks/usePRC";
const address = "0xAa5A88bdA5BB06cb73Ee0af753D3f4A2486dd845"

export default function RecordDetail() {
    const navigate = useNavigate()
    const location = useLocation();

    const txs = location.state?.txs;

    const [isShowDetail, setIsShowDetail] = useState(true)
    const [status, setStatus] = useState("Padding");
    const { currentRPC } = usePRC()
    const back = () => {
        console.log("click back icon");

    }

    useEffect(() => {
        getTxType(txs.tx).then(res => {
            setStatus(res ? "Success" : "Padding")
        })
    }, [txs])

    const openTxWindow = (hash) => {
        copyToClipboard(hash)
        window.open(currentRPC.blockChainBrowser + '/tx/' + hash)

    }

    return <div className="w-full h-full">
        <NavBar backArrow={<CloseOutlined className=" text-font-gray text-xl mb-2" onClick={() => navigate(-1)} />} onBack={back} >
            <span className=" text-white text-base">{txs.type}</span>
        </NavBar>
        <div className="h-full p-3 overflow-y-auto">
            <div className="rounded-xl w-full mt-2 overflow-hidden bg-[#1b1d1f]">
                <div className="p-2 pt-3 pb-3 flex items-center  justify-between">
                    <div className=" text-[#656568]">Status</div>
                    <div className=" text-white"> {status}</div>
                </div>
                <div className="p-2 pt-3 pb-3 flex items-center  justify-between">
                    <div className=" text-[#656568]">Transactions Hash</div>
                    <Tooltip
                        title={txs.tx}
                        placement='top'
                        mouseEnterDelay={0.05}
                    >
                        <span onClick={() => openTxWindow(txs.tx)} className="text-white cursor-pointer text-center mt-2  hover:text-white">{formatTx(txs.tx)}</span>
                    </Tooltip>

                </div>
                <div className="p-2 pt-3 pb-3 flex items-center  justify-between">
                    <div className=" text-[#656568]">From</div>
                    <div className=" text-white"> {formatAddress(txs.from)}</div>
                </div>
                <div className="p-2 pt-3 pb-3 flex items-center  justify-between">
                    <div className=" text-[#656568]">To</div>
                    <div className=" text-white">{formatAddress(txs.to)}</div>
                </div>
                <div className="p-2 pt-3 pb-3 flex items-center  justify-between">
                    <div className=" text-[#656568]">Network</div>
                    <div className=" text-white">{txs.netWork}</div>
                </div>
                <div className="p-2 pt-3 pb-3 flex items-center  justify-between">
                    <div className=" text-[#656568]">Network fees</div>
                    <div className=" text-white"> ≈ {txs.netWorkFees}ETH</div>
                </div>
                <div className="p-2 pt-3 pb-3 flex items-center  justify-between bg-[#1b1d1f]">
                    <div className=" text-[#656568]">Nonce</div>
                    <div className=" text-white"> {txs.nonce}</div>
                </div>
            </div>
            <div className={`rounded-xl w-full mt-2 overflow-hidden transition-height duration-200 ${isShowDetail ? 'h-20' : 'h-0 mt-0'}`} >
                <div className="bg-[#242427] p-2  text-[#727274]">Actions</div>
                <div className="p-2 pt-3 pb-3 flex items-center  justify-between bg-[#1b1d1f] border-t border-black">
                    <span className=" text-white">Transfer</span>
                    <div className=" text-[#707072]">{formatAddress(txs.to)}</div>
                </div>
            </div>
            <div className=" text-center mt-2">
                <span className="text-white cursor-pointer" onClick={() => setIsShowDetail(!isShowDetail)}>View more details</span>
            </div>
        </div>
    </div>
}
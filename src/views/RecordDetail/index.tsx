import React, { useState } from "react";
import { NavBar } from 'antd-mobile'
import { CloseOutlined, PlusOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
import { copyToClipboard, formatAddress } from "~utils";
import { Tooltip } from "antd";
const address = "0xAa5A88bdA5BB06cb73Ee0af753D3f4A2486dd845"

export default function RecordDetail() {
    const navigate = useNavigate()
    const [isShowDetail, setIsShowDetail] = useState(true)

    const back = () => {
        console.log("click back icon");

    }
    return <div className="w-full h-full">
        <NavBar backArrow={<CloseOutlined className=" text-font-gray text-xl mb-2" onClick={() => navigate('/')} />} onBack={back} >
            <span className=" text-white text-base">Receive</span>
        </NavBar>
        <div className="h-full p-3 overflow-y-auto">
            <div className="rounded-xl w-full mt-2 overflow-hidden bg-[#1b1d1f]">
                <div className="p-2 pt-3 pb-3 flex items-center  justify-between">
                    <div className=" text-[#656568]">Status</div>
                    <div className=" text-white"> Success</div>
                </div>
                <div className="p-2 pt-3 pb-3 flex items-center  justify-between">
                    <div className=" text-[#656568]">Transactions Hash</div>
                    <Tooltip
                        title={address}
                        placement='top'
                        mouseEnterDelay={0.05}
                    >
                        <span onClick={() => (copyToClipboard(address))} className="text-white cursor-pointer text-center mt-2  hover:text-white">{formatAddress(address)}</span>
                    </Tooltip>

                </div>
                <div className="p-2 pt-3 pb-3 flex items-center  justify-between">
                    <div className=" text-[#656568]">From</div>
                    <div className=" text-white"> Account 1</div>
                </div>
                <div className="p-2 pt-3 pb-3 flex items-center  justify-between">
                    <div className=" text-[#656568]">To</div>
                    <div className=" text-white">{formatAddress("0xAa5A88bdA5BB06cb73Ee0af753D3f4A2486dd845")}</div>
                </div>
                <div className="p-2 pt-3 pb-3 flex items-center  justify-between">
                    <div className=" text-[#656568]">Network</div>
                    <div className=" text-white">Testnet</div>
                </div>
                <div className="p-2 pt-3 pb-3 flex items-center  justify-between">
                    <div className=" text-[#656568]">Network fees</div>
                    <div className=" text-white"> ≈ 0.000092ETH</div>
                </div>
                <div className="p-2 pt-3 pb-3 flex items-center  justify-between bg-[#1b1d1f]">
                    <div className=" text-[#656568]">Nonce</div>
                    <div className=" text-white"> 1</div>
                </div>
            </div>
            <div className={`rounded-xl w-full mt-2 overflow-hidden transition-height duration-200 ${isShowDetail ? 'h-20' : 'h-0 mt-0'}`} >
                <div className="bg-[#242427] p-2  text-[#727274]">Actions</div>
                <div className="p-2 pt-3 pb-3 flex items-center  justify-between bg-[#1b1d1f] border-t border-black">
                    <span className=" text-white">Transfer</span>
                    <div className=" text-[#707072]">{formatAddress("0xAa5A88bdA5BB06cb73Ee0af753D3f4A2486dd845")}</div>
                </div>
            </div>
            <div className=" text-center mt-2">
                <span className="text-white cursor-pointer" onClick={() => setIsShowDetail(!isShowDetail)}>View more details</span>
            </div>
        </div>
    </div>
}
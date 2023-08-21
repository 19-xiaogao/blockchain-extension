import { SwapOutlined } from "@ant-design/icons";
import React from "react";
import { formatAddress } from "~utils";
import { useNavigate } from "react-router-dom"
export default function WalletView() {
    const navigate = useNavigate()
    return <div className="p-4">
        <div className=" text-center mt-2">
            <span className=" text-2xl text-white font-semibold">Activity</span>
        </div>
        <div className="mt-4">
            <div onClick={()=> navigate('/recordDetail')} className="rounded-lg p-3 bg-[#1d1f22] flex items-center justify-between cursor-pointer">
                <div className="flex items-center">
                    <SwapOutlined className="text-white text-2xl" />
                    <div className="ml-2">
                        <div className="text-white text-base">Receive</div>
                        <div className="text-[#838385]">From: {formatAddress("0xAa5A88bdA5BB06cb73Ee0af753D3f4A2486dd845")}</div>
                    </div>
                </div>
                <div className="text-[#47977a] text-base font-semibold">+0.012 ETH</div>
            </div>
            <div className="mt-3 rounded-lg p-3 bg-[#1d1f22] flex items-center justify-between cursor-pointer">
                <div className="flex items-center">
                    <SwapOutlined className="text-white text-2xl" />
                    <div className="ml-2">
                        <div className="text-white text-base">Receive</div>
                        <div className="text-[#838385]">From: {formatAddress("0xAa5A88bdA5BB06cb73Ee0af753D3f4A2486dd845")}</div>
                    </div>
                </div>
                <div className="text-[#47977a] text-base font-semibold">+0.012 ETH</div>
            </div>
            <div className="mt-3 rounded-lg p-3 bg-[#1d1f22] flex items-center justify-between cursor-pointer">
                <div className="flex items-center">
                    <SwapOutlined className="text-white text-2xl" />
                    <div className="ml-2">
                        <div className="text-white text-base">Receive</div>
                        <div className="text-[#838385]">From: {formatAddress("0xAa5A88bdA5BB06cb73Ee0af753D3f4A2486dd845")}</div>
                    </div>
                </div>
                <div className="text-[#47977a] text-base font-semibold">+0.012 ETH</div>
            </div>
        </div>
    </div>
}
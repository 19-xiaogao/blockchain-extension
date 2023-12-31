import React, { useState } from "react";
import { NavBar } from 'antd-mobile'
import { CloseOutlined, PlusOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
import { formatAddress } from "~utils";
import AddAccount from "~components/AddAccount"
import { Button } from "antd";
export default function SendTo() {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const back = () => {
        console.log("click back icon");
    }
    const handleSetOpen = (bol: boolean) => {
        setOpen(bol)
    }
    return <div className="w-full h-full">
        <NavBar backArrow={<CloseOutlined className=" text-font-gray text-xl mb-2" onClick={() => navigate(-1)} />} onBack={back}
            right={<PlusOutlined className=" text-font-gray text-xl  cursor-pointer" onClick={() => handleSetOpen(true)} />}>
            <span className=" text-white text-base">Select an asset</span>
        </NavBar>
        <div className="h-full p-3 overflow-y-auto">
            <div>
                <input
                    type="text"
                    className=" text-base appearance-none  hover:border-[#38383b] focus:border-[#656567]  bg-black text-white w-full h-14 block pl-3 pr-2 rounded-xl border border-gray-100 mt-2"
                    placeholder="Search"
                />
            </div>
            <div className="flex items-center mt-4">
                <div className=" rounded-2xl border border-white p-2 pl-4 pr-4 bg-dark mr-2 cursor-pointer">
                    <span className="text-white">Tokens</span>
                </div>
                <div className="rounded-2xl border border-white p-2 pl-4 pr-4 bg-dark mr-2 cursor-pointer">
                    <span className="text-white">NFTs</span>
                </div>
            </div>
            <div className="h-auto mt-3">
                <div onClick={() => navigate('/send')} className=" mt-2 bg-coin-bg rounded-2xl w-full p-3 flex items-center justify-between hover:bg-coin-hover cursor-pointer transition-all duration-100">
                    <div className="flex items-center">
                        <img src="https://dv3jj1unlp2jl.cloudfront.net/128/color/eth.png" className="w-10 h-15" alt="" />
                        <div className="ml-3">
                            <div className="text-white  text-lg">Account 2</div>
                            <div className="text-dark-gray">{formatAddress("0xAa5A88bdA5BB06cb73Ee0af753D3f4A2486dd845")}</div>
                        </div>
                    </div>
                    <div className="text-dark-gray text-base">💵0.12ETH</div>
                </div>
                <div onClick={() => navigate('/send')} className=" mt-2 bg-coin-bg rounded-2xl w-full p-3 flex items-center justify-between hover:bg-coin-hover cursor-pointer transition-all duration-100">
                    <div className="flex items-center">
                        <img src="https://dv3jj1unlp2jl.cloudfront.net/128/color/eth.png" className="w-10 h-15" alt="" />
                        <div className="ml-3">
                            <div className="text-white  text-lg">Account 2</div>
                            <div className="text-dark-gray">{formatAddress("0xAa5A88bdA5BB06cb73Ee0af753D3f4A2486dd845")}</div>
                        </div>
                    </div>
                    <div className="text-dark-gray text-base">💵0.12ETH</div>
                </div>
            </div>
            <div className="flex  justify-center mt-2">
                <Button size="large" icon={<PlusOutlined />}
                    onClick={() => navigate('/addToken')}
                    className="border-none !text-dark-gray !text-sm bg-add-coin
                     hover:bg-send-hover hover:!text-white flex items-center !rounded-3xl !pl-3 !pr-3">
                    New Token</Button>
            </div>
        </div>
        <AddAccount open={open} handleSetOpen={handleSetOpen} />
    </div>
}
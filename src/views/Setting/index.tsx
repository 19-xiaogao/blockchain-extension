import { CloseOutlined, LockFilled, ArrowRightOutlined, FundViewOutlined } from "@ant-design/icons";
import { NavBar } from "antd-mobile";
import React from "react";
import { useNavigate } from "react-router-dom";
import { removeStoragePassword } from '~background'
import usePRC from "~hooks/usePRC";
import useWallet from "~hooks/useWallet";
import { formatAddress } from "~utils";
export default function Setting() {
    const navigate = useNavigate()
    const wallet = useWallet()
    const { currentRPC } = usePRC()

    const back = () => {
        console.log("click back icon")
    }
    const handleLockClick = async () => {
        await removeStoragePassword()
        navigate('/lock')
    }
    const handleRouter = () => {
        window.open(currentRPC.blockChainBrowser + '/address/' + wallet.address)
    }
    return <div>
        <NavBar
            backArrow={
                <LockFilled
                    className=" text-[#9f9fa1] text-xl mb-2"
                    onClick={handleLockClick}
                />
            }
            right={<CloseOutlined className=" text-[#9f9fa1] text-xl  cursor-pointer" onClick={() => navigate("/")} />}
            onBack={back}>
            <span className="text-white text-base">Settings</span>
        </NavBar>
        <div className="mt-4 p-4">
            <div onClick={() => navigate('/accountDetail')} className="bg-[#242427] rounded-2xl w-full p-3 flex items-center justify-between hover:bg-coin-hover cursor-pointer transition-all duration-100">
                <div className="flex items-center justify-between">
                    <img src="https://dv3jj1unlp2jl.cloudfront.net/128/color/eth.png" className="w-10 h-15" alt="" />
                    <div className="ml-3">
                        <div className="text-white  text-lg">{wallet.name}</div>
                        <span className="text-font-gray cursor-pointer text-center mt-2  text-base hover:text-white">{formatAddress(wallet.address)}</span>
                    </div>
                </div>
                <ArrowRightOutlined className="text-[#9f9fa1] text-lg" />
            </div>
            <div className="flex items-center justify-between bg-[#1b1d1f] p-3 rounded-xl mt-4 cursor-pointer" onClick={handleRouter}>
                <div className=" text-white font-semibold">
                    <FundViewOutlined className=" text-lg" />
                    <span className="text-white font-semibold ml-3">BlockChain View</span>
                </div>
                <ArrowRightOutlined className="text-[#9f9fa1] text-lg" />
            </div>
            <div className="flex items-center justify-between bg-[#1b1d1f] p-3 rounded-xl mt-4">
                <div className=" text-white font-semibold">
                    <FundViewOutlined className=" text-lg" />
                    <span className="text-white font-semibold ml-3">Address book</span>
                </div>
                <ArrowRightOutlined className="text-[#9f9fa1] text-lg" />
            </div>
            <div className="flex items-center justify-between bg-[#1b1d1f] p-3 rounded-xl mt-4">
                <div className=" text-white font-semibold">
                    <FundViewOutlined className=" text-lg" />
                    <span className="text-white font-semibold ml-3">Connected dapps</span>
                </div>
                <ArrowRightOutlined className="text-[#9f9fa1] text-lg" />
            </div>
            <div className="flex items-center justify-between bg-[#1b1d1f] p-3 rounded-xl mt-4">
                <div className=" text-white font-semibold">
                    <FundViewOutlined className=" text-lg" />
                    <span className="text-white font-semibold ml-3">Show recovery phrase</span>
                </div>
                <ArrowRightOutlined className="text-[#9f9fa1] text-lg" />
            </div>
            <div className="flex items-center justify-between bg-[#1b1d1f] p-3 rounded-xl mt-4">
                <div className=" text-white font-semibold">
                    <FundViewOutlined className=" text-lg" />
                    <span className="text-white font-semibold ml-3">Developer settings</span>
                </div>
                <ArrowRightOutlined className="text-[#9f9fa1] text-lg" />
            </div>
        </div>
    </div >
}
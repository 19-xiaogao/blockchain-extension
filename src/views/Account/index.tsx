import React from "react";
import { NavBar } from 'antd-mobile'
import { CloseOutlined, PlusOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"

export default function Account() {
    const navigate = useNavigate()
    const back = () => {
        console.log("click back icon");

    }
    return <div className="w-full h-full">
        <NavBar  backArrow={<CloseOutlined className=" text-font-gray text-xl mb-2"  onClick={() =>navigate('/')} />} onBack={back} right={<PlusOutlined className=" text-font-gray text-xl" />}>
            <span className=" text-white text-base">Mainnet accounts</span>
        </NavBar>
        <div className="h-full p-3 overflow-y-auto">
            <div className="bg-coin-bg rounded-2xl w-full p-3 flex items-center justify-between hover:bg-coin-hover cursor-pointer transition-all duration-100">
                <div className="flex items-center">
                    <img src="https://dv3jj1unlp2jl.cloudfront.net/128/color/eth.png" className="w-10 h-15" alt="" />
                    <div className="ml-3">
                        <div className="text-white  text-lg">Account 1</div>
                        <div className="text-dark-gray">0.0ETH</div>
                    </div>
                </div>
            </div>
            <div className=" mt-4 bg-coin-bg rounded-2xl w-full p-3 flex items-center justify-between hover:bg-coin-hover cursor-pointer transition-all duration-100">
                <div className="flex items-center">
                    <img src="https://dv3jj1unlp2jl.cloudfront.net/128/color/eth.png" className="w-10 h-15" alt="" />
                    <div className="ml-3">
                        <div className="text-white  text-lg">Account 2</div>
                        <div className="text-dark-gray">0.0ETH</div>
                    </div>
                </div>
            </div>
            <div className=" mt-4 bg-coin-bg rounded-2xl w-full p-3 flex items-center justify-between hover:bg-coin-hover cursor-pointer transition-all duration-100">
                <div className="flex items-center">
                    <img src="https://dv3jj1unlp2jl.cloudfront.net/128/color/eth.png" className="w-10 h-15" alt="" />
                    <div className="ml-3">
                        <div className="text-white  text-lg">Account 3</div>
                        <div className="text-dark-gray">0.0ETH</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
import { ReloadOutlined, WalletOutlined } from "@ant-design/icons";
import { Checkbox } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import Steps from "~components/Steps";
export default function IntroduceView() {
    const navigate = useNavigate()

    return <div className="flex h-full">
        <div className="w-[70%] flex flex-col  justify-center pl-28">
            <Steps index={2} />
            <div className="text-2xl text-white font-semibold mt-5">New wallet</div>
            <div className="text-[#949496] text-sm  mt-3 w-3/4">Enter a password to protect your wallet</div>
            <div className="mt-5">
                <input type="password" className=" bg-black w-3/4  h-14 border border-[#1d1f22] hover:border-[#404043] focus:border-[#707072]  rounded-md pl-5  pr-5 text-base text-white" placeholder="Password" />
                <input type="password" className="mt-4 bg-black w-3/4  h-14 border border-[#1d1f22] hover:border-[#404043] focus:border-[#707072]  rounded-md pl-5  pr-5 text-base text-white" placeholder="Password" />
            </div>
            <div
                onClick={() => navigate('/newWallet')}
                className="h-12 ml-4 mr-4 mt-10 rounded-3xl text-center  w-1/4 border-none  text-white bg-orange hover:bg-[#bd512e]  hover:!text-white
                flex items-center justify-center cursor-pointer text-base">
                <span>Create wallet</span>
            </div>
        </div>
        <div className="w-[30%] h-full bg-[#18183c]" >X</div>
    </div>
}
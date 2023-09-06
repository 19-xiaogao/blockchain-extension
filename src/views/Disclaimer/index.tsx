import { ReloadOutlined, WalletOutlined } from "@ant-design/icons";
import { Checkbox } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import Steps from "~components/Steps";
export default function IntroduceView() {
    const navigate = useNavigate()

    return <div className="flex h-full">
        <div className="w-[70%] flex flex-col  justify-center pl-28">
            <Steps index={1} />
            <div className="text-2xl text-white font-semibold mt-5">Disclaimer</div>
            <div className="text-[#949496] text-sm  mt-3 w-3/4">X wallet is in Alpha and may experience technical issues or introduce breaking changes from time to time. Please accept this before continuing.</div>
            <div className="mt-5">
                <div className="flex p-7 border border-[#949496] rounded-2xl w-3/4 cursor-pointer">
                    <Checkbox defaultChecked className=" text-lg" />
                    <p className="text-white text-base ml-4">I understand that StarkNet will introduce changes that will affect my existing account(s) (e.g. rendering unusable) if I do not complete account upgrades.</p>
                </div>
                <div className="flex p-7 border border-[#949496] rounded-2xl w-3/4 mt-4 cursor-pointer">
                    <Checkbox defaultChecked className=" text-lg" />
                    <p className="text-white text-base ml-4">I understand that StarkNet may experience performance issues and my transactions may fail for various reasons.</p>
                </div>
            </div>
            <div
                onClick={() => navigate('/newWallet')}
                className="h-12 ml-4 mr-4 mt-10 rounded-3xl text-center  w-1/4 border-none  text-white bg-orange hover:bg-[#bd512e]  hover:!text-white
                flex items-center justify-center cursor-pointer text-base">
                <span> Continue</span>
            </div>
        </div>
        <div className="w-[30%] h-full bg-[#18183c]" >X</div>
    </div>
}
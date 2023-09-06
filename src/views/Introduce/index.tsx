import { ReloadOutlined, WalletOutlined } from "@ant-design/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import Steps from "~components/Steps";
export default function IntroduceView() {
    const navigate = useNavigate()

    return <div className="flex h-full">
        <div className="w-[70%] flex flex-col  justify-center pl-28">
            <Steps index={0} />
            <div className="text-2xl text-white font-semibold mt-5">Welcome to X Wallet</div>
            <div className="text-[#949496] text-sm  mt-3">Enjoy the security of Anfs blockchain network</div>
            <div className="flex mt-5">
                <div onClick={() => navigate('/disclaimer')} className="rounded-2xl bg-[#1d1f22]  w-72 h-32 mr-10 hover:bg-[#28282c] flex flex-col justify-center items-center  cursor-pointer">
                    <WalletOutlined className=" text-orange text-4xl" />
                    <span className="text-white mt-3">Create a new wallet</span>
                </div>
                <div className="rounded-2xl bg-[#1d1f22]  w-72 h-32 mr-10 hover:bg-[#28282c] flex flex-col justify-center items-center  cursor-pointer">
                    <ReloadOutlined className=" text-white text-4xl" />
                    <span className="text-white mt-3">Restore an existing wallet</span>
                </div>
            </div>
        </div>
        <div className="w-[30%] h-full bg-[#18183c]">X</div>
    </div>
}
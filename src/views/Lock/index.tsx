import { GithubOutlined } from "@ant-design/icons";
import { NavBar } from "antd-mobile";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Lock() {
    const navigate = useNavigate()
    const back = () => {
        console.log("click back icon")
    }
    return <div className="w-full h-full p-3">
        <div className="text-right">
            <span className="text-[#88888a] cursor-pointer" onClick={() => navigate('/resetWallet')}>Reset</span>
        </div>
        <div className=" text-center  mt-12">
            <GithubOutlined className="text-white text-8xl" />
            <div className="flex flex-col items-center mt-10">
                <span className="inline-block text-3xl text-white font-bold">
                    Welcome back
                </span>
                <span className="inline-block text-[#88888a]">
                    Unlock your wallet to continue
                </span>
            </div>
            <div className="mt-6">
                <input type="password" className=" bg-black w-full  h-14 border border-[#1d1f22] hover:border-[#707072] focus:border-[#707072]  rounded-md pl-5  pr-5 text-base text-white" placeholder="Password" />
            </div>
        </div>
        <div className="p-3 w-full rounded-2xl bg-orange text-center cursor-pointer mt-40 hover:bg-[#bd512e]">
            <span className="text-white text-base">Unlock</span>
        </div>
    </div>
}
import { GithubOutlined } from "@ant-design/icons";
import { message } from "antd";
import { NavBar } from "antd-mobile";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePasswordExportWallet, setStoragePassword } from "~background"
export default function Lock() {
    const navigate = useNavigate()
    const [password, setPassWord] = useState("")
    const handleInputPassword = (e) => {
        setPassWord(e.target.value.trim())
    }
    const back = () => {
        console.log("click back icon")
    }
    const handleUnLock = async () => {
        const isLock = await usePasswordExportWallet(password)
        console.log(isLock);

        if (isLock) {
            setStoragePassword(password)
            return navigate('/')
        }
        message.warning(' password is error')

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
                <input type="password" onKeyDown={(e) => e.key === 'Enter' && handleUnLock()} value={password} onInput={handleInputPassword} className=" bg-black w-full  h-14 border border-[#1d1f22] hover:border-[#707072] focus:border-[#707072]  rounded-md pl-5  pr-5 text-base text-white" placeholder="Password" />
            </div>
        </div>
        <div onClick={handleUnLock} className="p-3 w-full rounded-2xl bg-orange text-center cursor-pointer mt-40 hover:bg-[#bd512e]">
            <span className="text-white text-base">Unlock</span>
        </div>
    </div>
}
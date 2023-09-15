import React, { useCallback, useEffect, useState } from "react";
import { NavBar } from 'antd-mobile'
import { ArrowLeftOutlined, ArrowRightOutlined, EditOutlined, FundViewOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
import { changeStorageWalletList, exportAddress, getStorageWalletList, setCurrentWalletStorage, setStorageWalletList } from "~background";
import { copyToClipboard, formatAddress } from "~utils";
import useWallet from "~hooks/useWallet";
import { message } from "antd";

const updateArrayObject = (array, targetId, property, value) => {
    return array.map((item) => {
        if (item.address === targetId) {
            return { ...item, [property]: value };
        }
        return item;
    });
};

export default function Account() {
    const navigate = useNavigate()
    const wallet = useWallet()
    const [walletName, setWalletName] = useState(wallet.name)

    useEffect(() => setWalletName(wallet.name), [wallet])

    const handleInput = (e) => setWalletName(e.target.value.trim())

    const handleSetWalletName = async () => {
        await setCurrentWalletStorage({ ...wallet, name: walletName });
        wallet.getWallet()
        message.success('modify success')
        changeStorageWalletList({ ...wallet, name: walletName })
    }

    const back = () => {
        console.log("click back icon");
    }
    return <div className="w-full h-full">
        <NavBar onBack={back} backArrow={<ArrowLeftOutlined onClick={() => navigate(-1)} className=" text-font-gray text-xl  cursor-pointer" />}>
            <span className=" text-white text-base">{wallet.name}</span>
        </NavBar>
        <div className="h-full p-3 overflow-y-auto">
            <img src="https://dv3jj1unlp2jl.cloudfront.net/128/color/eth.png" className="w-16 h-16 m-auto" alt="" />
            <div className="rounded-md border border-[#1d1f22] mt-6">
                <div className="bg-black p-4 flex items-center">
                    <input type="text" onChange={handleInput} onKeyDown={(e) => e.key === 'Enter' && handleSetWalletName()} value={walletName} className="bg-black text-center flex-1 text-white text-base" />
                    <EditOutlined className=" text-white text-base" onClick={handleSetWalletName} />
                </div>
                <div className=" border border-[#1d1f22] text-center p-2 ">
                    <span className="text-[#5a5a5d] cursor-pointer" onClick={() => copyToClipboard(wallet.address)}>
                        {formatAddress(wallet.address)}
                    </span>
                </div>
            </div>
            <div className=" flex items-center justify-between bg-[#1b1d1f] p-4 rounded-xl mt-10 cursor-pointer" onClick={() => navigate('/exportPrivateKey')}>
                <div className=" text-base text-[#bc404b]">
                    Export private  key
                </div>
                <ArrowRightOutlined className="text-[#bc404b] text-lg" />
            </div>

        </div>
    </div>
}
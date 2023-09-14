import React, { useCallback, useState } from "react";
import { NavBar } from 'antd-mobile'
import { CloseOutlined, PlusOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
import { formatAddress } from "~utils";
import AddAccount from "~components/AddAccount"
import useGetWalletList from "~hooks/useGetWalletList";
import * as anfsJs from "anfs-js"
import { message } from "antd";
import useWallet from "~hooks/useWallet";

export default function SendTo() {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const [toAddress, setToAddr] = useState("")
    const { list } = useGetWalletList()
    const wallet = useWallet()
    const back = () => {
        console.log("click back icon");
    }
    const handleSetOpen = (bol: boolean) => {
        setOpen(bol)
    }

    const renderWalletList = useCallback(() => {
        const _list = list.filter(v => v.address != wallet.address)
        return _list.map((v, index) => (<div key={index} onClick={() => navigate(`/send`, { state: { address: v.address } })} className=" mt-4 bg-coin-bg rounded-2xl w-full p-3 flex items-center justify-between hover:bg-coin-hover cursor-pointer transition-all duration-100">
            <div className="flex items-center">
                <img src="https://dv3jj1unlp2jl.cloudfront.net/128/color/eth.png" className="w-10 h-15" alt="" />
                <div className="ml-3">
                    <div className="text-white  text-lg">{v.name}</div>
                    <div className="text-dark-gray">{formatAddress(v.address)}</div>
                </div>
            </div>
        </div>))
    }, [list, wallet])

    const handleInputAddress = (v) => {
        const addr = v.target.value.trim()
        setToAddr(addr)
        if (addr.trim() == '') return
        if (!anfsJs.isAddress(addr)) {
            return message.warning('this string is not address.')
        }
        navigate(`/send`, { state: { address: addr } })
    }

    return <div className="w-full h-full">
        <NavBar backArrow={<CloseOutlined className=" text-font-gray text-xl mb-2" onClick={() => navigate('/')} />} onBack={back}
            right={<PlusOutlined className=" text-font-gray text-xl  cursor-pointer" onClick={() => handleSetOpen(true)} />}>
            <span className=" text-white text-base">Send to</span>
        </NavBar>
        <div className="h-full p-3  pb-14 overflow-y-scroll scrollbar">
            <div>
                <div className="text-lg  text-dark-gray">Recipient</div>
                <input
                    value={toAddress}
                    onChange={handleInputAddress}
                    type="text"
                    className=" text-base appearance-none  hover:border-[#38383b] focus:border-[#656567]  bg-black text-white w-full h-14 block pl-3 pr-2 rounded-xl border border-gray-100 mt-2"
                    placeholder="Address(0x)"
                />
            </div>
            <div className="flex items-center mt-4">
                <div className=" rounded-2xl border border-white p-2 pl-4 pr-4 bg-dark mr-2 cursor-pointer">
                    <span className="text-white">My accounts</span>
                </div>
                <div className="rounded-2xl border border-white p-2 pl-4 pr-4 bg-dark mr-2 cursor-pointer">
                    <span className="text-white">Address book</span>
                </div>
            </div>
            <div className="h-auto ">
                {renderWalletList()}
            </div>
        </div>
        <AddAccount open={open} handleSetOpen={handleSetOpen} />
    </div>
}
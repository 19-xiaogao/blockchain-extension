import React, { useCallback } from "react";
import { NavBar } from 'antd-mobile'
import { CloseOutlined, PlusOutlined, DashOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
import { exportAddress, setCurrentWalletStorage, setStorageWalletList } from "~background";
import { formatAddress } from "~utils";
import useGetWalletList from "~hooks/useGetWalletList";
import SaveMnemonic from "~components/saveMnemonic"

export default function Account() {
    const navigate = useNavigate()
    const { list, getWalletList } = useGetWalletList()
    const back = () => {
        console.log("click back icon");
    }


    const handleAddressClick = async () => {
        const HDWallet = await exportAddress(list.length)
        await setStorageWalletList({ ...HDWallet, name: "Account " + (list.length + 1) })
        getWalletList()
    }

    const handleItemClick = (v) => {
        setCurrentWalletStorage(v)
        navigate('/')
    }

    const renderWalletList = useCallback(() => {

        return list.map((v, index) => (<div key={index} onClick={() => handleItemClick(v)} className=" mt-4 bg-coin-bg rounded-2xl w-full p-3 flex items-center justify-between hover:bg-coin-hover cursor-pointer transition-all duration-100">
            <div className="flex items-center">
                <img src="https://dv3jj1unlp2jl.cloudfront.net/128/color/eth.png" className="w-10 h-15" alt="" />
                <div className="ml-3">
                    <div className="text-white  text-lg">{v.name}</div>
                    <span className="text-font-gray cursor-pointer text-center mt-2  text-base hover:text-white">{formatAddress(v.address)}</span>
                </div>
            </div>
            <div className=" rounded-full w-8 h-8 bg-black text-center leading-7" onClick={(event) => { event.stopPropagation(), navigate('/accountDetail') }}>
                <DashOutlined className=" text-white cursor-pointer" />
            </div>
        </div>))
    }, [list])

    return <div className="w-full h-full">
        <NavBar backArrow={<CloseOutlined className=" text-font-gray text-xl mb-2" onClick={() => navigate('/')} />} onBack={back} right={<PlusOutlined onClick={handleAddressClick} className=" text-font-gray text-xl  cursor-pointer" />}>
            <span className=" text-white text-base">Accounts</span>
        </NavBar>
        <div className="h-full p-3 overflow-y-auto">
            <SaveMnemonic />
            {renderWalletList()}
        </div>
    </div>
}
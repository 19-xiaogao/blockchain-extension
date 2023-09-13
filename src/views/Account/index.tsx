import React, { useCallback, useEffect, useState } from "react";
import { NavBar } from 'antd-mobile'
import { CloseOutlined, PlusOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
import { exportAddress, getStorageWalletList, setCurrentWalletStorage, setStorageWalletList } from "~background";
import { formatAddress } from "~utils";
import useGetWalletList from "~hooks/useGetWalletList";

export default function Account() {
    const navigate = useNavigate()
    const { list, getWalletList } = useGetWalletList()
    const back = () => {
        console.log("click back icon");
    }


    const handleAddressClick = async () => {
        const HDWallet = await exportAddress(list.length)
        await setStorageWalletList(HDWallet)
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
                    <div className="text-white  text-lg">Account {index + 1}</div>
                    <span className="text-font-gray cursor-pointer text-center mt-2  text-base hover:text-white">{formatAddress(v.address)}</span>
                </div>
            </div>
        </div>))
    }, [list])

    return <div className="w-full h-full">
        <NavBar backArrow={<CloseOutlined className=" text-font-gray text-xl mb-2" onClick={() => navigate('/')} />} onBack={back} right={<PlusOutlined onClick={handleAddressClick} className=" text-font-gray text-xl  cursor-pointer" />}>
            <span className=" text-white text-base">Mainnet accounts</span>
        </NavBar>
        <div className="h-full p-3 overflow-y-auto">
            {renderWalletList()}
        </div>
    </div>
}
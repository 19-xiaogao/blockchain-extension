import React, { useEffect, useState } from "react";
import { formatAddress, copyToClipboard } from "~utils"
import { Tooltip } from 'antd';
import { Button } from 'antd';
import { PlusOutlined, SendOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom";
import { getStorageMnemonic, getStoragePassword } from "~background";
import walletCrypto from "~background/crpyto"
import SaveMnemonic from "~components/saveMnemonic"
export default function WalletView() {

    const [address, setAddress] = useState<any>("0xAa5A88bdA5BB06cb73Ee0af753D3f4A2486dd845")

    useEffect(() => {
        getAddress()
    }, [])
    const getAddress = async () => {
        const mnemonic = await getStorageMnemonic()
        const password = await getStoragePassword()
        const wallet = walletCrypto.mnemonicToWallet(walletCrypto.deCryptoMnemonic(mnemonic, password))
        setAddress(wallet.address)
        console.log(wallet, "wallet");
    }

    const navigate = useNavigate()
    // TODO:h-auto and overflow-y-auto bug
    return <div className="h-auto overflow-y-auto">
        <h1 className="text-center font-black text-3xl text-white font-mono mt-9">💵0.12</h1>
        <p className="text-center">
            <Tooltip
                title='Click to copy address'
                placement='bottom'
                mouseEnterDelay={0.05}
            >
                <span onClick={() => (copyToClipboard(address))} className="text-font-gray cursor-pointer text-center mt-2  text-base hover:text-white">{formatAddress(address)}</span>
            </Tooltip>
        </p>
        <div className="flex items-center justify-center mt-4">
            <Button size="large" icon={<PlusOutlined />}
                className="border-none !text-white !text-sm bg-send-bg hover:bg-send-hover hover:text-white flex items-center !rounded-3xl !pl-6 !pr-6">
                Send</Button>
            <Button size="large" icon={<SendOutlined />}
                onClick={() => navigate('/sendTo')}
                className="border-none !text-white !text-sm bg-send-bg hover:bg-send-hover hover:text-white flex items-center !rounded-3xl ml-4 !pl-6 !pr-6"
            >Send</Button>
        </div>
        <div className="mt-5">
            <SaveMnemonic />
            <div onClick={() => navigate('/sendTo')} className="bg-coin-bg rounded-2xl mt-2 w-full p-3 flex items-center justify-between hover:bg-coin-hover cursor-pointer transition-all duration-100">
                <div className="flex items-center">
                    <img src="https://dv3jj1unlp2jl.cloudfront.net/128/color/eth.png" className="w-10 h-15" alt="" />
                    <div className="ml-3">
                        <div className="text-white  text-lg">Ethereum</div>
                        <div className="text-dark-gray">0.0ETH</div>
                    </div>
                </div>
                <div className="text-dark-gray text-base">💵0.12</div>
            </div>
            <div className="flex  justify-center mt-2">
                <Button size="large" icon={<PlusOutlined />}
                    onClick={() => navigate('/addToken')}
                    className="border-none !text-dark-gray !text-sm bg-add-coin
                     hover:bg-send-hover hover:!text-white flex items-center !rounded-3xl !pl-3 !pr-3">
                    New Token</Button>
            </div>
        </div>
    </div>
}
import React, { useEffect, useState } from "react";
import { NavBar } from 'antd-mobile'
import { CloseOutlined, ArrowLeftOutlined, ArrowDownOutlined, LoadingOutlined } from "@ant-design/icons"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { formatAddress } from "~utils";
import useGetAddressBalance from "~hooks/useGetAddressBalance";
import useWallet from "~hooks/useWallet";
export default function SendTo() {
    const navigate = useNavigate()
    const location = useLocation();
    const [amount, setAmount] = useState("");
    const wallet = useWallet()
    const toAddress = location.state?.address;

    const [open, setOpen] = useState(false)
    const balance = useGetAddressBalance(wallet.address)

    const handleAmount = e => {
        setAmount(e.target.value.trim())
    }
    const handleTrading = () => {
        navigate(`/trading`, { state: { toAddress: toAddress, amount } })

    }

    const back = () => {
        console.log("click back icon");
    }
    const handleSetOpen = (bol: boolean) => {
        setOpen(bol)
    }
    useEffect(() => {
        console.log(balance);

    }, [])
    return <div className="w-full h-full">
        <NavBar backArrow={<ArrowLeftOutlined className=" text-font-gray text-xl mb-2" onClick={() => navigate('/sendTo')} />} onBack={back}
            right={<CloseOutlined className=" text-font-gray text-xl  cursor-pointer" onClick={() => navigate('/')} />}>
            <span className=" text-white text-base">Send</span>
        </NavBar>
        <div className="p-3 ">
            <div>
                <div className="text-lg  text-dark-gray">Asset</div>
                <div className="bg-coin-bg h-20 rounded-xl overflow-hidden mt-2  pl-2 pr-2 flex items-center">
                    <div className="flex-1  pl-3 pr-2">
                        <input
                            value={amount}
                            onInput={handleAmount}
                            type="text"
                            className="h-10  appearance-none  
                            bg-coin-bg  w-full block border border-gray-100 text-xl text-white"
                            placeholder="0"
                        />
                        <LoadingOutlined className=" text-orange" />
                    </div>
                    <div>
                        <div onClick={() => navigate('/selectAsset')} className="text-white flex items-center  bg-black rounded-3xl w-auto p-1 justify-around  cursor-pointer">
                            <img src="https://dv3jj1unlp2jl.cloudfront.net/128/color/eth.png" className="w-6 h-6" alt="" />
                            <span>ETH</span>
                            <ArrowDownOutlined />
                        </div>
                        <div className="text-dark-gray mt-1 text-xs cursor-pointer">
                            Balance:  {balance} ETH
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-9">
                <div className="text-lg  text-dark-gray" >Recipient</div>
                <div onClick={() => navigate('/sendTo')} className=" mt-2 bg-coin-bg rounded-2xl w-full p-3 flex items-center justify-between hover:bg-coin-hover cursor-pointer transition-all duration-100">
                    <div className="flex items-center">
                        <img src="https://dv3jj1unlp2jl.cloudfront.net/128/color/eth.png" className="w-10 h-15" alt="" />
                        <div className="ml-3">
                            <div className="text-white  text-lg">Account 2</div>
                            <div className="text-dark-gray">{formatAddress(wallet.address)}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                onClick={handleTrading}
                className=" h-12  mt-52 rounded-3xl text-center w-hull border-none  text-white bg-orange  hover:!text-white
                    flex items-center justify-center cursor-pointer text-base">
                <span> Review Send</span>
            </div>
        </div>

    </div>
}
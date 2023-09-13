import React, { useState } from "react";
import { formatAddress } from "~utils";
import { SendOutlined } from "@ant-design/icons"
import { useLocation, useNavigate } from "react-router-dom";
import useGetAddress from "~hooks/useGetAddress";
import useGetStorageCurrentRPC from "~hooks/useGetStorageCurrentRPC";
import useGetGasPrice from "~hooks/useGetGasPrice";

export default function Trading() {
    const navigate = useNavigate()
    const location = useLocation();
    const address = useGetAddress();
    const { rpc } = useGetStorageCurrentRPC()

    const toAddress = location.state?.toAddress;
    const amount = location.state?.amount;
    const { gasPrice } = useGetGasPrice({ from: address, to: toAddress, value: amount, chainId: rpc.chainId })
    const [isShowDetail, setIsShowDetail] = useState(true)
    return <div className="p-4 relative overflow-y-scroll scrollbar  h-full overflow-x-hidden pb-20">
        <div className="flex justify-center text-base">
            <span className="text-white">Account 1</span>
            <span className=" ml-2 text-gray">({formatAddress(address)})</span>
        </div>
        <div className=" flex flex-col items-center justify-center mt-8">
            <div className="bg-[#38383b] rounded-full w-16  h-16 flex items-center justify-center relative ">
                <SendOutlined className=" text-white text-xl" />
                <img className="w-6 h-6 absolute bottom-0 right-0" src="https://dv3jj1unlp2jl.cloudfront.net/128/color/eth.png" alt="" />
            </div>
            <span className=" text-lg text-white mt-2">Send {amount} ETH</span>
        </div>

        <div className="rounded-xl w-full mt-5 overflow-hidden">
            <div className="bg-[#242427] p-2  text-[#727274]">Balance change</div>
            <div className="p-2 pt-3 pb-3 flex items-center  justify-between bg-[#1b1d1f] border-t border-black">
                <div className="flex  items-center">
                    <img src="https://dv3jj1unlp2jl.cloudfront.net/128/color/eth.png" className="w-7 h-7 mr-3" alt="" />
                    <span className=" text-white">Ethereum</span>
                </div>
                <div className=" text-[#a32939]">{amount}ETH</div>
            </div>
        </div>
        <div className={`rounded-xl w-full mt-2 overflow-hidden transition-height duration-200 ${isShowDetail ? 'h-20' : 'h-0 mt-0'}`} >
            <div className="bg-[#242427] p-2  text-[#727274]">Actions</div>
            <div className="p-2 pt-3 pb-3 flex items-center  justify-between bg-[#1b1d1f] border-t border-black">
                <span className=" text-white">Transfer</span>
                <div className=" text-[#707072]">{formatAddress(toAddress)}</div>
            </div>
        </div>
        <div className="rounded-xl w-full mt-2 overflow-hidden">
            <div className="p-2 pt-3 pb-3 flex items-center  justify-between bg-[#1b1d1f]">
                <div className=" text-[#656568]">From</div>
                <div className=" text-white"> {formatAddress(address)}</div>
            </div>
            <div className="p-2 pt-3 pb-3 flex items-center  justify-between bg-[#1b1d1f]">
                <div className=" text-[#656568]">To</div>
                <div className=" text-white">{formatAddress(toAddress)}</div>
            </div>
            <div className="p-2 pt-3 pb-3 flex items-center  justify-between bg-[#1b1d1f]">
                <div className=" text-[#656568]">Network</div>
                <div className=" text-white">{rpc.name}</div>
            </div>
            <div className="p-2 pt-3 pb-3 flex items-center  justify-between bg-[#1b1d1f]">
                <div className=" text-[#656568]">Network fees</div>
                <div className=" text-white"> ≈ {gasPrice}ETH</div>
            </div>
        </div>
        <div className=" text-center mt-2">
            <span className="text-white cursor-pointer" onClick={() => setIsShowDetail(!isShowDetail)}>View more details</span>
        </div>
        <div className=" fixed w-full  right-0  pl-4 pr-4 bottom-0 bg-[#101014] z-10 pt-2 pb-2">
            <div className="w-full flex items-center justify-between">
                <div
                    onClick={() => navigate(-1)}
                    className="p-3 w-[49%] rounded-2xl w-hull border-none  text-white bg-[#1d1f22]  hover:!text-white
                    cursor-pointer text-base text-center">
                    <span> Cancel</span>
                </div>
                <div
                    className="p-3 w-[49%] rounded-2xl text-center w-hull border-none  text-white bg-orange  hover:!text-white
                    cursor-pointer text-base">
                    <span> Confirm</span>
                </div>
            </div>
        </div>
    </div>
}
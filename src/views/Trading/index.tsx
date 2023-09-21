import React, { useState } from "react";
import { formatAddress } from "~utils";
import { SendOutlined } from "@ant-design/icons"
import { useLocation, useNavigate } from "react-router-dom";
import useWallet from "~hooks/useWallet";
import useGetStorageCurrentRPC from "~hooks/useGetStorageCurrentRPC";
import useGetGasPrice from "~hooks/useGetGasPrice";
import { Button, message } from "antd";
import { sendTransaction, addTxRecordsStorage, sendERC20Transaction } from "~background";
import * as anfsJs from "anfs-js"

export default function Trading() {
    const navigate = useNavigate()
    const location = useLocation();
    const wallet = useWallet();
    const { rpc } = useGetStorageCurrentRPC()
    const toAddress = location.state?.toAddress;
    const amount = location.state?.amount;
    const contractAddress = location.state?.contractAddress;
    const symbol = location.state?.symbol;
    const { gasPrice } = useGetGasPrice({ from: wallet.address, to: toAddress, value: amount, chainId: rpc.chainId })
    const [isShowDetail, setIsShowDetail] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleConfigClick = () => {

        if (contractAddress) {
            setLoading(true)
            sendERC20Transaction(contractAddress, toAddress, Number(amount)).then(res => {
                // TODO: 如果发送是合约交易 存储合约地址 后续查询 合约的event事件得到 转账的量。
                addTxRecordsStorage({
                    type: "Send",
                    tx: res.hash,
                    from: wallet.address,
                    to: res.to,
                    netWork: rpc.name,
                    netWorkFees: gasPrice,
                    nonce: res.nonce,
                    success: "Pending",
                    chainId: String(res.chainId),
                    value: anfsJs.formatEther(res.value),
                    // contractAddress: contractAddress
                })
                message.success('transaction is success');
                navigate('/records')
                setLoading(false);
            })
        } else {
            setLoading(true)
            sendTransaction(toAddress, Number(amount) - Number(gasPrice)).then(res => {
                console.log(res);
                addTxRecordsStorage({
                    type: "Send",
                    tx: res.hash,
                    from: wallet.address,
                    to: res.to,
                    netWork: rpc.name,
                    netWorkFees: gasPrice,
                    nonce: res.nonce,
                    success: "Pending",
                    chainId: String(res.chainId),
                    value: anfsJs.formatEther(res.value)
                })
                message.success('transaction is success');
                navigate('/records')
                setLoading(false);
            })
        }

    }

    return <div className="p-4 relative overflow-y-scroll scrollbar  h-full overflow-x-hidden pb-20">
        <div className="flex justify-center text-base">
            <span className="text-white">{wallet.name}</span>
            <span className=" ml-2 text-gray">({formatAddress(wallet.address)})</span>
        </div>
        <div className=" flex flex-col items-center justify-center mt-8">
            <div className="bg-[#38383b] rounded-full w-16  h-16 flex items-center justify-center relative ">
                <SendOutlined className=" text-white text-xl" />
                <img className="w-6 h-6 absolute bottom-0 right-0" src="https://dv3jj1unlp2jl.cloudfront.net/128/color/eth.png" alt="" />
            </div>
            <span className=" text-lg text-white mt-2">Send {amount}  {contractAddress ? symbol : 'ETH'} </span>
        </div>

        <div className="rounded-xl w-full mt-5 overflow-hidden">
            <div className="bg-[#242427] p-2  text-[#727274]">Balance change</div>
            <div className="p-2 pt-3 pb-3 flex items-center  justify-between bg-[#1b1d1f] border-t border-black">
                <div className="flex  items-center">
                    <img src="https://dv3jj1unlp2jl.cloudfront.net/128/color/eth.png" className="w-7 h-7 mr-3" alt="" />
                    <span className=" text-white">Ethereum</span>
                </div>
                <div className=" text-[#a32939]">{amount} {contractAddress ? symbol : 'ETH'}</div>
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
                <div className=" text-white"> {formatAddress(wallet.address)}</div>
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
                <Button
                    onClick={() => navigate("/")}
                    className="p-3 w-[49%] h-full rounded-2xl w-hull border-none  text-white bg-[#1d1f22]  hover:!text-white
                    cursor-pointer text-base text-center">
                    <span> Cancel</span>
                </Button>
                <Button
                    onClick={handleConfigClick}
                    loading={loading}
                    className="p-3 w-[49%]  h-full rounded-2xl text-center w-hull border-none  text-white bg-orange  hover:!text-white
                    cursor-pointer text-base">
                    <span> Confirm</span>
                </Button>
            </div>
        </div>
    </div>
}
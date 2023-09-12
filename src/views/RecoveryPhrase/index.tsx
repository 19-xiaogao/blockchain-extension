import React, { useEffect, useState } from "react";
import { NavBar } from 'antd-mobile'
import { CloseOutlined, ArrowLeftOutlined, CopyFilled } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
import { copyToClipboard } from "~utils";
import { exportMnemonic } from "~background";

export default function RecoveryPhrase() {
    const navigate = useNavigate()
    const [mnemonic, setMnemonic] = useState("")

    useEffect(() => {
        getMnemonic()
    }, [])
    const getMnemonic = async () => {
        const _mnemonic = await exportMnemonic()
        setMnemonic(_mnemonic)
    }
    const back = () => {
        console.log("click back icon");
    }
    return <div className="w-full h-full">
        <NavBar backArrow={<ArrowLeftOutlined className=" text-font-gray text-xl mb-2" onClick={() => navigate('/')} />} onBack={back}
            right={<CloseOutlined className=" text-font-gray text-xl  cursor-pointer" />}
        >
            <span className=" text-white text-base">Recovery Phrase</span>
        </NavBar>
        <div className="p-5 mt-5">
            <p className=" text-white text-base">Write these words down on paper. It is unsafe to save them on you computer.</p>

            <textarea value={mnemonic} disabled name="" className=" w-full h-36 bg-[#363637] mt-5 text-base  rounded-md text-white pl-2 pr-2 pt-2"></textarea>
            <p className=" text-[#f5c258] mt-5 text-center">We do not recommend copying your recovery phrase to you clipboard. It can leave it susceptible to exploit.</p>
            <div className=" text-center mt-5 flex items-center justify-center">
                <div className=" rounded-lg bg-[#4c4c4f] pl-1 pr-1 cursor-pointer" onClick={() => copyToClipboard(mnemonic)}>
                    <span className=" text-white ">copy</span>
                    <CopyFilled className=" text-white ml-1 mb-1" />
                </div>
            </div>
            <div className="p-3 w-full rounded-2xl bg-[#373738] text-center cursor-pointer  mt-24" onClick={() => navigate('/savePhrase')}>
                <span className="text-white text-base">Continue</span>
            </div>
        </div>
    </div>
}
import React, { useEffect, useState } from "react";
import { NavBar } from 'antd-mobile'
import { CloseOutlined, ArrowLeftOutlined, CopyFilled } from "@ant-design/icons"
import { Tag } from "antd"
import { useNavigate } from "react-router-dom"
import { copyToClipboard, formatAddress } from "~utils";
import { Tooltip } from "antd";
import { exportWallet } from "~background";
const address = "0xAa5A88bdA5BB06cb73Ee0af753D3f4A2486dd845"

export default function RecoveryPhrase() {
    const navigate = useNavigate()
    const [mnemonic, setMnemonic] = useState("")

    useEffect(() => {
        getMnemonic()
    }, [])
    const getMnemonic = async () => {
        const _mnemonic = await exportWallet()
        setMnemonic(_mnemonic)
    }
    return <div className="w-full h-full p-2">
        <p className=" text-3xl text-white  mt-6 font-semibold">Have you written down your recovery phrase?</p>
        <p className="text-white mt-28 text-base text-start">If you lose your recovery phrase or someone steals it, you will lose access to your funds.</p>
        <div className=" flex items-center justify-between fixed bottom-4">
            <div className="bg-[#363637] text-white rounded-3xl w-[40vw] text-center p-3" onClick={() => navigate('/')}>Yes</div>
            <div className="bg-[#363637] text-white rounded-3xl w-[40vw] text-center p-3 ml-10" onClick={() => navigate('/recoveryPhrase')}>No</div>

        </div>
    </div>
}
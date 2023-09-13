import React, { useCallback, useState } from "react";
import { NavBar } from 'antd-mobile'
import { ArrowLeftOutlined, CloseOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
import { deCurrentHDWalletPrivateKey } from "~background";
import { message } from "antd";
import { copyToClipboard } from "~utils";

export default function Account() {
    const navigate = useNavigate()
    const [priv, setPriv] = useState("")
    const [password, setPassword] = useState('')
    const handleExportPriv = async () => {
        const privKey = await deCurrentHDWalletPrivateKey(password)
        console.log(privKey, "privKey");

        try {
            const privKey = await deCurrentHDWalletPrivateKey(password)
            console.log(privKey, "privKey");

            if (!privKey) setPriv('')
            setPriv(privKey as string)
        } catch (error) {
            setPriv('')
            message.warning('password error')
        }
    }
    const handleInputPas = (e) => {
        setPassword(e.target.value)
    }
    const renderButton = useCallback((handleExportPriv) => {
        return !priv ? <div
            onClick={handleExportPriv}
            className="h-12 ml-4 mr-4 mt-52 rounded-3xl text-center border-none  text-white bg-[#373737] hover:!text-white
        flex items-center justify-center cursor-pointer text-base">
            <span> Export</span>
        </div>
            : <div
                onClick={() => navigate('/setting')}
                className="h-12 ml-4 mr-4 mt-56 rounded-3xl text-center border-none  text-white bg-[#373737] hover:!text-white
     flex items-center justify-center cursor-pointer text-base">
                <span> Done</span>
            </div>
    }, [priv])

    const renderDecs = useCallback(() => {
        return !priv ? <p className="text-white mt-4 text-base text-start">Enter your password to export your private key.</p>
            : <p className="text-white mt-4 text-base text-start">This is your private key(click to copy)</p>

    }, [priv])

    const renderPriv = useCallback((password, handleInputPas) => {
        return !priv ? <input value={password} onInput={handleInputPas} type="password" placeholder="Password" className=" text-white border border-[#707072] rounded-md bg-black w-full block p-4  mt-16" />
            : <div className="bg-[#333332] w-full p-3 mt-10 rounded-md  break-words h-20 text-white leading-2 cursor-pointer text-base" onClick={() => copyToClipboard(priv)}>
                {priv}
            </div>
    }, [priv])
    return <div className="w-full h-full">
        <NavBar
            backArrow={
                <ArrowLeftOutlined
                    className=" text-font-gray text-xl mb-2"
                    onClick={() => navigate("/accountDetail")}
                />
            }
            right={<CloseOutlined
                className=" text-font-gray text-xl mb-2"
                onClick={() => navigate("/accountDetail")}
            />}
        >
        </NavBar>
        <div className="h-full p-3 w-full">
            <p className=" text-3xl text-white  mt-2 font-semibold">Export Private Key</p>
            {renderDecs()}
            {renderPriv(password, handleInputPas)}
            {renderButton(handleExportPriv)}
        </div>
    </div>
}
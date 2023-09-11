import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Steps from "~components/Steps";
import walletCrypto from "~background/crpyto"
import { Button } from "antd";
import { setStorageMnemonic, setStoragePassword } from "~background"

export default function IntroduceView() {
    const navigate = useNavigate()
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("")

    const handlePasswordInput = (v) => {
        setPassword(v.target.value)
    }
    const handleNewPasswordInput = (v) => {
        setNewPassword(v.target.value)
    }
    const verifyPassword = useMemo(() => password === newPassword && password != '', [password, newPassword])

    const handleCreateWallet = async () => {
        const enCryptoMnemonic = walletCrypto.encryptMnemonic(walletCrypto.createMnemonic(), password)
        await setStorageMnemonic(enCryptoMnemonic)
        await setStoragePassword(password)
        navigate('/finish')
    }

    return <div className="flex h-full">
        <div className="w-[70%] flex flex-col  justify-center pl-28">
            <Steps index={2} />
            <div className="text-2xl text-white font-semibold mt-5">New wallet</div>
            <div className="text-[#949496] text-sm  mt-3 w-3/4">Enter a password to protect your wallet</div>
            <div className="mt-5">
                <input type="password" value={password} onInput={(v) => handlePasswordInput(v)} className=" bg-black w-3/4  h-14 border border-[#1d1f22] hover:border-[#404043] focus:border-[#707072]  rounded-md pl-5  pr-5 text-base text-white" placeholder="Password" />
                <input type="password" value={newPassword} onInput={(v) => handleNewPasswordInput(v)} className="mt-4 bg-black w-3/4  h-14 border border-[#1d1f22] hover:border-[#404043] focus:border-[#707072]  rounded-md pl-5  pr-5 text-base text-white" placeholder="Repeat password" />
            </div>
            <Button
                onClick={handleCreateWallet}
                className={`h-12 ml-4 mr-4 mt-10 rounded-3xl text-center  w-1/4 border-none  text-white hover:!text-white
                flex items-center justify-center cursor-pointer text-base ${!verifyPassword ? 'bg-[#64372a]' : 'bg-orange hover:bg-[#bd512e]'}`}>
                <span>Create wallet</span>
            </Button>
        </div>
        <div className="w-[30%] h-full bg-[#18183c]" >X</div>
    </div>
}
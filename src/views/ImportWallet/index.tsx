import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setTemMneStorage } from "~background";
import Steps from "~components/Steps";
export default function IntroduceView() {
    const [mnemonic, setMnemonic] = useState("")
    const navigate = useNavigate()
    const handleInput = (e) => setMnemonic(e.target.value.trim())
    return <div className="flex h-full">
        <div className="w-[70%] flex flex-col  justify-center pl-28">
            <Steps index={1} />
            <div className="text-2xl text-white font-semibold mt-5">Restore accounts</div>
            <div className="text-[#949496] text-sm  mt-3">Enter each of the 12 words from your recovery phrase separated by a space</div>
            <div className="mt-5">
                <textarea value={mnemonic} onInput={handleInput} name="" id="" className="bg-[#1d1f22] w-3/4 h-32 text-white p-4 text-base rounded-md" placeholder="import mnemonic phrase restore account and Space off."></textarea>
            </div>
            <div
                onClick={() => { navigate('/newWallet?type=import'), setTemMneStorage(mnemonic) }}
                className="h-12 ml-4 mr-4 mt-10 rounded-3xl text-center  w-1/4 border-none  text-white bg-orange hover:bg-[#bd512e]  hover:!text-white
                flex items-center justify-center cursor-pointer text-base">
                <span> Continue</span>
            </div>
        </div>
        <div className="w-[30%] h-full bg-[#18183c]" >X</div>
    </div>
}
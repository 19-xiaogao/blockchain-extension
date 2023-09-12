import React from "react";
import { useNavigate } from "react-router-dom"
import { setStoragePhrase } from "~background";

export default function RecoveryPhrase() {
    const navigate = useNavigate()

    const handleSavePhrase = () => {
        setStoragePhrase("true")
        navigate('/')
    }
    return <div className="w-full h-full p-2">
        <p className=" text-3xl text-white  mt-6 font-semibold">Have you written down your recovery phrase?</p>
        <p className="text-white mt-28 text-base text-start">If you lose your recovery phrase or someone steals it, you will lose access to your funds.</p>
        <div className=" flex items-center justify-between fixed bottom-4">
            <div className="bg-[#363637] text-white rounded-3xl w-[40vw] text-center p-3 cursor-pointer" onClick={handleSavePhrase}>Yes</div>
            <div className="bg-[#363637] text-white rounded-3xl w-[40vw] text-center p-3 cursor-pointer ml-10" onClick={() => navigate('/recoveryPhrase')}>No</div>

        </div>
    </div>
}
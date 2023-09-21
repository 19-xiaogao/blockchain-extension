import React from "react";
import { useNavigate } from "react-router-dom"
import { removeContractStorage, removeStorageMnemonic, removeStoragePassword, removeStoragePhrase, removeStorageWalletList, removeTxRecordsStorage } from "~background"
export default function ResetWallet() {
    const navigate = useNavigate();

    const handleSetResetWallet = async () => {
        await removeStorageMnemonic()
        await removeStoragePassword()
        await removeStorageWalletList()
        await removeStoragePhrase()
        await removeTxRecordsStorage()
        await removeContractStorage()
        navigate('/introduce')
    }
    return <div className="p-5 mt-5">
        <h1 className=" text-2xl text-white font-semibold">Reset wallet</h1>
        <div className="mt-10 text-white">If you reset your wallet, the only way to recover it is with your 12-word seed phrase.
            Make sure to back it up from the Argent X settings and save it somewhere securely before resetting the extension</div>

        <div className="flex items-center mt-80 justify-between">
            <div
                onClick={() => navigate('/lock')}
                className="h-12 w-[48%] rounded-2xl text-center  border-none  text-white bg-[#363637]
                         hover:!text-white
                     flex items-center justify-center cursor-pointer text-base">
                <span> Cancel</span>
            </div>
            <div
                onClick={handleSetResetWallet}
                className="h-12  w-[48%] rounded-2xl text-center  border-none 
                         text-white bg-[#b1322e]  hover:!text-white
                     flex items-center justify-center cursor-pointer text-base">
                <span> Reset Wallet</span>
            </div>
        </div>
    </div>
}
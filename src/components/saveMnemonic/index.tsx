import React from "react";
import { useNavigate } from "react-router-dom";
import { LockOutlined } from "@ant-design/icons"
export default function SaveMnemonic() {
    const navigate = useNavigate()

    return <div onClick={() => navigate('/sendTo')} className="bg-[#3f2107] rounded-2xl w-full p-3 flex items-center justify-between hover:bg-[#644413] cursor-pointer transition-all duration-100">
        <div className="flex items-center">
            <LockOutlined className=" text-white text-2xl" />
            <div className="ml-3">
                <div className="text-white  text-base">Set up account recovery</div>
                <div className="text-[#735d4a]">Click here to secure your assets</div>
            </div>
        </div>
        {/* <div className="text-dark-gray text-base">💵0.12</div> */}
    </div>
}
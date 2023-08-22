import { ArrowLeftOutlined, CloseOutlined, LockFilled } from "@ant-design/icons";
import { NavBar } from "antd-mobile";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Setting() {
    const navigate = useNavigate()
    const back = () => {
        console.log("click back icon")
    }
    return <div>
        <NavBar
            backArrow={
                <LockFilled
                    className=" text-[#9f9fa1] text-xl mb-2"
                    onClick={() => navigate('/lock')}
                />
            }
            right={<CloseOutlined className=" text-[#9f9fa1] text-xl  cursor-pointer" onClick={() => navigate("/")} />}
            onBack={back}>
            <span className="text-white text-base">Settings</span>
        </NavBar>

    </div>
}
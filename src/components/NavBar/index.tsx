import React from 'react';
import { NavBar } from 'antd-mobile'
import { CloseOutlined, PlusOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"

export default function NavBarCom() {
    const navigate = useNavigate()
    const back = () => {
        console.log("click back icon");

    }
    return (<NavBar backArrow={<CloseOutlined className=" text-font-gray text-xl mb-2" onClick={() => navigate('/')} />} onBack={back} right={<PlusOutlined className=" text-font-gray text-xl  cursor-pointer" />}>
        <span className=" text-white text-base">Send to</span>
    </NavBar>)
}
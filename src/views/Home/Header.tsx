import { SettingOutlined, CaretDownOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
import React from "react";
import { Dropdown } from "antd";
import DropdownRender from "~components/DropdownComponents"
import usePRC from "~hooks/usePRC"
export default function Header() {
    const navigate = useNavigate()
    const { currentRPC, handleSetRPC } = usePRC()

    const handleClick = async (val) => {
        handleSetRPC(val)

    }
    return <div className="h-5 w-full flex justify-between items-center">
        <div onClick={() => navigate('/account')} className="h-full flex items-center  p-4 rounded-xl bg-dark-200 cursor-pointer hover:bg-dark-100">
            <span className="text-white mr-1">Account 1</span>
            <CaretDownOutlined className=" text-white" />
        </div>
        <div className="h-full flex items-center">
            <Dropdown dropdownRender={(menu) => <DropdownRender onclick={handleClick} />} placement="bottomLeft" >
                <div className="h-full flex items-center mr-2 p-4 rounded-xl bg-dark-200 cursor-pointer hover:bg-dark-100">
                    <span className="text-white mr-2">{currentRPC.name}</span>
                    <span className="w-2 h-2 bg-green rounded-full"></span>
                </div>
            </Dropdown>
            <SettingOutlined className="text-[#848587] text-2xl cursor-pointer hover:text-white" onClick={() => navigate('/setting')} />
        </div>
    </div>
}
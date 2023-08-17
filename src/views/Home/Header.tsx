import { SettingOutlined, CaretDownOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
import React from "react";
import { Dropdown, type MenuProps } from "antd";

const DropdownRender = ({ onclick }) => {

    return <div className="rounded-lg  overflow-hidden bg-coin-hover w-56">
        <div className="flex items-center cursor-pointer justify-end pt-1 pb-1 hover:bg-send-bg p-2 pr-4 rounded-lg" onClick={() => onclick("=-=")}>
            <div>
                <p className="text-right text-dropdown m-0">Localhost 5050</p>
                <p className="text-right text-xs text-dark-gray m-0">http://localhost:505</p>
            </div>
            <span className="w-2 h-2 bg-red rounded-full ml-2"></span>
        </div>
        <div className="flex items-center cursor-pointer justify-end pt-1 pb-1 hover:bg-send-bg p-2 pr-4 rounded-lg">
            <div>
                <p className="text-right text-dropdown m-0">Localhost 5050</p>
                <p className="text-right text-xs text-dark-gray m-0">http://localhost:505</p>
            </div>
            <span className="w-2 h-2 bg-red rounded-full ml-2"></span>
        </div>

        <div className="flex items-center cursor-pointer justify-end pt-1 pb-1 hover:bg-send-bg p-2 pr-4 rounded-lg">
            <div>
                <p className="text-right text-dropdown m-0">Localhost 5050</p>
                <p className="text-right text-xs text-dark-gray m-0">http://localhost:505</p>
            </div>
            <span className="w-2 h-2 bg-red rounded-full ml-2"></span>
        </div>
    </div>
}
export default function Header() {
    const navigate = useNavigate()
    const handleClick = (val) => {
        console.log(val);
    }
    return <div className="h-5 w-full flex justify-between items-center">
        <div onClick={() => navigate('/account')} className="h-full flex items-center  p-4 rounded-xl bg-dark-200 cursor-pointer hover:bg-dark-100">
            <span className="text-white mr-1">Account 1</span>
            <CaretDownOutlined className=" text-white" />
        </div>
        <div className="h-full flex items-center">
            <Dropdown dropdownRender={(menu) => <DropdownRender onclick={handleClick} />} placement="bottomLeft" >
                <div className="h-full flex items-center mr-2 p-4 rounded-xl bg-dark-200 cursor-pointer hover:bg-dark-100">
                    <span className="text-white mr-2">Mainnet</span>
                    <span className="w-2 h-2 bg-green rounded-full"></span>
                </div>
            </Dropdown>
            <SettingOutlined className="text-[#848587] text-2xl cursor-pointer hover:text-white" />
        </div>
    </div>
}
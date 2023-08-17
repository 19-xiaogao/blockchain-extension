import { SettingOutlined, CaretDownOutlined } from "@ant-design/icons"
import React from "react";
export default function Header() {
    return <div className="h-5 w-full flex justify-between items-center">
        <div className="h-full flex items-center  p-4 rounded-xl bg-dark-200 cursor-pointer hover:bg-dark-100">
            <span className="text-white mr-1">Account 1</span>
            <CaretDownOutlined color="#fff" />
        </div>
        <div className="h-full flex items-center">
            <div className="h-full flex items-center mr-2 p-4 rounded-xl bg-dark-200 cursor-pointer hover:bg-dark-100">
                <span className="text-white mr-2">Mainnet</span>
                <span className="w-2 h-2 bg-green rounded-full"></span>
            </div>
            <SettingOutlined color="#848587" className="text-2xl cursor-pointer hover:text-white" />
        </div>
    </div>
}
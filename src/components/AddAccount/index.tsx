import { CloseOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons"
import { Drawer } from "antd"
import { NavBar } from "antd-mobile"
import React from "react"
import { useNavigate } from "react-router-dom"

export default function AddAccount({ open, handleSetOpen }: { open: boolean, handleSetOpen: Function }) {
    const navigate = useNavigate()
    const back = () => {
        console.log("click back icon")
    }
    return (
        <>
            <Drawer
                height={560}
                placement="bottom"
                closable={false}
                open={open}
                bodyStyle={{
                    background: "#111114",
                    paddingTop: "0",
                    paddingRight: "0",
                    paddingLeft: "0"
                }}>
                <NavBar
                    backArrow={false}
                    onBack={back}
                    right={
                        <CloseOutlined
                            className=" text-font-gray text-xl mb-2"
                            onClick={() => handleSetOpen(false)}
                        />
                    }>
                    <span className=" text-white text-base">New contact</span>
                </NavBar>
                <div className="bg-[#1b1d1f] rounded-full w-20 h-20 mx-auto flex  items-center justify-center mt-10">
                    <UserOutlined className="text-4xl mb-2" />
                </div>
                <h1 className="text-white text-center text-2xl mt-4"> New contact</h1>
                <div className="ml-4 mr-4 mt-6">
                    <input
                        type="text"
                        className="text-base appearance-none  hover:border-[#38383b] focus:border-[#656567]  bg-black text-white w-full h-14 block pl-3 pr-2 rounded-xl border border-gray-100 mt-2"
                        placeholder="Name"
                    />
                </div>
                <div className="ml-4 mr-4">
                    <textarea
                        className="text-base appearance-none   hover:border-[#38383b]
                        focus:border-[#656567]  bg-black text-white w-full  h-28 block pl-3 pr-2 pt-4 rounded-xl border border-gray-100 mt-2"
                        placeholder="Input Address"
                    />
                </div>
                <div className="flex items-center ml-4 mr-4   mt-16 justify-between">
                    <div
                    onClick={() =>handleSetOpen(false)}
                        className="h-12 w-[48%] rounded-2xl text-center  border-none  text-white bg-[#1b1d1f]
                         hover:!text-white
                     flex items-center justify-center cursor-pointer text-base">
                        <span> Cancel</span>
                    </div>
                    <div
                        className="h-12  w-[48%] rounded-2xl text-center  border-none 
                         text-white bg-orange  hover:!text-white
                     flex items-center justify-center cursor-pointer text-base">
                        <span> Save</span>
                    </div>
                </div>
            </Drawer>
        </>
    )
}

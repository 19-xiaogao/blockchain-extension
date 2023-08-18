import { ArrowLeftOutlined } from "@ant-design/icons"
import { NavBar } from "antd-mobile"
import React from "react"
import { useNavigate } from "react-router-dom"

export default function AddToken() {
  const navigate = useNavigate()
  const back = () => {
    console.log("click back icon")
  }
  return (
    <div className="h-full w-full bg-dark relative">
      <NavBar
        backArrow={
          <ArrowLeftOutlined
            className=" text-font-gray text-xl mb-2"
            onClick={() => navigate("/")}
          />
        }
        onBack={back}>
        <span className="text-white text-base">Add tokens</span>
      </NavBar>
      <div className="pl-4 pr-4 mt-2">
        <div>
          <div className="text-lg  text-dark-gray">Contract address</div>
          <input
            type="text"
            className=" text-base appearance-none  hover:border-[#38383b] focus:border-[#656567]  bg-black text-white w-full h-14 block pl-3 pr-2 rounded-xl border border-gray-100 mt-2"
            placeholder="0x123"
          />
        </div>
        <div className="mt-4">
          <div className="text-lg  text-dark-gray">Name</div>
          <input
            type="text"
            className="text-base  appearance-none  hover:border-[#38383b] focus:border-[#656567] 
                 bg-black text-white w-full h-14 block pl-3 pr-2 rounded-xl border border-gray-100 mt-2"
            placeholder="Token"
          />
        </div>
        <div className="mt-4">
          <div className="text-lg  text-dark-gray">Symbol</div>
          <input
            type="text"
            className=" text-base appearance-none  hover:border-[#38383b] focus:border-[#656567] 
                 bg-black text-white w-full h-14 block pl-3 pr-2 rounded-xl border border-gray-100 mt-2"
            placeholder="TOK"
          />
        </div>
        <div className="mt-4">
          <div className="text-lg  text-dark-gray">Decimals</div>
          <input
            type="number"
            className="appearance-none  text-base hover:border-[#38383b] focus:border-[#656567] 
                 bg-black text-white w-full h-14 block pl-3 pr-2 rounded-xl border border-gray-100 mt-2"
            placeholder="18"
          />
        </div>
      </div>

      <div
        className="h-12 ml-4 mr-4 mt-10 rounded-2xl text-center w-hull border-none  text-white bg-orange  hover:!text-white
        flex items-center justify-center cursor-pointer text-base">
        <span> Continue</span>
      </div>
    </div>
  )
}

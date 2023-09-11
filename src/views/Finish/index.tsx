import { ReloadOutlined, DisconnectOutlined, TwitterCircleFilled } from "@ant-design/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import Steps from "~components/Steps";
import { closeNewTabPage } from "~background"
export default function IntroduceView() {
    const navigate = useNavigate()

    const handleFinishClick = () => {
        closeNewTabPage()
    }
    return <div className="flex h-full">
        <div className="w-[70%] flex flex-col  justify-center pl-28">
            <Steps index={3} />
            <div className="text-2xl text-white font-semibold mt-5">Your wallet is ready</div>
            <div className="text-[#949496] text-sm  mt-3">Follow us for product updates or if you have any questions</div>
            <div className="flex mt-5">
                <div onClick={() => navigate('/disclaimer')} className="rounded-2xl bg-[#1d1f22]  w-72 h-32 mr-10 hover:bg-[#28282c] flex flex-col justify-center items-center  cursor-pointer">
                    <TwitterCircleFilled className=" text-white text-4xl" />
                    <span className="text-white mt-3">Follow X on Twitter</span>
                </div>
                <div className="rounded-2xl bg-[#1d1f22]  w-72 h-32 mr-10 hover:bg-[#28282c] flex flex-col justify-center items-center  cursor-pointer">
                    <DisconnectOutlined className=" text-white text-4xl" />
                    <span className="text-white mt-3">Join the X discord</span>
                </div>
            </div>
            <div
                onClick={handleFinishClick}
                className="h-12 ml-4 mr-4 mt-10 rounded-3xl text-center  w-1/4 border-none  text-white bg-orange hover:bg-[#bd512e]  hover:!text-white
                flex items-center justify-center cursor-pointer text-base">
                <span>Finish</span>
            </div>
        </div>
        <div className="w-[30%] h-full bg-[#18183c]">X</div>
    </div>
}
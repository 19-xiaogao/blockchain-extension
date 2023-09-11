import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import TabBars from "./TabBars"
import React, { useEffect, useState } from "react";
import { getStorageMnemonic, removeStorageMnemonic } from "~background"

export default function Home() {
    const navigate = useNavigate()
    const [isInit, setIsInit] = useState(false)
    useEffect(() => {
        getIsInit()
    }, [])

    const getIsInit = async () => {
        const result = await getStorageMnemonic()
        if (!result) {
            setIsInit(false)
            navigate("/introduce")
        } else {
            setIsInit(true)
        }
    }
    return <div className="h-full flex flex-col justify-between pt-4 pl-2 pr-2">
        <Header />
        <div className="flex-1"> <Outlet /></div>
        <TabBars />
    </div>
}
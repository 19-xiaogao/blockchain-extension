import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import TabBars from "./TabBars"


export default function Home() {
    return <div className="h-full flex flex-col justify-between pt-4 pl-2 pr-2">
        <Header />
        <div className="flex-1"> <Outlet /></div>
        <TabBars />
    </div>
}
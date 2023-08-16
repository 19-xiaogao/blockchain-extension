import React from "react";

import {
    AppOutline,
    MessageOutline,
    MessageFill,
    UnorderedListOutline,
    UserOutline,
    ReceiptOutline,
    DownFill,
    SetOutline
} from 'antd-mobile-icons'
import { Badge, TabBar } from 'antd-mobile'
const tabs = [
    {
        key: 'home',
        icon: <ReceiptOutline />,
        title: 'Wallet',
    },
    {
        key: 'todo',
        title: 'NFTs',
        icon: <UnorderedListOutline />,

    },
    {
        key: 'message',
        title: 'SWAP',
        icon: (active: boolean) =>
            active ? <MessageFill /> : <MessageOutline />,

    },
    {
        key: 'personalCenter',
        title: 'Records',
        icon: <UserOutline />,
    },
]

export default function Home() {
    return <div className="h-full flex flex-col justify-between pt-4 pl-2 pr-2">
        <div className="h-5 w-full flex justify-between items-center">
            <div className="h-full flex items-center  p-4 rounded-xl bg-dark-200 cursor-pointer hover:bg-dark-100">
                <span className="text-white mr-1">Account 1</span>
                <DownFill color="#fff" />
            </div>
            <div className="h-full flex items-center">
                <div className="h-full flex items-center mr-2 p-4 rounded-xl bg-dark-200 cursor-pointer hover:bg-dark-100">
                    <span className="text-white mr-2">Mainnet</span>
                    <span className="w-2 h-2 bg-green rounded-full"></span>
                </div>
                <SetOutline color="#848587" className="text-2xl cursor-pointer hover:text-white" />
            </div>
        </div>
        <TabBar className="">
            {tabs.map(item => (
                <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
            ))}
        </TabBar>
    </div>
}
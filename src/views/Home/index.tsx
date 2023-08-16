import React from "react";

import {
    AppOutline,
    MessageOutline,
    MessageFill,
    UnorderedListOutline,
    UserOutline,
    ReceiptOutline
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
    return <div className="h-full flex flex-col justify-between">
        <div className="h-14 w-full bg-dark-gray">header</div>
        <TabBar className="">
            {tabs.map(item => (
                <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
            ))}
        </TabBar>
    </div>
}
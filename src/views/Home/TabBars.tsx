import {
    AppOutline,
    MessageOutline,
    MessageFill,
    UnorderedListOutline,
    UserOutline,
    ReceiptOutline,
} from 'antd-mobile-icons'
import { TabBar } from 'antd-mobile'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from 'react';

const tabs = [
    {
        icon: <ReceiptOutline />,
        title: 'Wallet',
        url: "/",
    },
    {
        title: 'NFTs',
        icon: <UnorderedListOutline />,
        url: "/nfts",
    },
    {
        title: 'SWAP',
        url: "/swap",
        icon: (active: boolean) =>
            active ? <MessageFill /> : <MessageOutline />,

    },
    {
        title: 'Records',
        url: "/records",
        icon: <UserOutline />,
    },
]

export default function TabBars() {
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;
    return <TabBar activeKey={pathname} onChange={value => navigate(value)} className="border-t border-dark-100">
        {tabs.map(item => (
            <TabBar.Item key={item.url} icon={item.icon} title={item.title} />
        ))}
    </TabBar>
}
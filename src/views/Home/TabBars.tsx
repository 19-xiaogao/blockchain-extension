
import { TabBar } from 'antd-mobile'
import { useLocation, useNavigate } from "react-router-dom";
import { AppstoreOutlined, MenuOutlined, SyncOutlined, WalletOutlined } from '@ant-design/icons';
const tabs = [
    {
        icon: <WalletOutlined />,
        url: "/",
    },
    {
        icon: <AppstoreOutlined />,
        url: "/nfts",
    },
    {
        url: "/swap",
        icon: <SyncOutlined />,

    },
    {
        url: "/records",
        icon: <MenuOutlined />,
    },
]

export default function TabBars() {
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;
    return <TabBar activeKey={pathname} onChange={value => navigate(value)} className="border-t border-dark-100 adm-tab-bar-item-active">
        {tabs.map(item => (
            <TabBar.Item key={item.url} icon={item.icon} className='pt-0'  />
        ))}
    </TabBar>
}
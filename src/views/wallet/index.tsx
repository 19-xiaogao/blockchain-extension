import React, { useEffect } from "react";
import { formatAddress, copyToClipboard } from "~utils"
import { Tooltip } from 'antd';
const address = "0xAa5A88bdA5BB06cb73Ee0af753D3f4A2486dd845"
export default function WalletView() {

    return <>
        <h1 className="text-center font-black text-4xl text-white font-mono mt-9">💵0.12</h1>
        <p className="text-center">
            <Tooltip
                title='Click to copy address'
                placement='bottom'
                mouseEnterDelay={0.05}
            >
                <span onClick={() => (copyToClipboard(address))} className="text-font-gray cursor-pointer text-center mt-2  text-base hover:text-white">{formatAddress(address)}</span>
            </Tooltip>
        </p>
    </>
}
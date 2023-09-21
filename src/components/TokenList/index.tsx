import React, { useCallback, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { getERC20BalanceOf } from "~background"
import useTokenList from "~hooks/useTokenlist"
import useWallet from "~hooks/useWallet"

export default function TokenList() {
    const wallet = useWallet()
    const navigate = useNavigate()
    const { tokenList } = useTokenList()

    const menuList = useMemo(() => {

        tokenList.forEach(async v => {
            const balance = await getERC20BalanceOf(v.contract, wallet.address)
            v.balance = balance;
        })
        return tokenList

    }, [tokenList, wallet.address])

    const renderTokenList = useCallback(() => {
        return menuList.map((v, index) => {
            return <div key={index} onClick={() => navigate('/sendTo')} className="bg-coin-bg rounded-2xl mt-2 w-full p-3 flex items-center 
            justify-between hover:bg-coin-hover cursor-pointer transition-all duration-100">
                <div className="flex items-center">
                    <img src="https://dv3jj1unlp2jl.cloudfront.net/128/color/eth.png" className="w-10 h-15" alt="" />
                    <div className="ml-3">
                        <div className="text-white  text-lg">{v.name}</div>
                        {/* <div className="text-dark-gray">{balance}</div> */}
                    </div>
                </div>
                <div className="text-base text-white">{v.balance} {v.symbol}</div>
            </div>
        })
    }, [tokenList])
    return <>{renderTokenList()}</>
}
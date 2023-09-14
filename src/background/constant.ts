import type { IRPC } from "~types";

export const defaultNetwork: IRPC[] = [
    {
        name: "Goerli",
        url: "https://eth.getblock.io/6a3095cc-5bf1-4977-b7a9-6d5e5de64ca3/goerli/",
        chainId: 5,
        Currency: "ETH",
        blockChainBrowser: "https://goerli.etherscan.io"
    },
    {
        name: "ETH Mainnet",
        url: "https://mainnet.infura.io/v3/",
        chainId: 1,
        Currency: "ETH",
        blockChainBrowser: "https://etherscan.io"
    },
]
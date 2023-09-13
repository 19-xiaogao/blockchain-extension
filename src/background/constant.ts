import type { IRPC } from "~types";

export const defaultNetwork:IRPC[] = [
    {
        name: "Goerli",
        url: "https://ethereum-goerli.publicnode.com",
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
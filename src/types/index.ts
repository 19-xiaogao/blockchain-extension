import * as anfsJs from "anfs-js"
export type Address = `0x${string}`;

export interface IRPC {
    name: string,
    url: string,
    chainId: number,
    Currency: string,
    blockChainBrowser: string

}

export interface IHDNodeWallet extends anfsJs.HDNodeWallet {
    name: string
}
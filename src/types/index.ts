export type Address = `0x${string}`;

export interface IRPC {
    name: string,
    url: string,
    chainId: number,
    Currency: string,
    blockChainBrowser: string

}
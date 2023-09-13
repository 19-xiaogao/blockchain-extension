import * as anfsJs from "anfs-js"
import { getStorageCurrentRPC } from "./storage"

export const getCurrentProvider = async () => {
    const rpc = await getStorageCurrentRPC()
    return anfsJs.getDefaultProvider(rpc)
}

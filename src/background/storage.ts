import { Storage } from "@plasmohq/storage"

const MNEMONIC = "MNEMONIC"
const storage = new Storage({ area: "local" })

export async function setStorageMnemonic(enCryptoMnemonic: string) {
    return storage.set(MNEMONIC, enCryptoMnemonic)
}

export async function getStorageMnemonic() {
    return storage.get(MNEMONIC)
}

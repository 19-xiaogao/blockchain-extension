import * as anfsJs from "anfs-js"
import cryptoJs from "crypto-js"

export default {
    // 随机创建一个助记词
    createMnemonic(): string {
        const wallet = anfsJs.Wallet.createRandom()
        return wallet.mnemonic.phrase
    },

    // 通过助记词短语推导出钱包
    mnemonicToWallet(phrase: string) {
        return anfsJs.Wallet.fromPhrase(phrase)
    },

    // 加密助记词  phrase 加密的助记词短语  passwordKey 加密的密钥
    encryptMnemonic(phrase: string, passwordKey: string): string {
        return cryptoJs.AES.encrypt(phrase, passwordKey).toString()
    },

    // 解密助记词 encrypted 经过加密的助记词短语  passwordKey 加密的密钥
    deCryptoMnemonic(encrypted: string, passwordKey: string): string {
        return cryptoJs.AES.decrypt(encrypted, passwordKey).toString(cryptoJs.enc.Utf8)
    }

}
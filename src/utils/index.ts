import { message } from "antd"
import type { Address } from "~types";

// format address to 0x123...ab32d, but address length === 42;
export const formatAddress = (address: Address) => {
    if (address.length != 42) throw new Error("is not address")
    const prefix = address.slice(0, 6);
    const suffix = address.slice(-4);
    const result = prefix + "..." + suffix;
    return result;
}

export function copyToClipboard(text: string) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    message.success("copied!")
}
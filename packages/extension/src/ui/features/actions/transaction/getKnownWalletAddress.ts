import { BaseWalletAccount } from "../../../../shared/wallet.model"
import { accountsEqual } from "../../../../shared/wallet.service"
import { Account } from "../../accounts/Account"

// FIXME: change implementation once address book is complete
export function getKnownWalletAddress(
  allAccounts: Account[],
  account: BaseWalletAccount,
): Account | undefined {
  const knownAccount = allAccounts.find((knownAccount) =>
    accountsEqual(knownAccount, account),
  )

  return knownAccount
}

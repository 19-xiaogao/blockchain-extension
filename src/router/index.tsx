import React, { Suspense } from "react";
import { createHashRouter, redirect } from "react-router-dom";


import Home from "~views/Home"
import WalletView from "~views/wallet";
import NftsView from "~views/Nfts";
import SwapView from "~views/Swap";
import RecordsView from "~views/Records";
import AccountView from '~views/Account';
import AddTokenView from '~views/AddToken';
import SendToView from '~views/SendTo';
import SendView from '~views/Send';
import SelectAssetView from '~views/SelectAsset';
import TradingView from '~views/Trading';
import RecordDetailView from "~views/RecordDetail";
import SettingView from "~views/Setting";
import LockView from "~views/Lock";
import ResetWalletView from "~views/ResetWallet";
import IntroduceView from "~views/Introduce";
import DisclaimerView from "~views/Disclaimer";
import ImportWallet from "~views/ImportWallet";
import NewWalletView from "~views/NewWallet";
import FinishView from "~views/Finish";
import RecoveryPhrase from "~views/RecoveryPhrase"
import SavePhrase from "~views/SavePhrase"
import { getStorageMnemonic, getStoragePassword } from "~background";

const sessionExpiredFnc = async () => {
  const Mnemonic = await getStorageMnemonic()
  if (!Mnemonic) {
    return redirect("/introduce");
  }
  const password = await getStoragePassword()
  if (!password) {
    return redirect("/lock");
  }

  return ""
}
const router = createHashRouter([
  {
    path: "/introduce",

    element: <IntroduceView />
  },
  {
    path: '/disclaimer',
    element: <DisclaimerView />
  },
  {
    path: '/newWallet',
    element: <NewWalletView />
  },
  {
    path: "/finish",
    element: <FinishView />
  },
  {
    path: '/importWallet',
    element: <ImportWallet />
  },
  {
    path: "/",
    element: <Home />,
    loader: sessionExpiredFnc,
    children: [
      {
        path: "/",
        element: <WalletView />,
      },
      {
        path: "/nfts",
        element: <NftsView />,
      },
      {
        path: "/swap",
        element: <SwapView />,
      },
      {
        path: "/records",
        element: <RecordsView />,
      },
    ],
  },
  {
    path: "account",
    element: <AccountView />
  },
  {
    path: "addToken",
    element: <AddTokenView />
  },
  {
    path: "sendTo",
    element: <SendToView />
  },
  {
    path: "send",
    element: <SendView />
  },
  {
    path: "selectAsset",
    element: <SelectAssetView />
  },
  {
    path: "/trading",
    element: <TradingView />
  },
  {
    path: "/recordDetail",
    element: <RecordDetailView />
  },
  {
    path: "/setting",
    element: <SettingView />
  },
  {
    path: "/lock",
    element: <LockView />
  },
  {
    path: "/resetWallet",
    element: <ResetWalletView />
  },
  {
    path: "/recoveryPhrase",
    element: <RecoveryPhrase />
  },
  {
    path: "/savePhrase",
    element: <SavePhrase />
  }
]);


export default router
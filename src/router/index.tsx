import {
  createHashRouter,
} from "react-router-dom";
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
import LockView from "~views/Lock"
const router = createHashRouter([
  {
    path: "/",

    element: <Home />,
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
  }
]);


export default router
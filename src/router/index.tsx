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
  }
]);


export default router
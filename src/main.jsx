import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./index.css";

// World Chain manual config (chain ID 480)
const worldChain = {
  chainId: 480,
  rpc: ["https://worldchain-mainnet.g.alchemy.com/public"],
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  slug: "world-chain",
  testnet: false,
};

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThirdwebProvider
      clientId="b25286cc43a81f0ecab40b732a0d462c"
      activeChain={worldChain}
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);

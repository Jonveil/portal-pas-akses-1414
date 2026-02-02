import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./index.css";

// 👇 Kita definisikan World Chain secara manual supaya tak ada isu "Unknown Chain"
const worldChainConfig = {
  chainId: 480,
  rpc: ["https://worldchain-mainnet.g.alchemy.com/public"], // RPC Public
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  shortName: "world",
  slug: "world-chain",
  testnet: false,
  chain: "World Chain",
  name: "World Chain",
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThirdwebProvider 
      activeChain={worldChainConfig} 
      clientId="b25286cc43a81f0ecab40b732a0d462c" // ID Tuan (Hardcoded)
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);

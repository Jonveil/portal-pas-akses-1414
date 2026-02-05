import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThirdwebProvider } from "thirdweb/react";
import { defineChain } from "thirdweb/chains"; // <--- tambah import ni
import "./index.css";

// Define World Chain
const worldChain = defineChain({
  id: 480,
  name: "World Chain",
  rpcUrls: {
    default: {
      http: ["https://worldchain-mainnet.g.alchemy.com/public"],
    },
  },
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  blockExplorers: {
    default: {
      name: "World Chain Explorer",
      url: "https://worldscan.org",
    },
  },
});

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThirdwebProvider
      clientId="b25286cc43a81f0ecab40b732a0d462c"
      chain={worldChain}
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);

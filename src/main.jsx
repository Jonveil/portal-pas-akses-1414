import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

import { ThirdwebProvider } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";
import { defineChain } from "thirdweb/chains";

import { MiniKit } from "@worldcoin/minikit-js";

MiniKit.init({
  app_id: "app_7147fcca529b9e4c5181157a356d9378",
});

const client = createThirdwebClient({
  clientId: "b25286cc43a81f0ecab40b732a0d462c",
});

const chain = defineChain(480);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThirdwebProvider client={client} activeChain={chain}>
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);

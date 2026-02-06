import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

import { ThirdwebProvider } from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";
import { defineChain } from "thirdweb/chains";

const client = createThirdwebClient({
  clientId: "b25286cc43a81f0ecab40b732a0d462c",
});

const chain = defineChain(480); // World Chain

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThirdwebProvider client={client} activeChain={chain}>
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);

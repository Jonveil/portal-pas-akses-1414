import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./index.css";

// Chain ID World Chain = 480
const activeChain = 480; 

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThirdwebProvider 
      activeChain={activeChain} 
      // 👇 KITA LETAK TERUS ID DI SINI (Jalan Pintas)
      clientId="b25286cc43a81f0ecab40b732a0d462c"
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./index.css";

// Kita tak payah import WorldChain. Kita guna ID dia je terus.
// Chain ID World Chain = 480

const activeChain = 480; 

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThirdwebProvider 
      activeChain={activeChain} 
      clientId={import.meta.env.VITE_TEMPLATE_CLIENT_ID}
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

import { MiniKitProvider } from "@worldcoin/minikit-react";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MiniKitProvider
      config={{
        app_id: "app_7147fcca529b9e4c5181157a356d9378", // ID Mini App kau
      }}
    >
      <App />
    </MiniKitProvider>
  </React.StrictMode>
);

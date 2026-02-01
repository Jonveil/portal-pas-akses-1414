import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThirdwebProvider } from "@thirdweb-dev/react";

// Kita bungkus App dengan ThirdwebProvider (Enjin Blockchain)
// Client ID Tuan: b25286cc43a81f0ecab40b732a0d462c
// Chain: World Chain

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThirdwebProvider 
      activeChain="worldchain" 
      clientId="b25286cc43a81f0ecab40b732a0d462c"
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>,
);

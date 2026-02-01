import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { WorldChain } from "@thirdweb-dev/chains";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThirdwebProvider 
      activeChain={WorldChain} 
      clientId="b25286cc43a81f0ecab40b732a0d462c"
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>,
);

import React, { useState } from "react";
import Utility from "./Utility";
import Governance from "./Governance";

function App() {
  const [address, setAddress] = useState("");
  const [verified, setVerified] = useState(false);
  const [tokenBalance, setTokenBalance] = useState(0);
  const [accessGranted, setAccessGranted] = useState(false);

  // Simulasi pengesahan World ID
  function handleWorldIDVerify() {
    setVerified(true);
    alert("✅ Identiti disahkan melalui World ID");
  }

  // Simulasi sambungan wallet dan semakan token
  function handleConnectWallet() {
    const dummyAddress = "0x1414...BURUNG";
    const dummyBalance = 1;
    setAddress(dummyAddress);
    setTokenBalance(dummyBalance);

    if (verified && dummyBalance >= 1) {
      setAccessGranted(true);
    } else {
      alert("❌ Perlu World ID + 1 token 1414");
    }
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h1>🚪 Portal Pas Akses 1414</h1>

      {!accessGranted ? (
        <div>
          <button onClick={handleWorldIDVerify}>🔐 Sahkan World ID</button><br /><br />
          <button onClick={handleConnectWallet}>🔗 Sambung Wallet</button>
        </div>
      ) : (
        <div>
          <Utility address={address} />
          <hr />
          <Governance />
        </div>
      )}
    </div>
  );
}

export default App;

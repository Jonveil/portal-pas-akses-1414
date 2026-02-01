import React, { useState } from "react";
import { ConnectWallet, useAddress, useContract, useNFTBalance } from "@thirdweb-dev/react";
import Governance from "./Governance.jsx";
import Utility from "./KodUtility.jsx";

// Contract Tuan
const CONTRACT_ADDRESS = "0xa72DABf4F0f4Ce102D17B006e4CCB34EC74351D4";

export default function App() {
  const address = useAddress();
  const { contract } = useContract(CONTRACT_ADDRESS);
  const { data: balance } = useNFTBalance(contract, address);
  
  const [activeTab, setActiveTab] = useState("nft");
  const hasNFT = balance && parseInt(balance.toString()) > 0;

  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh", color: "white", fontFamily: "sans-serif" }}>
      
      {/* HEADER */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px", borderBottom: "1px solid #333" }}>
        <div style={{ fontWeight: "bold", fontSize: "18px" }}>🐱 PORTAL 1414</div>
        <ConnectWallet theme="dark" modalSize="compact" />
      </nav>

      {/* MENU TAB */}
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", padding: "20px" }}>
        <button 
           onClick={() => setActiveTab("nft")}
           style={{ padding: "10px 20px", borderRadius: "20px", border: "none", background: activeTab === "nft" ? "#ff0000" : "#333", color: "white", fontWeight: "bold" }}
        >
          🎨 NFT DROP
        </button>
        <button 
           onClick={() => setActiveTab("utility")}
           style={{ padding: "10px 20px", borderRadius: "20px", border: "none", background: activeTab === "utility" ? "#ff0000" : "#333", color: "white", fontWeight: "bold" }}
        >
          🔧 UTILITY
        </button>
      </div>

      {/* KANDUNGAN */}
      <main style={{ padding: "20px" }}>
        {!address ? (
          <div style={{ textAlign: "center", marginTop: "50px", color: "#aaa" }}>
            <p>Sila Connect Wallet untuk mula 👆</p>
          </div>
        ) : (
          <>
            {activeTab === "nft" && <Governance />}
            {activeTab === "utility" && <Utility />}
          </>
        )}
      </main>

      {/* STATUS */}
      {address && (
         <div style={{ textAlign: "center", padding: "20px", fontSize: "12px", color: hasNFT ? "#00ff00" : "#666" }}>
            STATUS: {hasNFT ? "✅ AGENT" : "❌ VISITOR"}
         </div>
      )}
    </div>
  );
}

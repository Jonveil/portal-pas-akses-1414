import React, { useState } from "react";
import { useMiniKit } from "@worldcoin/minikit-react";
import { ethers } from "ethers";

export default function App() {
  const [entered, setEntered] = useState(false);
  const [claiming, setClaiming] = useState(false);

  const { sendTransaction, walletAddress } = useMiniKit();

  const handleClaim = async () => {
    try {
      setClaiming(true);

      if (!walletAddress) {
        alert("Sila buka Mini App dalam World App untuk claim.");
        return;
      }

      const contract = "0xa72DABf4F0f4Ce102D17B006e4CCB34EC74351D4";

      const abi = [
        "function claim(address _receiver, uint256 _quantity, address _currency, uint256 _pricePerToken, (bytes32[] proof, uint256 quantityLimitPerWallet, uint256 pricePerToken, address currency) _allowlistProof, bytes _data)"
      ];

      const iface = new ethers.utils.Interface(abi);

      const data = iface.encodeFunctionData("claim", [
        walletAddress,
        1,
        "0x0000000000000000000000000000000000000000",
        0,
        [[], 0, 0, "0x0000000000000000000000000000000000000000"],
        "0x"
      ]);

      await sendTransaction({
        to: contract,
        data: data
      });

      alert("Claim berjaya! Sila semak wallet anda.");
    } catch (err) {
      alert("Claim gagal: " + err.message);
    } finally {
      setClaiming(false);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Courier New', monospace",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {!entered ? (
        <>
          <img
            src="/alduin.jpg"
            alt="Agent 1414"
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              border: "4px solid red",
              boxShadow: "0 0 40px red",
              objectFit: "cover",
            }}
          />

          <h1
            style={{
              fontSize: "2.5rem",
              color: "red",
              textShadow: "0 0 20px red",
              marginTop: "20px",
            }}
          >
            PORTAL 1414
          </h1>

          <button
            onClick={() => setEntered(true)}
            style={{
              backgroundColor: "red",
              color: "white",
              border: "none",
              padding: "20px 70px",
              fontSize: "1.2rem",
              borderRadius: "50px",
              marginTop: "40px",
              cursor: "pointer",
              boxShadow: "0 0 30px red",
            }}
          >
            ENTER
          </button>
        </>
      ) : (
        <>
          <h1 style={{ color: "red", marginBottom: "10px" }}>AGENT 1414</h1>
          <p style={{ color: "#666", marginBottom: "30px" }}>ACCESS GRANTED</p>

          <div
            style={{
              width: "100%",
              maxWidth: "400px",
              background: "#111",
              padding: "25px",
              borderRadius: "20px",
              border: "1px solid #333",
              boxShadow: "0 0 20px rgba(255,0,0,0.2)",
            }}
          >
            <img
              src="/alduin.jpg"
              alt="NFT Preview"
              style={{
                width: "100%",
                height: "180px",
                borderRadius: "15px",
                objectFit: "cover",
                marginBottom: "20px",
              }}
            />

            <h3 style={{ margin: 0 }}>GENESIS PASS</h3>
            <p style={{ color: "#777", fontSize: "0.8rem" }}>
              World Chain Access Pass • Free
            </p>

            <button
              onClick={handleClaim}
              disabled={claiming}
              style={{
                width: "100%",
                padding: "15px",
                borderRadius: "30px",
                border: "none",
                marginTop: "20px",
                backgroundColor: claiming ? "#444" : "white",
                color: claiming ? "#999" : "black",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              {claiming ? "CLAIMING..." : "CLAIM NFT →"}
            </button>
          </div>

          <button
            onClick={() => setEntered(false)}
            style={{
              marginTop: "40px",
              background: "none",
              border: "1px solid #333",
              padding: "10px 30px",
              borderRadius: "20px",
              color: "#666",
              cursor: "pointer",
            }}
          >
            LOGOUT
          </button>
        </>
      )}
    </div>
  );
}

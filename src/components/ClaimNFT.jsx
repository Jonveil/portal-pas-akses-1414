import { useEffect, useState } from "react";
import { ethers } from "ethers";
import ABI from "../abi.json";

const CONTRACT = "0xa72DABf4F0f4Ce102D17B006e4CCB34EC74351D4";
const ZERO = "0x0000000000000000000000000000000000000000";
const MAX_SUPPLY = 1414;

// Gambar NFT (boleh tukar)
const NFT_IMAGE = "https://i.imgur.com/1Q9Z1Zm.png"; // contoh

export default function ClaimNFT() {
  const [loading, setLoading] = useState(true);
  const [claimed, setClaimed] = useState(false);
  const [supply, setSupply] = useState(0);
  const [user, setUser] = useState("");
  const [claiming, setClaiming] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    init();
  }, []);

  async function init() {
    try {
      if (!window.ethereum) return;

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      setUser(address);

      const contract = new ethers.Contract(CONTRACT, ABI, signer);

      const bal = await contract.balanceOf(address);
      const total = await contract.totalSupply();

      setClaimed(bal > 0);
      setSupply(Number(total));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function claim() {
    try {
      setClaiming(true);

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACT, ABI, signer);

      const tx = await contract.claim(
        user,
        1,
        ZERO,
        0,
        {
          proof: [],
          quantityLimitPerWallet: 0,
          pricePerToken: 0,
          currency: ZERO
        },
        "0x"
      );

      await tx.wait();

      setClaimed(true);
      setSupply(supply + 1);
      setSuccess(true);
    } catch (err) {
      console.error(err);
      alert("Claim failed");
    } finally {
      setClaiming(false);
    }
  }

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <div style={{
      textAlign: "center",
      padding: "20px",
      fontFamily: "Comic Sans MS, Poppins, sans-serif"
    }}>
      
      <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>
        🎟️ Portal 1414 Access Pass
      </h2>

      <p style={{ fontSize: "18px", marginBottom: "20px" }}>
        {supply} / {MAX_SUPPLY} claimed
      </p>

      <img 
        src={NFT_IMAGE}
        alt="NFT"
        style={{
          width: "220px",
          height: "220px",
          borderRadius: "20px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          marginBottom: "20px"
        }}
      />

      {claimed ? (
        <div>
          <p style={{ fontSize: "20px", marginBottom: "10px" }}>
            🎉 Anda sudah claim NFT ini!
          </p>

          <a 
            href={`https://worldscan.org/address/${user}`}
            target="_blank"
            style={{
              display: "inline-block",
              marginTop: "10px",
              padding: "10px 20px",
              background: "#4A90E2",
              color: "white",
              borderRadius: "10px",
              textDecoration: "none"
            }}
          >
            View on Explorer
          </a>

          <br /><br />

          <a 
            href={`https://twitter.com/intent/tweet?text=I%20just%20claimed%20my%20Portal%201414%20NFT!%20%F0%9F%8E%89&url=https://worldscan.org/address/${user}`}
            target="_blank"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              background: "#000",
              color: "white",
              borderRadius: "10px",
              textDecoration: "none"
            }}
          >
            Share on X/Twitter
          </a>
        </div>
      ) : (
        <button
          onClick={claim}
          disabled={claiming}
          style={{
            padding: "14px 30px",
            fontSize: "20px",
            borderRadius: "12px",
            background: claiming ? "#aaa" : "#FFB347",
            border: "none",
            cursor: claiming ? "not-allowed" : "pointer",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
          }}
        >
          {claiming ? "Claiming..." : "Claim NFT"}
        </button>
      )}

      {success && (
        <p style={{ marginTop: "20px", fontSize: "22px", color: "green" }}>
          🎉 Claim Success!
        </p>
      )}
    </div>
  );
}

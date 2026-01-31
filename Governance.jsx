import React, { useState } from "react";

function Governance() {
  const [voted, setVoted] = useState(false);

  const boxStyle = {
    border: "1px solid #333",
    borderRadius: "12px",
    padding: "20px",
    marginTop: "20px",
    width: "90%",
    maxWidth: "350px",
    backgroundColor: "#111",
    textAlign: "left"
  };

  return (
    <div style={boxStyle}>
      <h3 style={{ color: "#ff0000", marginTop: 0 }}>🗳️ Community Vote</h3>
      <p style={{color: "#ccc", fontSize: "14px"}}>Proposal: Should we launch an NFT collection next month?</p>

      {!voted ? (
        <div style={{display: "flex", gap: "10px"}}>
          <button onClick={() => setVoted(true)} style={{flex: 1, padding: "10px", background: "#1a1a1a", border: "1px solid #ff0000", color: "#ff0000", borderRadius: "5px", cursor: "pointer"}}>
            YES
          </button>
          <button onClick={() => setVoted(true)} style={{flex: 1, padding: "10px", background: "#1a1a1a", border: "1px solid #555", color: "#aaa", borderRadius: "5px", cursor: "pointer"}}>
            NO
          </button>
        </div>
      ) : (
        <p style={{color: "#ff0000"}}>Thank you for voting! 🇲🇾</p>
      )}
    </div>
  );
}

export default Governance;

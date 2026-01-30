import React, { useState } from "react";

function Governance() {
  const [vote, setVote] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleVote = (choice) => {
    setVote(choice);
    setSubmitted(true);
    alert(`✅ You voted: ${choice}`);
  };

  return (
    <div style={{ padding: "1rem", border: "1px solid #333", borderRadius: "10px", marginTop: "20px", backgroundColor: "#111" }}>
      <h2>🗳️ Community Governance</h2>
      <p style={{ color: "#aaa" }}>Proposal: Should we enable direct NFT minting in the app?</p>

      {!submitted ? (
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <button onClick={() => handleVote("Yes")} style={{ padding: "10px 20px", cursor: "pointer", background: "green", color: "white", border: "none", borderRadius: "5px" }}>✅ Yes</button>
          <button onClick={() => handleVote("No")} style={{ padding: "10px 20px", cursor: "pointer", background: "red", color: "white", border: "none", borderRadius: "5px" }}>❌ No</button>
        </div>
      ) : (
        <p>Thank you for voting: <strong>{vote}</strong></p>
      )}
      
      <p style={{ fontSize: "12px", color: "#666", marginTop: "10px" }}>💡 Votes are currently tallied manually.</p>
    </div>
  );
}

export default Governance;

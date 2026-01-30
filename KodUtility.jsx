import React, { useState } from "react";

function Utility({ address }) {
  const [claimed, setClaimed] = useState(false);
  const [name, setName] = useState("");

  function handleClaim(e) {
    e.preventDefault();
    if (name.trim() === "") {
      alert("Please enter your name.");
      return;
    }
    setClaimed(true);
    alert("✅ Daily claim successful!");
  }

  return (
    <div style={{ padding: "1rem", border: "1px solid #333", borderRadius: "10px", marginTop: "20px", backgroundColor: "#111" }}>
      <h2>🔧 Token Holder Utility</h2>
      
      {!claimed ? (
        <form onSubmit={handleClaim}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name to claim"
            style={{ padding: "10px", width: "80%", borderRadius: "5px", border: "1px solid #444", marginBottom: "10px" }}
          /><br />
          <button type="submit" style={{ padding: "10px 20px", background: "#FFD700", color: "black", fontWeight: "bold", border: "none", borderRadius: "5px", cursor: "pointer" }}>
            🪙 Claim Daily Rewards
          </button>
        </form>
      ) : (
        <p style={{ color: "#4CAF50" }}>✅ You have claimed today's reward. See you tomorrow!</p>
      )}

      <hr style={{ borderColor: "#333", margin: "20px 0" }} />
      <p>📎 <strong>Exclusive Links:</strong></p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ marginBottom: "10px" }}><a href="https://t.me/akses1414" target="_blank" style={{ color: "#3498db", textDecoration: "none" }}>✈️ Community Telegram</a></li>
        <li><a href="https://docs.google.com/forms/d/e/akses1414" target="_blank" style={{ color: "#3498db", textDecoration: "none" }}>📝 Whitelist Form</a></li>
      </ul>
    </div>
  );
}

export default Utility;

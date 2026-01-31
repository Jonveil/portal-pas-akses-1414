import React, { useState } from "react";

function Utility() {
  const [claimed, setClaimed] = useState(false);
  const [name, setName] = useState("");

  function handleClaim(e) {
    e.preventDefault();
    if (!name) return alert("Please enter your name!");
    setClaimed(true);
    alert("✅ Reward Claimed Successfully!");
  }

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
      <h3 style={{ color: "#ff0000", marginTop: 0 }}>🔧 Holder Utility</h3>
      
      {!claimed ? (
        <form onSubmit={handleClaim}>
          <p style={{fontSize: "14px", color: "#ccc"}}>Daily Claim:</p>
          <input 
            type="text" 
            placeholder="Enter name..." 
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #444", background: "#222", color: "white"}} 
          />
          <button type="submit" style={{width: "100%", padding: "10px", background: "#ff0000", color: "white", border: "none", borderRadius: "5px", fontWeight: "bold"}}>
            🎁 Claim Reward
          </button>
        </form>
      ) : (
        <p style={{color: "#00ff00"}}>✅ Claimed for today!</p>
      )}

      <hr style={{borderColor: "#333", margin: "15px 0"}}/>
      
      <p style={{color: "white", fontWeight: "bold"}}>🔗 Exclusive Links:</p>
      <ul style={{paddingLeft: "20px", color: "#ccc"}}>
        <li style={{marginBottom: "5px"}}><a href="#" style={{color: "#ff0000"}}>Group Telegram</a></li>
        <li><a href="#" style={{color: "#ff0000"}}>Whitelist Form</a></li>
      </ul>
    </div>
  );
}

export default Utility;

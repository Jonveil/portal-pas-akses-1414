import React, { useState } from "react";

function Utility({ address }) {
  const [claimed, setClaimed] = useState(false);
  const [name, setName] = useState("");

  function handleClaim(e) {
    e.preventDefault();
    if (name.trim() === "") {
      alert("Sila isi nama anda.");
      return;
    }
    setClaimed(true);
    alert("✅ Tuntutan harian berjaya!");
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h2>🔧 Utility Pemegang Token</h2>
      <p>Alamat wallet anda: <strong>{address}</strong></p>

      {!claimed ? (
        <form onSubmit={handleClaim}>
          <label>Nama anda:</label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Contoh: Burung"
            style={{ marginBottom: "0.5rem", width: "100%" }}
          /><br />
          <button type="submit">🪙 Tuntutan Harian</button>
        </form>
      ) : (
        <p>✅ Anda telah menuntut hari ini. Jumpa esok!</p>
      )}

      <hr />
      <p>📎 Pautan Eksklusif:</p>
      <ul>
        <li><a href="https://t.me/akses1414" target="_blank">Telegram Komuniti</a></li>
        <li><a href="https://docs.google.com/forms/d/e/akses1414" target="_blank">Borang Whitelist</a></li>
      </ul>
    </div>
  );
}

export default Utility;

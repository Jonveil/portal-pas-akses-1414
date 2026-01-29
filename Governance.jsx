import React, { useState } from "react";

function Governance() {
  const [vote, setVote] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleVote = (choice) => {
    setVote(choice);
    setSubmitted(true);
    alert(`✅ Undian anda: ${choice}`);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>🗳️ Undian Komuniti</h2>
      <p>Cadangan: Perlu tambah fungsi mint NFT terus dari app?</p>

      {!submitted ? (
        <div>
          <button onClick={() => handleVote("Ya")}>✅ Ya</button>
          <button onClick={() => handleVote("Tidak")}>❌ Tidak</button>
        </div>
      ) : (
        <p>Terima kasih atas undian anda: <strong>{vote}</strong></p>
      )}

      <hr />
      <p>💡 Cadangan akan dikira secara manual buat masa ini.</p>
    </div>
  );
}

export default Governance;

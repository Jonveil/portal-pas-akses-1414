import React from "react";

// Konfigurasi asas (boleh sambung on-chain nanti)
const CONTRACT_ADDRESS = "0xa72DABf4F0f4Ce102D17B006e4CCB34EC74351D4";

// Buat sementara: data statik dulu
const TOTAL_AVAILABLE = 14;
const CLAIMED = 0; // nanti kita sambung baca dari chain
const PERCENTAGE = Math.min((CLAIMED / TOTAL_AVAILABLE) * 100, 100);

const Governance = () => {
  const styles = {
    container: {
      textAlign: "center",
      color: "white",
      padding: "20px",
      fontFamily: "sans-serif",
      background: "black",
      minHeight: "100vh",
    },
    card: {
      background: "#111",
      borderRadius: "20px",
      padding: "20px",
      maxWidth: "380px",
      margin: "0 auto",
      border: "1px solid #333",
    },
    imageWrapper: {
      borderRadius: "15px",
      overflow: "hidden",
      marginBottom: "20px",
      border: "2px solid #ff0000",
      height: "300px",
      width: "100%",
    },
    title: {
      fontSize: "24px",
      fontWeight: "900",
      margin: "10px 0",
      color: "#fff",
      textTransform: "uppercase",
    },
    progressContainer: {
      background: "#333",
      borderRadius: "10px",
      height: "10px",
      width: "100%",
      margin: "10px 0",
      overflow: "hidden",
    },
    progressBar: {
      background: "#00ff00",
      height: "100%",
      width: `${PERCENTAGE}%`,
      transition: "width 0.5s",
    },
    phaseBox: {
      border: "1px solid #333",
      borderRadius: "10px",
      padding: "10px",
      marginBottom: "10px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    phaseActive: {
      border: "1px solid #00ff00",
      background: "rgba(0, 255, 0, 0.1)",
    },
    buttonDisabled: {
      width: "100%",
      fontWeight: "bold",
      background: "#333",
      color: "#777",
      borderRadius: "10px",
      padding: "12px",
      border: "none",
      marginTop: "10px",
    },
    hint: {
      fontSize: "10px",
      color: "#777",
      marginTop: "5px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* GAMBAR – buat sementara guna alduin.jpg juga */}
        <div style={styles.imageWrapper}>
          <img
            src="/alduin.jpg"
            alt="Portal 1414"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <h2 style={styles.title}>PORTAL 1414 AGENT</h2>

        {/* PROGRESS BAR (sementara statik) */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "12px",
            color: "#aaa",
          }}
        >
          <span>Minted</span>
          <span style={{ color: "#00ff00" }}>
            {CLAIMED} / {TOTAL_AVAILABLE}
          </span>
        </div>
        <div style={styles.progressContainer}>
          <div style={styles.progressBar}></div>
        </div>

        <br />

        {/* FASA 1 (FREE) */}
        <div style={{ ...styles.phaseBox, ...styles.phaseActive }}>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontWeight: "bold", fontSize: "14px" }}>
              PHASE 1 (LIVE)
            </div>
            <div style={{ fontSize: "10px", color: "#aaa" }}>Early Bird</div>
          </div>
          <div
            style={{
              fontWeight: "bold",
              color: "#00ff00",
              fontSize: "16px",
            }}
          >
            FREE
          </div>
        </div>

        {/* FASA 2 (10k Token) */}
        <div style={{ ...styles.phaseBox, opacity: 0.5 }}>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontWeight: "bold", fontSize: "14px" }}>
              PHASE 2
            </div>
            <div style={{ fontSize: "10px", color: "#aaa" }}>Public Sale</div>
          </div>
          <div style={{ fontWeight: "bold", fontSize: "14px" }}>
            10k $1414
          </div>
        </div>

        <br />

        {/* BUTANG – buat sementara info sahaja */}
        <button style={styles.buttonDisabled} disabled>
          CLAIM FROM MAIN PORTAL
        </button>
        <div style={styles.hint}>
          Claim NFT sekarang hanya dari halaman utama (Portal 1414).
        </div>

        <div style={styles.hint}>
          Contract: <code>{CONTRACT_ADDRESS}</code>
        </div>
      </div>
    </div>
  );
};

export default Governance;

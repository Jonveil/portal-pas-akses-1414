import React from "react";

const Governance = () => {
  const styles = {
    container: {
      textAlign: "center",
      color: "white",
      padding: "20px",
      fontFamily: "'Poppins', sans-serif",
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
      boxShadow: "0 0 20px rgba(255,0,0,0.2)",
    },
    imageWrapper: {
      borderRadius: "15px",
      overflow: "hidden",
      marginBottom: "20px",
      border: "2px solid red",
      height: "300px",
      width: "100%",
    },
    title: {
      fontSize: "24px",
      fontWeight: "900",
      margin: "10px 0",
      color: "#ff4d4d",
      textTransform: "uppercase",
      textShadow: "0 0 10px red",
    },
    sectionTitle: {
      fontSize: "14px",
      fontWeight: "bold",
      color: "#aaa",
      marginTop: "20px",
      marginBottom: "10px",
      letterSpacing: "1px",
    },
    phaseBox: {
      border: "1px solid #333",
      borderRadius: "10px",
      padding: "12px",
      marginBottom: "10px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "#181818",
    },
    phaseActive: {
      border: "1px solid #00ff00",
      background: "rgba(0,255,0,0.1)",
    },
    hint: {
      fontSize: "11px",
      color: "#777",
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        
        {/* IMAGE */}
        <div style={styles.imageWrapper}>
          <img
            src="/alduin.jpg"
            alt="Portal 1414"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <h2 style={styles.title}>Portal 1414 Agent</h2>

        {/* PHASES */}
        <div style={styles.sectionTitle}>Minting Phases</div>

        {/* PHASE 1 */}
        <div style={{ ...styles.phaseBox, ...styles.phaseActive }}>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontWeight: "bold", fontSize: "14px" }}>
              PHASE 1 — FREE
            </div>
            <div style={{ fontSize: "10px", color: "#aaa" }}>
              Early Access
            </div>
          </div>
          <div
            style={{
              fontWeight: "bold",
              color: "#00ff00",
              fontSize: "16px",
            }}
          >
            LIVE
          </div>
        </div>

        {/* PHASE 2 */}
        <div style={styles.phaseBox}>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontWeight: "bold", fontSize: "14px" }}>
              PHASE 2
            </div>
            <div style={{ fontSize: "10px", color: "#aaa" }}>
              Public Sale
            </div>
          </div>
          <div style={{ fontWeight: "bold", fontSize: "14px" }}>
            10k $1414
          </div>
        </div>

        {/* INFO */}
        <div style={styles.hint}>
          NFT claiming is currently available only through the main Portal 1414 page.
        </div>

        <div style={styles.hint}>
          Contract is deployed on World Chain Mainnet.
        </div>
      </div>
    </div>
  );
};

export default Governance;

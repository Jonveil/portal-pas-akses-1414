import React, { useState } from 'react';

function App() {
  // State untuk notifikasi (Ganti alert https)
  const [message, setMessage] = useState("");

  // Fungsi untuk tunjuk mesej tanpa pop-up browser
  const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(""), 3000); // Hilang selepas 3 saat
  };

  // --- GAYA/STYLE (TEMA MERAH & HITAM) ---
  const styles = {
    container: {
      backgroundColor: 'black',
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Courier New', Courier, monospace", // Font ala hacker
      textAlign: 'center',
      padding: '20px',
    },
    logoContainer: {
      marginBottom: '20px',
      position: 'relative',
    },
    catImage: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      border: '4px solid #ff0000',
      boxShadow: '0 0 20px #ff0000', // Kesan neon merah
      objectFit: 'cover',
    },
    title: {
      fontSize: '2.5rem',
      color: '#ff0000',
      textShadow: '0 0 10px #ff0000', // Glow effect
      fontWeight: 'bold',
      letterSpacing: '2px',
      margin: '10px 0',
      textTransform: 'uppercase',
    },
    subtitle: {
      color: '#888',
      fontSize: '0.9rem',
      letterSpacing: '3px',
      marginBottom: '40px',
      textTransform: 'uppercase',
    },
    statusBox: {
      border: '1px solid #333',
      padding: '20px',
      borderRadius: '15px',
      backgroundColor: '#111',
      width: '100%',
      maxWidth: '350px',
      marginBottom: '30px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.5)',
    },
    statusTitle: {
      color: '#555',
      fontSize: '0.8rem',
      marginBottom: '5px',
    },
    statusValue: {
      color: '#ff0000',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      textShadow: '0 0 8px #ff0000',
    },
    enterButton: {
      backgroundColor: '#ff0000',
      color: 'white',
      border: 'none',
      padding: '15px 40px',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      borderRadius: '30px',
      cursor: 'pointer',
      boxShadow: '0 0 15px #ff0000',
      transition: 'transform 0.2s',
      width: '100%',
      maxWidth: '300px',
      marginTop: '10px',
    },
    menuGrid: {
      display: 'grid',
      gap: '15px',
      marginTop: '30px',
      width: '100%',
      maxWidth: '350px',
    },
    card: {
      backgroundColor: '#1a1a1a',
      border: '1px solid #333',
      padding: '15px',
      borderRadius: '10px',
      textAlign: 'left',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    notification: {
      position: 'fixed',
      top: '20px',
      backgroundColor: '#333',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
      zIndex: 1000,
    }
  };

  return (
    <div style={styles.container}>
      {/* Notifikasi Custom (Tanpa https popup) */}
      {message && <div style={styles.notification}>{message}</div>}

      <div style={styles.logoContainer}>
        {/* Gambar Kucing (Placeholder sebab fail asal mungkin tak ada, tapi gaya kekal) */}
        <img 
          src="https://media1.tenor.com/m/mZ30e1x-aW0AAAAd/cat-driving.gif" 
          alt="Agent Cat" 
          style={styles.catImage} 
        />
      </div>

      <h1 style={styles.title}>PORTAL 1414</h1>
      <p style={styles.subtitle}>THE GATE OPENS</p>

      <div style={styles.statusBox}>
        <p style={styles.statusTitle}>STATUS</p>
        <p style={styles.statusValue}>POWER UNLOCKS</p>
      </div>

      {/* Butang Merah Besar */}
      <button 
        style={styles.enterButton}
        onClick={() => showMessage("✅ Welcome Agent! Access Granted.")}
      >
        ENTER PORTAL
      </button>

      {/* Menu Pilihan */}
      <div style={styles.menuGrid}>
        <div style={styles.card} onClick={() => showMessage("⚠️ Check Pass: Coming Soon")}>
          <span style={{color: 'white'}}>🦊 Check Pass</span>
          <span style={{color: '#ff0000'}}>→</span>
        </div>

        <div style={styles.card} onClick={() => showMessage("⚠️ Voting: Coming Soon")}>
          <span style={{color: 'white'}}>🗳️ Vote (DAO)</span>
          <span style={{color: '#ff0000'}}>→</span>
        </div>
      </div>

      <footer style={{ marginTop: '50px', color: '#444', fontSize: '0.8rem' }}>
        &copy; 2026 1414 Corp.
      </footer>
    </div>
  );
}

export default App;
